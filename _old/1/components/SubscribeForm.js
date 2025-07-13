import React, { useState } from "react";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="w-full max-w-md">
      <iframe
        src="https://embeds.beehiiv.com/2b050d21-029c-4352-aab8-0c2b61203a26?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        className="w-full"
        style={{
          margin: 0,
          borderRadius: 0,
          borderImage:
            "linear-gradient(to right, var(--mesh-blue), var(--mesh-teal))",
          borderImageSlice: 1,
          backgroundColor: "gray",
          backgroundColor: "#1a1a1a",
        }}
        title="Subscribe to our newsletter"
      />
    </div>
  );
};

export default SubscribeForm;
