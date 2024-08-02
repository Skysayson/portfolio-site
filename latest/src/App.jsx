import { useState } from "react";
import { Button } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import somaLogo from "./assets/somaLogo.png";
import jonazLogo from "./assets/fixed.png";
import { motion } from "framer-motion";
import jonazBg from "./assets/graybg.jpg";
import newBg from "./assets/bg.jpg";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("");
  const [logo, showSoma] = useState(false);
  const [selfie, showJonaz] = useState(false);
  const [headColor, setHeadColor] = useState("black");

  const handleHoverJonaz = (color) => {
    setBgColor(color);
    showJonaz(true);
    setHeadColor("warning");
  };

  const handleHoverSoma = (color) => {
    setBgColor(color);
    showSoma(true);
    setHeadColor("danger");
  };

  const handleLeaveSoma = () => {
    setBgColor("");
    showSoma(false);
    setHeadColor("black");
  };

  const handleLeaveJonaz = () => {
    setBgColor("");
    showJonaz(false);
    setHeadColor("black");
  };

  return (
    <NextUIProvider>
      <div className="relative w-screen h-screen overflow-hidden bg-[#fffafa]">
        {selfie && (
          <motion.img
            src={newBg}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, filter: "blur(8px)" }} // Initial state (hidden and blurred)
            animate={{ opacity: 1, filter: "blur(0px)" }} // Animation to show and remove blur
            exit={{ opacity: 1 }} // Animation to hide (no blur)
            transition={{ duration: 0.1, ease: "easeInOut" }} // Transition duration and easing
          />
        )}
        <div
          className={`flex relative w-screen h-screen justify-between items-center transition duration-100 ease-in-out bg-${bgColor} overflow-x-hidden overflow-y-hidden`}
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex left-0 top-0 h-screen w-screen border-black">
            {logo && (
              <motion.img
                src={somaLogo}
                className="relative h-[100%] left-[-5rem]"
                animate={{ x: 50, scale: 1 }}
              ></motion.img>
            )}
          </div>
          {logo && (
            <motion.div 
              className="flex absolute items-center justify-center w-screen h-screen border-white"
              animate={{x:-5}}
            >
              <h1 className="text-red-700 text-[5rem] mb-[20rem]">THE MUSIC</h1>
            </motion.div>
          )}

          {selfie && (
            <motion.div className="flex absolute items-center justify-center w-screen h-screen border-white"
            animate={{x:10}}
            >
              <h1 className="text-blue-600 text-[5rem] mb-[20rem]">THE TECH</h1>
            </motion.div>
          )}

          <div className="middleDiv flex border-black items-center justify-center w-[35rem] h-[10rem] flex-col">
            <h2 className={`text-[1.5rem] text-${headColor}`}>
              What brings you here?
            </h2>
            <div className="flex justify-evenly w-[20rem] mt-[1rem]">
              <Button
                color="warning"
                variant="ghost"
                onMouseEnter={() => handleHoverJonaz(`rgba(0, 0, 0, 0.8)`)}
                onMouseLeave={handleLeaveJonaz}
              >
                Jonaz Juan Sayson
              </Button>

              <Button
                color="danger"
                variant="ghost"
                onMouseEnter={() => handleHoverSoma("black")}
                onMouseLeave={handleLeaveSoma}
              >
                ssoma.
              </Button>
            </div>
          </div>
          <div className="flex  border-black items-center justify-end h-screen w-screen pointer-events-none z-20">
            {selfie && (
              <motion.img
                src={jonazLogo}
                className="flex border-warning-500 rounded-[100rem] relative h-[60%]"
                animate={{ x: -50, scale: 1 }}
              />
            )}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
