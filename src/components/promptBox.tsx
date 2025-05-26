// import React from 'react';

import type { FC } from "react";


const PromptBox: FC = () => {
  return (
    <div className="relative flex flex-grow flex-col rounded-xl border border-black/10 bg-white shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-[#40414F] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
      <div className="relative flex items-center">
        <textarea
          className="w-full resize-none border-0 rounded bg-transparent py-3 px-4 text-black dark:bg-transparent dark:text-white dark:placeholder-gray-500 truncate focus:outline-none whitespace-pre-wrap max-h-[150px]"
          id="chat-input"
          placeholder="promptAid . . ."
          rows={1}
          style={{ overflow: 'auto', height: 'auto', bottom: '64px' }}
        ></textarea>
      </div>
      {/* file attach */}
      {/* <div className="flex items-center justify-start gap-2 rounded-t-md pr-8">
        <div className="cursor-pointer flex flex-wrap justify-around items-center gap-1 text-sm px-3 py-[6px] mb-2 first:ml-3 rounded-full text-gray-600 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-500/60 dark:hover:bg-[#343541]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-paperclip"
          >
            <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
          </svg>
        </div>

        <input
          className="hidden"
          id="select-file-input"
          accept=".png,.jpg,.jpeg,.m2a,.m3a,.mp2,.mp2a,.mp3,.mpga,.wav,.aac,.m4a,.mp4,.mp4v,.mpg4,.mov,.qt,.webm,.pdf,.csv,.css,.rtf,.js,.conf,.def,.diff,.in,.ksh,.list,.log,.pl,.text,.txt,.htm,.html,.xml,.xpdl,.xsl,.py,.pyc,.pyd,.pyo,.whl,.markdn,.markdown,.md,.mdown"
          type="file"
          name="images"
          multiple
        />
      </div> */}

      <div className="absolute right-2 bottom-2 rounded-sm p-1 text-neutral-800 opacity-60 dark:bg-opacity-50 dark:text-neutral-100 focus:outline focus:outline-1 dark:focus:outline-white hover:bg-neutral-200 hover:text-neutral-900 dark:hover:text-neutral-200"
        onClick={() => { console.log("senddddd") }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tabler-icon tabler-icon-send"
        >
          <path d="M10 14l11 -11"></path>
          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
        </svg>
      </div>
    </div>
  );
}

export default PromptBox;
