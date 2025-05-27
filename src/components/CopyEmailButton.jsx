import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "ashadshaikhofficial@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.p
          className="flex items-center justify-center gap-2"
          key="copy"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src={copied ? "assets/copy-done.svg" : "assets/copy.svg"}
            className="w-5"
            alt="copyIcon"
          />
          {copied ? "Email has Copied" : "Copy Email Address"}
        </motion.p>
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
