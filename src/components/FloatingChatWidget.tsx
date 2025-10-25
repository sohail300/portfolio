import { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import avatarPhoto from "../../public/chat.jpeg";
import userAvatar from "../../public/user-avatar.png";
import { useChat } from "@/hooks/useChat";

interface FloatingChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FloatingChatWidget({ isOpen, onClose }: FloatingChatWidgetProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Use our custom useChat hook that works with the existing backend
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    onError: (error) => {
      console.error('Chat error:', error);
    },
  });

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      // Try multiple selectors for different ScrollArea implementations
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') || 
                             scrollAreaRef.current.querySelector('.scroll-area') ||
                             scrollAreaRef.current;
      
      if (scrollContainer) {
        setTimeout(() => {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }, 100);
      }
    }
  }, [messages, isLoading]);

  // Prevent scroll propagation to the main page
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    const widgetElement = widgetRef.current;
    if (widgetElement && isOpen) {
      widgetElement.addEventListener('wheel', handleWheel, { passive: true });
      return () => {
        widgetElement.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      // Try multiple selectors for different ScrollArea implementations
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') || 
                             scrollAreaRef.current.querySelector('.scroll-area') ||
                             scrollAreaRef.current;
      
      if (scrollContainer) {
        setTimeout(() => {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }, 100);
      }
    }
  }, [messages, isLoading]);

  // No need to prevent body scroll - let the page scroll normally

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const chatbotButton = document.querySelector('[aria-label="Open chatbot"]');
      
      // Don't close if clicking on the chatbot button or inside the widget
      if (widgetRef.current && 
          !widgetRef.current.contains(target) && 
          !chatbotButton?.contains(target)) {
        onClose();
      }
    };

    if (isOpen) {
      // Add a small delay to prevent immediate closing when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    handleSubmit(e);
    
    // Force scroll to bottom after sending message
    setTimeout(() => {
      if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') || 
                               scrollAreaRef.current.querySelector('.scroll-area') ||
                               scrollAreaRef.current;
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
      }
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={widgetRef}
      className="fixed bottom-20 right-4 w-80 h-96 bg-background border border-gray-200 rounded-lg shadow-lg z-50 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={avatarPhoto} alt="S" className="object-cover" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <div className="font-medium">Sohail</div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="bg-slate-50 text-black hover:bg-slate-100 hover:text-black text-xs px-2 py-1"
            onClick={() => setMessages([])}
          >
            Clear
          </Button>
          <Button
            className="bg-slate-50 text-black hover:bg-slate-100 hover:text-black text-xs px-2 py-1"
            onClick={onClose}
          >
            ✕
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 space-y-4 overflow-y-auto scroll-area">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 mt-4 ${
              message.role === "user" ? "justify-end" : ""
            }`}
          >
            {message.role === "assistant" && (
              <Avatar className="w-6 h-6 bg-secondary text-secondary-foreground">
                <AvatarImage
                  src={avatarPhoto}
                  alt="S"
                  className="object-cover"
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg p-3 max-w-[75%] text-sm ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground bg-[#3796f1]"
                  : "bg-muted"
              }`}
            >
              {message.content ? (
                <p>{message.content}</p>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                </div>
              )}
            </div>
            {message.role === "user" && (
              <Avatar className="w-6 h-6">
                <AvatarImage src={userAvatar} alt="Your avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </ScrollArea>

      {/* Input */}
      <form onSubmit={sendMessage} className="bg-muted px-4 py-3 flex items-center gap-2 rounded-b-lg">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg px-3 py-2 text-sm"
          value={input}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(e);
            }
          }}
        />
        <Button
          type="submit"
          size="icon"
          className="bg-[#3796f1] text-primary-foreground w-8 h-8"
          disabled={isLoading}
        >
          <SendIcon className="w-4 h-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    </div>
  );
}

interface SendIconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any additional specific props here
}

function SendIcon(props: SendIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
