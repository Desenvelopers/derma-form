import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import avLogo from "@/assets/av.svg";
import ipbLogo from "@/assets/ipb.svg";
import utfprLogo from "@/assets/utfpr.svg";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// TODO 1: change the links from the logos to the correct ones
// TODO 2: change the question, dynamicWords and the button text to the correct ones

export const Route = createFileRoute("/")({
  component: HomePageComponent,
});

function HomePageComponent() {
  const dynamicWords = useMemo(() => ["hidratação", "reparação", "rejuvenecimento", "cuidado" ], []);
  const [currentWord, setCurrentWord] = useState("");
  const [typingState, setTypingState] = useState({ i: 0, wordIndex: 0, deleting: false });

  useEffect(() => {
    const { i, wordIndex, deleting } = typingState;
    const updateTyping = () => {
      if (!deleting) {
        if (i < dynamicWords[wordIndex].length) {
          setCurrentWord(prevState => prevState + dynamicWords[wordIndex].charAt(i));
          setTypingState(prevState => ({ ...prevState, i: prevState.i + 1 }));
        } else {
          setTimeout(() => setTypingState(prevState => ({ ...prevState, deleting: true })), 2000);
        }
      } else {
        if (currentWord.length > 0) {
          setCurrentWord(currentWord.slice(0, -1));
        } else {
          setTypingState({ i: 0, wordIndex: (wordIndex + 1) % dynamicWords.length, deleting: false });
        }
      }
    };

    const typingEffect = setInterval(updateTyping, deleting ? 100 : 200);

    return () => clearInterval(typingEffect);
  }, [typingState, currentWord, dynamicWords]);

  return (
    <div className="flex flex-col justify-between min-h-screen items-center">
      <div className="flex flex-col gap-8 items-center h-[50vh] justify-end">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-display text-3xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl md:leading-[5rem]">
            Sua pele precisa de
            <motion.span
              key={currentWord}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-block ml-2"
            >
              {currentWord}
            </motion.span>
          </h1>
        </div>
        <Button variant="ringHover" className="inline-block w-auto" asChild>
          <Link to="/form">
          Faça o teste agora e <b>descubra</b>
          </Link>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center mb-24">
        <a href="https://react.dev" target="_blank">
          <img src={avLogo} alt="AV logo" className="h-20" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ipbLogo} alt="IPB logo" className="h-14" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={utfprLogo} alt="UTFPR logo" className="h-16" />
        </a>
      </div>
    </div>
  );
}
