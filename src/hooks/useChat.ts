import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface UseChatOptions {
  onError?: (error: Error) => void;
}

export interface UseChatReturn {
  messages: Message[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  setMessages: (messages: Message[]) => void;
}

export function useChat(options: UseChatOptions = {}): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // Use streaming endpoint for better UX
      const response = await fetch('http://localhost:8000/api/chat/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '',
      };

      setMessages(prev => [...prev, assistantMessage]);

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              return;
            }
            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                setMessages(prev => prev.map(msg => 
                  msg.id === assistantMessage.id 
                    ? { ...msg, content: msg.content + parsed.content }
                    : msg
                ));
              }
            } catch (e) {
              console.error('Error parsing streaming data:', e);
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      if (options.onError) {
        options.onError(error as Error);
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting right now. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, messages, isLoading, options]);

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
  };
}
