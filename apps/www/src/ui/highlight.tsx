
"use client";
import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// Define valid language options
type PrismLanguage = 
  | "javascript" 
  | "typescript" 
  | "json" 
  | "bash" 
  | "html" 
  | "css"
  | string; // Fallback for other languages

interface HighlightProps {
  language: PrismLanguage;
  children: string;
  className?: string;
}

export function Highlight({ language = "javascript", children, className }: HighlightProps) {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [children, language]);

  return (
    <pre className={`${className} rounded-lg`}>
      <code ref={codeRef} className={`language-${language}`}>
        {children.trim()}
      </code>
    </pre>
  );
}