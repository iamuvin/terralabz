import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Loader2, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatbotDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Terra AI, your advanced technology assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const synth = window.speechSynthesis;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userInput: string) => {
    // Simulate AI processing with predefined responses
    const responses = [
      "I'd be happy to tell you more about our AI and blockchain solutions. What specific aspect interests you?",
      "Our drone technology combines advanced AI with precision engineering. Would you like to learn more?",
      "Terra Labz specializes in cutting-edge medical technology. I can provide details about our innovations.",
      "We offer comprehensive blockchain solutions for various industries. What's your use case?",
      "Our AI systems are designed for maximum efficiency and accuracy. Let me explain how they work."
    ];
    
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate thinking
    setIsTyping(false);
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const speakMessage = (text: string) => {
    if (synth.speaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    synth.speak(utterance);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const response = await generateResponse(input);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
  };

  const chatVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 }
  };

  return (
    <div className={`fixed ${isExpanded ? 'inset-4' : 'bottom-4 right-4'} z-50`}>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <Bot size={20} />
          Try Our AI Assistant
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={chatVariants}
            className={`${isExpanded ? 'w-full h-full' : 'w-[380px] h-[600px]'} 
              bg-gradient-to-br from-black/95 to-black/90 backdrop-blur-lg rounded-lg shadow-2xl 
              border border-gray-800 flex flex-col transition-all duration-300`}
          >
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot size={24} className="text-secondary" />
                  {isTyping && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Terra AI Assistant</h3>
                  {isTyping && (
                    <p className="text-xs text-secondary">Thinking...</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-white'
                        : 'bg-gray-800 text-gray-200'
                    }`}
                  >
                    <p>{message.text}</p>
                    <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                      <span>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                      {!message.isUser && (
                        <button
                          onClick={() => speakMessage(message.text)}
                          className="ml-2 p-1 hover:bg-gray-700 rounded"
                        >
                          {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 rounded-lg p-4">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our technologies..."
                  className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-primary p-2"
                  disabled={!input.trim() || isTyping}
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotDemo;