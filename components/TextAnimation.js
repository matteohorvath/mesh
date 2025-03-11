"use client";

import { useState, useEffect, useRef } from "react";

let ARR_INDEX = 0;

export default function TextAnimation({ strings, waitTime, stepTime }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  // Calculate Levenshtein distance and transformation steps
  const calculateLevenshteinSteps = (source, target) => {
    // Create distance matrix
    const m = source.length;
    const n = target.length;
    const dp = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));

    // Initialize first row and column
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // Fill the matrix
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (source[i - 1] === target[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j - 1] + 1, // substitution
            dp[i][j - 1] + 1, // insertion
            dp[i - 1][j] + 1 // deletion
          );
        }
      }
    }

    // Backtrack to find the transformation steps
    const steps = [];
    let i = m;
    let j = n;

    // Create a copy of the source string that we'll transform step by step
    let currentString = source;

    // Add the initial state
    steps.push(currentString);

    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && source[i - 1] === target[j - 1]) {
        // Characters match, no operation needed
        i--;
        j--;
      } else {
        // We need to make a change
        if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
          // Substitution
          const chars = currentString.split("");
          chars[i - 1] = target[j - 1];
          currentString = chars.join("");
          steps.push(currentString);
          i--;
          j--;
        } else if (j > 0 && (i === 0 || dp[i][j] === dp[i][j - 1] + 1)) {
          // Insertion
          const chars = currentString.split("");
          chars.splice(i, 0, target[j - 1]);
          currentString = chars.join("");
          steps.push(currentString);
          j--;
        } else if (i > 0 && (j === 0 || dp[i][j] === dp[i - 1][j] + 1)) {
          // Deletion
          const chars = currentString.split("");
          chars.splice(i - 1, 1);
          currentString = chars.join("");
          steps.push(currentString);
          i--;
        }
      }
    }

    // If the initial and final states are the same, we need at least one step
    if (steps.length === 1) {
      steps.push(target);
    }

    // Remove duplicate steps
    const uniqueSteps = steps.filter(
      (step, index, self) => index === 0 || step !== self[index - 1]
    );

    return uniqueSteps;
  };

  // Start animation cycle
  const startAnimationCycle = () => {
    // setIsAnimating(true)
    const currentText = strings[ARR_INDEX];
    // setCurrentIndex((currentIndex + 1)) //% strings.length
    ARR_INDEX = (ARR_INDEX + 1) % strings.length;
    const nextText = strings[ARR_INDEX];
    // setIsAnimating(false)

    // Calculate transformation steps
    const steps = calculateLevenshteinSteps(currentText, nextText);

    // Animate through steps
    let stepIndex = 0;

    const animateStep = () => {
      if (stepIndex < steps.length) {
        setDisplayText(steps[stepIndex]);
        stepIndex++;

        timeoutRef.current = setTimeout(animateStep, stepTime * 1000);
      } else {
        // Animation complete, update current index and wait for next cycle
        timeoutRef.current = setTimeout(startAnimationCycle, waitTime * 1000);
      }
    };

    // Start the animation
    animateStep();
  };

  // Initialize and handle changes
  useEffect(() => {
    if (strings.length === 0) return;

    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Initialize display text with the first string
    setDisplayText(strings[currentIndex]);

    // Start first animation cycle after wait time
    timeoutRef.current = setTimeout(startAnimationCycle, waitTime * 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []); // Only run on mount

  return (
    <span className="text-5xl md:text-6xl lg:text-7xl font-bold font-monda text-white leading-tight mb-8 relative overflow-hidden">
      <span className="rotate-animation text-transparent bg-clip-text bg-gradient-to-r from-mesh-blue to-mesh-teal">
        {displayText}
      </span>
    </span>
  );
}
