"use client"
import React, {useState} from "react";
import ColorPicker from "./ColorPicker";

interface URLBarProps {
    url: string;
    onUrlChange: (url: string) => void;
  }
  
  const URLBar: React.FC<URLBarProps> = ({ url, onUrlChange }) => {
    const [input, setInput] = useState<string>(url);
  
    const handleGo = () => {
      if(input.includes("http://") || input.includes("https://"))
      {
        onUrlChange(input)
      }
      else{
        onUrlChange("https://" + input);
      }
    };
  
    return (
      <div className="flex space-x-2 mt-4 w-full max-w-4xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 text-black"
          placeholder="Enter a URL"
        />
        <button
          onClick={handleGo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go
        </button>

        <ColorPicker/>
      </div>
    );
  };

  export default URLBar;