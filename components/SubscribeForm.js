import React, { useState } from "react";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for subscribing!"); // Using alert instead of toast since toast might not be available
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className={cn(
          "flex-grow py-3 px-4 bg-transparent border border-r-0 border-gray-600 text-white focus:outline-none focus:border-white transition-colors",
          "placeholder:text-gray-500"
        )}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
        required
      />
      <button
        type="submit"
        className={cn(
          "bg-white text-black py-3 px-6 font-mono uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors focus:outline-none",
          isSubmitting && "opacity-75 cursor-not-allowed"
        )}
        disabled={isSubmitting}
      >
        {isSubmitting ? "..." : "Subscribe"}
      </button>
    </form>
  );
};

export default SubscribeForm;
