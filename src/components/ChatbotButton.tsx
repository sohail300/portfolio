import { useState } from "react";
import FloatingChatWidget from "./FloatingChatWidget";
import chatbotIcon from "../../public/chatbot.png";

export default function ChatbotButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#3796f1] hover:bg-[#2d7ce8] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center group"
        aria-label="Open chatbot"
      >
        <img
          src={chatbotIcon}
          alt="Chatbot"
          className="w-12 h-12 object-contain filter brightness-0 invert"
        />
        {/* Pulse animation when not open */}
        {!isChatOpen && (
          <div className="absolute inset-0 rounded-full bg-[#3796f1] opacity-20"></div>
        )}
      </button>

      {/* Chat Widget */}
      <FloatingChatWidget
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
}
