import type { ChangeClassProps } from "./utils/ChangeClass";
import ChangeClass from "./utils/ChangeClass";
// import { Injector } from "./utils/Injector";
// import PromptBox from "./components/promptBox";

// 1. Change target class using classList.contains (not selector string)
const initialize = () => {
  const cover: ChangeClassProps = {
    name: "chatbox",
    className: ".stretch.flex.flex-row.gap-3.lg\\:mx-auto.lg\\:max-w-3xl.mt-\\[40px\\]",
    changedClassName: ".stretch.flex.flex-col.gap-3.lg\\:mx-auto.lg\\:max-w-3xl.mt-\\[40px\\]",
  };
  console.log("Initializing content script...");

  ChangeClass(cover);

  // 2. Inject PromptBox using safe detection (selector logic is moved inside Injector)
//   Injector({
//     id: "prompt-box",
//     selector: "#__next > div > div.w-screen.h-screen.flex.overflow-hidden.light > main > div.relative.flex.flex-col.w-full.h-screen.justify-between.bg-white.dark\:bg-\[\#343541\].overflow-y-auto.overflow-x-hidden > div.flex.flex-col.justify-end.w-full.lg\:px-6.md\:px-4.px-4.bg-gradient-to-b.from-transparent.via-white.to-white.dark\:border-white\/20.dark\:via-\[\#343541\].dark\:to-\[\#343541\].absolute.bottom-0 > div > div",
//     component: <PromptBox />,
//     position: "append",
//     index: 1,
//   });
};

// 3. Attach listener when the chat input is ready
const boxCheck = () => {
  const box = document.getElementById("chat-input") as HTMLTextAreaElement | null;

  if (!box) {
    console.log("Waiting for chat input...");
    return false;
  }

  box.addEventListener("input", () => {
    console.log("User typed:", box.value);
  });

  console.log("Listener attached");
  return true;
};

const interval = setInterval(() => {
  if (boxCheck()) {
    clearInterval(interval);
    initialize();
  }
}, 500);
