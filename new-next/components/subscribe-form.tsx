import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Add your newsletter subscription logic here
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4">Stay in the loop</h3>
      <p className="text-muted-foreground text-sm mb-4">
        Get updates about new projects, events, and opportunities.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-accent text-primary-foreground"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      {message && (
        <p
          className={`text-sm mt-2 ${
            message.includes("Thanks") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default SubscribeForm;
