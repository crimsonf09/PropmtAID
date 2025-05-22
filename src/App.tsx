import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

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
            div.style.position = "fixed";
            div.style.bottom = "20px";
            div.style.right = "20px";
            div.style.padding = "10px 15px";
            div.style.backgroundColor = "#4ade80"; // Tailwind green
            div.style.color = "#000";
            div.style.fontSize = "14px";
            div.style.zIndex = "999999";
            div.style.borderRadius = "8px";
            div.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            document.body.appendChild(div);
          }
        });
      } else {
        console.error("No active tab or tab.id not found.");
      }
    } catch (err) {
      console.error("Error injecting script:", err);
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>🚀 React Chrome Extension</h1>
      <button onClick={() => {
        setCount(c => c + 1);
        onClick();
      }} style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        backgroundColor: '#1d4ed8',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
      }}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
