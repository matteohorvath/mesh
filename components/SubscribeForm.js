import React, { useState } from "react";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      // Call beehiiv API to add subscriber
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${BEEHIIV_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            reactivate_existing: true,
            send_welcome_email: true,
            utm_source: "website",
            utm_medium: "organic",
            utm_campaign: "footer_subscribe",
            referring_site: window.location.href,
          }),
        }
      );

      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className={cn(
          "flex-grow py-3 px-4 bg-transparent border border-r-0 border-gray-600 text-white focus:outline-none focus:border-mesh-teal transition-colors",
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
          "bg-gradient-to-r from-mesh-blue to-mesh-teal text-white py-3 px-6 font-mono uppercase text-sm tracking-wider hover:from-mesh-blue hover:to-mesh-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mesh-teal focus:ring-offset-2 focus:ring-offset-black",
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
