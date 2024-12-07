import React, { useState } from "react";

const CompactColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className="w-8 h-8 rounded-full border border-gray-300 shadow-md cursor-pointer"
        style={{ backgroundColor: selectedColor }}
      ></div>

      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        className="w-8 h-8 border-none bg-transparent cursor-pointer opacity-0 absolute"
        style={{ appearance: "none" }}
        aria-label="Pick a color"
      />

      {/* Color Picker Label */}
      <label
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
        title="Choose a color"
      >
        🎨
      </label>
    </div>
  );
};

export default CompactColorPicker;
