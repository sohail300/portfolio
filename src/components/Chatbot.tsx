import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import avatarPhoto from "../../public/chat.jpeg";
import userAvatar from "../../public/user-avatar.png";
import { motion } from "framer-motion";
import { api } from "@/utils/config";

export default function Component() {
  const text =
    "An AI-powered digital avatar that embodies my persona, offering interactive insights into my skills and experiences".split(
      " "
    );

  interface SingleMessage {
    type: string;
    content: string;
  }

  interface Message {
    content: string;
  }

  const [messages, setMessages] = useState<SingleMessage[]>([]);
  const [requestMessages, setRequestMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const newMessage = {
      type: "user",
      content: inputMessage,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const updatedRequestMessages = [
      ...requestMessages,
      { content: inputMessage },
    ];
    setRequestMessages(updatedRequestMessages);

    setInputMessage("");
    setIsLoading(true);

    try {
      console.log(updatedRequestMessages);
      const response = await api.post("/api/chat", {
        messages: updatedRequestMessages,
      });

      console.log(response.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          type: "bot",
          content: response.data.msg, // Assuming the response contains the bot's message
        },
      ]);
    } catch (error) {
      console.error("Error getting response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Scroll to bottom when messages update
    const scrollArea = document.querySelector(".scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className=" flex flex-col z-0 px-4 py-8 lg:px-24"
      id="projects"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Chatbot
      </div>
      <div className=" heading text-center mb-8">
        {text.map((el, i) => (
          <motion.span
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-col h-[600px] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-background shadow-lg">
        <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={avatarPhoto} alt="S" className="object-cover" />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="font-medium">Sohail</div>
          </div>
          <Button
            className=" bg-slate-50 text-black hover:bg-slate-100 hover:text-black"
            onClick={() => setMessages([])}
          >
            Clear Chat
          </Button>
        </div>
        <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto scroll-area">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 mt-4 ${
                message.type === "user" ? "justify-end" : ""
              }`}
            >
              {message.type === "bot" && (
                <Avatar className="w-8 h-8 bg-secondary text-secondary-foreground">
                  <AvatarImage
                    src={avatarPhoto}
                    alt="S"
                    className="object-cover"
                  />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 max-w-[75%] ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground bg-[#3796f1]"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
              </div>
              {message.type === "user" && (
                <Avatar className="w-8 h-8">
                  <AvatarImage src={userAvatar} alt="Your avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 mt-4">
              <Avatar className="w-8 h-8 bg-secondary text-secondary-foreground">
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div className="bg-muted rounded-lg p-3 max-w-[75%]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
        <div className="bg-muted px-4 py-3 flex items-center gap-2">
          <Textarea
            placeholder="Type your message..."
            className="flex-1 resize-none rounded-lg px-3 py-2 text-sm"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />
          <Button
            size="icon"
            className="bg-[#3796f1] text-primary-foreground"
            onClick={sendMessage}
          >
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
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
