import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./button";
import { cn } from "./utils";
import { AnimatePresence,motion } from "framer-motion";
interface Message {
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
}

interface SuggestedQuestion {
    id: string;
    text: string;
    category: string;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hi! Welcome to MolKet! 👋 I can help you learn about our quantum molecular dynamics services, team, and more. Try asking a question below or click on a suggested topic!",
            isBot: true,
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const suggestedQuestions: SuggestedQuestion[] = [
        {id: "1", text: "What is Molket?", category: "molket"},
        {id: "2", text: "Tell me about MolKet.jl", category: "resources"},
        {id: "3", text: "Who are the founders?", category: "team"},
        {id: "4", text: "How can I request a demo?", category: "demo"},
        {id: "5", text: "What services do you offer?", category: "services"},
        {id: "6", text: "Contact information", category: "contact"},
        {id: "7", text: "Where is MolKet located?", category: "location"},
        {id: "8", text: "Who works at molket", category: "who works at molket"},
        {id: "9", text: "How to reach MolKet", category: "how to reach molket"},
        {id: "10", text: "What is MolKet's company?", category: "molket company"},
        {id: "11", text: "Who is Dr. Taha?", category: "taha"},
        {id: "12", text: "Who is Dr. alain ?", category: "alain"},
        { id: "13", text: "How does MolKet contribute to cryptography?", category: "cryptography" },
        { id: "14", text: "How does MolKet use AI?", category: "ai" },
        { id: "15", text: "What publications or talks has MolKet contributed to?", category: "talks" }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const knowledgeBase = {
        navbar: {
            keys: [
                "logo", "home", "about", "services", "how it works", "team", "contact",
                "resources", "use cases", "lab", "molket.jl", "molket", "molket.io"
            ],
            answers: {
                "logo": "Our logo is MolKet.",
                "home": "Welcome to MolKet Home. We provide next-generation quantum solutions.",
                "about": "MolKet focuses on fast, accurate molecular design simulations assisted by AI.",
                "services": "Our services include quantum molecular dynamics, cryptography, and neuromorphic computing.",
                "how it works": "MolKet offers an AI-assisted environment for designing and running quantum simulations step-by-step.",
                "team": "Our founders include Dr. Taha Selim and Alain Chancé, experts in quantum computing and consulting.",
                "contact": "You can contact us at contact@molket.io or business@molket.io for inquiries.",
                "resources": "Resources include Use Cases, Lab, and MolKet.jl library.",
                "use cases": "MolKet's use cases include molecular simulations, quantum cryptography, and neuromorphic AI applications.",
                "lab": "Our lab develops innovative quantum computing algorithms and open-source tools.",
                "molket": "MolKet is a company specialized in quantum molecular dynamics and AI-powered simulations. MolKet offers management consulting and AI services for:\n" +
                    "\n" +
                    "Quantum molecular dynamics\n" +
                    "Cryptography\n" +
                    "Neuromorphic-based computing\n" +
                    "Supported by cloud-based hybrid HPC & quantum computing platforms, enabling the development of advanced machine learning algorithms with significant predictive power.\n",
                "molket.io": "Visit our website at https://molket.io for more information.",
                "molket.jl": "MolKet.jl is our open-source Julia library for quantum simulations. Visit https://github.com/MolKet/MolKet.jl for more information."
            }
        },
        home: {
            keys: [
                "quantum molecular dynamics", "cryptography", "neuromorphic computing",
                "request demo", "explore services", "molket demo", "demo request"
            ],
            answers: {
                "quantum molecular dynamics": "We offer cutting-edge quantum molecular dynamics services for molecular design and simulation.",
                "cryptography": "Our cryptography solutions leverage quantum computing techniques for enhanced security.",
                "neuromorphic computing": "Neuromorphic-based computing is part of our advanced AI services, mimicking brain-like processing.",
                "request demo": "You can request a demo via our website to see MolKet in action.",
                "explore services": "Explore our full range of services for quantum and HPC computing.",
                "molket demo": "Request a MolKet demo on our website to learn more about our solutions.",
                "demo request": "Submit your demo request on our contact page for a personalized walkthrough."
            }
        },
        about: {
            keys: [
                "molecular design", "chemistry simulations", "ai", "consulting",
                "datasets", "physics-based kernels", "molket company", "who is molket"
            ],
            answers: {
                "molecular design": "We use AI to accelerate molecular design simulations, making them faster and more accurate.",
                "chemistry simulations": "Our simulations are faster and easier, assisted by AI and quantum computing technologies.",
                "ai": "AI trains general Hamiltonians for efficient quantum simulations and predictive modeling.",
                "consulting": "We offer consulting for AI training on chemistry, biology, materials science, and cosmology datasets.",
                "datasets": "We work with diverse datasets from chemistry, biology, and physics to train our advanced models.",
                "physics-based kernels": "Our models use physics-based kernels for superior predictive power and accuracy.",
                "molket company": "MolKet is a leading company focused on quantum computing solutions for molecular design.",
                "who is molket": "MolKet is an innovative quantum computing company founded by experts in quantum chemistry and AI."
            }
        },
        services: {
            keys: [
                "algorithm design", "application adaptation", "training",
                "consultancy", "knowledge transfer", "quantum services", "molket services"
            ],
            answers: {
                "algorithm design": "We design custom algorithms optimized for your quantum molecular dynamics needs.",
                "application adaptation": "We help integrate HPC and quantum computing into your existing applications.",
                "training": "We provide training and consultancy to help your team master quantum technologies.",
                "consultancy": "Expert consultancy services are available for AI and quantum computing implementation.",
                "knowledge transfer": "We assist with knowledge transfer to enhance your team's quantum computing capabilities.",
                "quantum services": "MolKet provides comprehensive quantum and HPC services tailored to your specific needs.",
                "molket services": "Our MolKet services cover algorithm development, training, and consulting for quantum solutions."
            }
        },
        team: {
            keys: [
                "taha","selim", "alain","chance", "founders", "credentials",
                "talks", "publications", "molket team", "who works at molket"
            ],
            answers: {
                "taha": "Dr. Taha Selim is our General Manager with a PhD in Quantum Theoretical & Computational Chemistry.",
                "selim": "Dr. Taha Selim is our General Manager with a PhD in Quantum Theoretical & Computational Chemistry.",
                "alain": "Alain Chancé is our President with 30+ years of experience in management consulting and quantum computing.",
                "Chance": "Alain Chancé is our President with 30+ years of experience in management consulting and quantum computing.",
                "founders": "Our founders are Dr. Taha Selim and Alain Chancé, both experts in quantum computing and business.",
                "credentials": "Our team holds PhDs and extensive experience in quantum physics, chemistry, and AI development.",
                "talks": "Our founders regularly speak at top conferences like JuliaCon and APS March Meeting.",
                "publications": "They have authored important publications in quantum chemistry and computing research.",
                "molket team": "Our team consists of experts in quantum computing, AI development, and scientific consulting.",
                "who works at molket": "MolKet employs specialists in quantum computing, AI development, and scientific consulting."
            }
        },
        contact: {
            keys: [
                "location", "address", "email", "phone", "demo",
                "contact", "molket contact", "how to reach molket"
            ],
            answers: {
                "location": "We are located at MOLKET SAS, 38 rue des Mathurins, Paris, France.",
                "address": "Our address is 38 rue des Mathurins, Paris, France.",
                "email": "You can email us at contact@molket.io or business@molket.io for inquiries.",
                "phone": "Reach us by phone at +33 1 23 45 67 89 for direct communication.",
                "demo": "Request a demo to see our quantum simulation solutions firsthand.",
                "contact": "Feel free to contact us via email or phone for any questions about our services.",
                "molket contact": "Contact MolKet through our website or email for quantum computing inquiries.",
                "how to reach molket": "You can reach MolKet via public transport or car to our Paris office."
            }
        }
    };

    const getBotResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase();

        // greetings or part from it
        const isGreetingMessage = (message: string): string | null => {
            const greetings = ["hi", "hello", "hey", "good morning", "good afternoon"];
            if (greetings.some((g) => message.toLowerCase().includes(g))) {
                return "Hello! How can I help you with MolKet's quantum computing services, team, or contact info?";
            }
            return null;
        };
        const greetingResponse = isGreetingMessage(message);
        if (greetingResponse) {
            return greetingResponse;
        }

        // goodbye
        const isGoodbyeMessage = (message: string): string | null => {
            const goodbyes = ["bye", "goodbye", "see you later", "see you soon", "see ya"];
            if (goodbyes.some((g) => message.toLowerCase().includes(g))) {
                return "Goodbye! Thank you for your interest in MolKet. Feel free to reach out anytime!";
            }
            return null;
        };
        const goodbyeResponse = isGoodbyeMessage(message);
        if (goodbyeResponse) {
            return goodbyeResponse;
        }

        // Flatten keys and map them to answers with category context
        const allQA: { keyword: string; answer: string; }[] = [];

        for (const category in knowledgeBase) {
            const catData = (knowledgeBase as any)[category];
            for (let i = 0; i < catData.keys.length; i++) {
                const key = catData.keys[i];
                const ans = catData.answers[key];
                if (ans) {
                    allQA.push({keyword: key.toLowerCase(), answer: ans});
                }
            }
        }

        // Try to find exact match first (highest priority)
        for (const qa of allQA) {
            if (message === qa.keyword) {
                return qa.answer;
            }
        }

        // Try to find longest substring match anywhere in message or keyword
        let bestMatch = "";
        let bestAnswer = "";

        for (const qa of allQA) {
            if (message.includes(qa.keyword) || qa.keyword.includes(message)) {
                if (qa.keyword.length > bestMatch.length) {
                    bestMatch = qa.keyword;
                    bestAnswer = qa.answer;
                }
            }
        }

        if (bestAnswer) {
            return bestAnswer;
        }

        // Try partial word matching
        const words = message.split(/\W+/);

        for (const qa of allQA) {
            for (const word of words) {
                if (word.length > 0 && (qa.keyword.includes(word) || word.includes(qa.keyword))) {
                    return qa.answer;
                }
            }
        }

        return "Sorry, I didn't understand your question. Could you please rephrase or ask about MolKet's quantum services, team, or contact info? You can also try the suggested questions above!";
    };

    const handleSuggestedQuestion = (question: string) => {
        // Don't set input value, directly send the question
        setShowSuggestions(false);

        const userMessage: Message = {
            id: Date.now().toString(),
            text: question,
            isBot: false,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(question),
                isBot: true,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
            setShowSuggestions(true); // Show suggestions again after bot response
        }, 1000 + Math.random() * 1000);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            isBot: false,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);
        setShowSuggestions(false);

        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(inputValue),
                isBot: true,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
            setShowSuggestions(true); // Show suggestions again after bot response
        }, 1000 + Math.random() * 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95",
                        isOpen
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    )}
                >
                    {isOpen ? (
                        <X className="h-6 w-6 text-white" />
                    ) : (
                        <MessageCircle className="h-6 w-6 text-white animate-pulse" />
                    )}
                </Button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">MolKet Assistant</h3>
                                    <p className="text-xs opacity-90 animate-fade-in">Online • Ready to help</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex items-start space-x-2 animate-fade-in",
                                        message.isBot ? "justify-start" : "justify-end"
                                    )}
                                >
                                    {message.isBot && (
                                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Bot className="h-3 w-3 text-white" />
                                        </div>
                                    )}
                                    <div
                                        className={cn(
                                            "max-w-[80%] p-3 rounded-2xl text-sm transition-all duration-200",
                                            message.isBot
                                                ? "bg-gray-100 text-gray-800 rounded-bl-sm"
                                                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm"
                                        )}
                                    >
                                        {message.text}
                                    </div>
                                    {!message.isBot && (
                                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                                            <User className="h-3 w-3 text-white" />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Suggested Questions */}
                            {showSuggestions && !isTyping && (
                                <div className="space-y-3 animate-fade-in">
                                    <p className="text-xs text-gray-500 text-center">Try asking about:</p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {[...suggestedQuestions]
                                            .sort(() => 0.5 - Math.random())
                                            .slice(0, 6)
                                            .map((suggestion, idx) => (
                                                <button
                                                    key={suggestion.id}
                                                    onClick={() => handleSuggestedQuestion(suggestion.text)}
                                                    className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 px-3 py-2 rounded-full border border-blue-200 transition-transform duration-300 hover:scale-105 active:scale-95"
                                                    style={{ animationDelay: `${idx * 0.05}s` }}
                                                >
                                                    {suggestion.text}
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* Typing */}
                            {isTyping && (
                                <div className="flex items-start space-x-2 animate-fade-in">
                                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                        <Bot className="h-3 w-3 text-white" />
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "0.1s" }}
                                            ></div>
                                            <div
                                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                style={{ animationDelay: "0.2s" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all duration-200"
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                    className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-transform duration-200 active:scale-95 disabled:opacity-50"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );

}

export default ChatBot;
