import { useState } from "react";
import React from "react";
import sendIcon from "../assets/images/send-icon.svg";

function ChatResponse({ question, answer }) {
  
    
 
  const formattedAnswer = answer.split("* ").map((line, index) => {
    return (
      <li key={index}>
        {line
          .split(/\*\*(.*?)\*\*/g)
          .map((part, i) =>
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          )}
      </li>
    );
  });

 

  return (
    <div className="w-full h-fit border-b-2 border-[#f5f5f5] min-h-14 flex-col   items-center p-2 mb-5 ">
      <div className="flex">
        <img src={sendIcon} className="h-full w-10 p-2" />
        <div className="ms-5 h-full w-full break-words">{question}</div>
      </div>

      <div className="flex">
        <div className="h-full w-10 p-2"></div>

        <div className="ms-5 h-full w-full break-words">
          <ul>{formattedAnswer}</ul>
        </div>
      </div>
    </div>
  );
}

export default ChatResponse;
