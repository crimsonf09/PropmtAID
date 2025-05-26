import {  useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("App component rendered");
  const onClick = async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      if (tab?.id) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            const existing = document.getElementById("my-extension-div");
            if (existing) return;

            const div = document.createElement("div");
            div.id = "my-extension-div";
            div.textContent = "🚀 Hello from the extension!";
            Object.assign(div.style, {
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "10px 15px",
              backgroundColor: "#4ade80",
              color: "#000",
              fontSize: "14px",
              zIndex: "999999",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            });
            document.body.appendChild(div);
          },
        });
      } else {
        console.error("No active tab or tab.id not found.");
      }
    } catch (err) {
      console.error("Error injecting script:", err);
    }
  };
  // const [userPrompt, setUserPrompt] = useState("");

  // useEffect(() => {
  //   const box = document.getElementById("chat-input") as HTMLTextAreaElement | null;

  //   if (!box) {
  //     console.error("Chat input box not found.");
  //     return;
  //   }

  //   const handleInput = (e: Event) => {
  //     const value = (e.target as HTMLTextAreaElement).value;
  //     setUserPrompt(value);
  //     console.log("User Prompt:", value);
  //     console.log("user",userPrompt)
  //   };

  //   box.addEventListener("input", handleInput);

  //   return () => {
  //     box.removeEventListener("input", handleInput);
  //   };
  // }, []);
  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4">🚀 React Chrome Extension</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          onClick();
        }}
        className="px-5 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
