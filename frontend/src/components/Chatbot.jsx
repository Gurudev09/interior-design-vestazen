import React, { useState } from "react";

const faqList = [
  {
    question: "What is interior design?",
    answer:
      "Interior design is the art and science of enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment for the people using it."
  },
  {
    question: "How much does interior design cost?",
    answer:
      "Costs vary based on the size, materials, and complexity. For a basic room, it can start from ₹50,000, while a full house can range from ₹3 lakhs to ₹20 lakhs or more."
  },
  {
    question: "What types of designs do you offer?",
    answer:
      "We offer modern, contemporary, traditional, minimalist, and custom designs tailored to your preferences and budget."
  },
  {
    question: "Can I get design for a single room?",
    answer:
      "Yes! We provide solutions for single rooms, kitchens, living rooms, bedrooms, or the entire house."
  },
  {
    question: "What do I get for my budget?",
    answer:
      "You get a complete design plan, material selection, project management, and execution. We maximize value for your budget."
  }
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! Ask me anything about interior design, costs, or your project."
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    // Find answer
    const match = faqList.find(faq =>
      faq.question.toLowerCase().includes(input.toLowerCase())
    );
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        {
          from: "bot",
          text: match ? match.answer : "Thank you for your question! We'll get back to you soon."
        }
      ]);
    }, 500);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button */}
      {!open && (
        <button
          className="bg-[#6e2c1c] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#a34c3a] transition-colors duration-200"
          onClick={() => setOpen(true)}
          aria-label="Open Chatbot"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}
      {/* Chat window */}
      {open && (
        <div className="w-80 bg-white rounded-xl shadow-2xl border border-[#cbbab6] flex flex-col">
          <div className="bg-[#6e2c1c] text-white rounded-t-xl px-4 py-3 font-serif text-lg flex justify-between items-center">
            <span>Interior FAQ Chatbot</span>
            <button
              className="text-white text-xl ml-2 hover:text-[#cbbab6]"
              onClick={() => setOpen(false)}
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>
          <div className="flex-1 px-4 py-2 overflow-y-auto" style={{ maxHeight: 320 }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm font-serif max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-[#cbbab6] text-[#6e2c1c]"
                      : "bg-[#f8f6f2] text-[#222] border border-[#cbbab6]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-[#cbbab6] flex gap-2">
            <input
              className="flex-1 border border-[#cbbab6] rounded-lg px-3 py-2 text-sm font-serif focus:outline-none"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question..."
              onKeyDown={e => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-[#6e2c1c] text-white rounded-lg px-4 py-2 font-serif hover:bg-[#a34c3a] transition-colors duration-200"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
          <div className="px-4 py-2 border-t border-[#cbbab6] bg-[#f8f6f2]">
            <div className="text-xs text-[#6e2c1c] font-serif mb-1">Quick Questions:</div>
            <div className="flex flex-wrap gap-2">
              {faqList.map((faq, idx) => (
                <button
                  key={idx}
                  className="bg-[#cbbab6] text-[#6e2c1c] rounded px-2 py-1 text-xs font-serif hover:bg-[#a34c3a] hover:text-white transition-colors duration-200"
                  onClick={() => setInput(faq.question)}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
