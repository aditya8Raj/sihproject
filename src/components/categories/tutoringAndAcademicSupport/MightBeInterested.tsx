import React from "react";

const MightBeInterested: React.FC = () => {
  return (
    <div className="relative z-20 w-full text-center mt-8 mb-28">
      <h2 className="text-xl font-semibold mb-4">
        You might be interested in Programming & Tech
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// --------------------

const tags = [
  "Fivem Script",
  "Convert Website to App",
  "Custom App",
  "Discord Server",
  "Python Developer",
  "PHP Programmer",
  "Unity Developer",
  "Discord Chatbot",
  "Twitch Trivia Bot",
  "Shopify Expert",
  "Wix Website Builder",
  "Squarespace Programmer",
  "Roblox Scripter",
  "Bloxburg Builder",
  "Minecraft Builders",
  "Wordpress Customization",
  "Book Formatting",
  "Custom Landing Page",
  "Web Scraping",
  "NFT Promotion",
];

export default MightBeInterested;
