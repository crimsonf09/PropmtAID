import {  useState } from "react";

function App() {
  console.log("App component rendered");
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = async () => {
    setIsOn(!isOn);
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
  return (
    <div className="p-4 font-sans bg-blue-400">
      <h1 className="text-2xl font-bold mb-10">🚀 PromptAID Extension</h1>
      <div className="flex items-center space-x-3">
            {/* Switch */}
            <button
                onClick={toggleSwitch}
                className={`relative inline-flex items-center h-6 w-11 rounded-full  ${
                    isOn ? "bg-blue-500" : "bg-gray-300"
                }`}
            >
                <span
                    className={`absolute left-0 top-0 h-5 w-5 rounded-full bg-white transition-transform ${
                        isOn ? "translate-x-5" : "translate-x-0"
                    }`}
                ></span>
            </button>

            {/* Label */}
            <span className="text-gray-900 font-medium">
                {isOn ? "ON" : "OFF"}
            </span>
        </div>
    </div>
  );
}

export default App;
