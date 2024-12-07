interface BrowserContentProps {
    url: string;
  }
  
  import React, { useState } from "react";

const BrowserContent: React.FC<BrowserContentProps> = ({ url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="mt-4 w-full max-w-4xl h-[500px] bg-gray-200 rounded-md overflow-hidden relative">
      {isLoading && !error && url.length > 0 && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="ml-2 text-gray-600">Loading...</p>
        </div>
      )}

      {/* Iframe */}
      {url && !error ? (
        <iframe
          src={url}
          title="Browser Content"
          className="w-full h-full border-none"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          onLoad={() => setIsLoading(false)} // Stop loading when loaded
          onError={() => {
            setIsLoading(false);
            setError(true); // Show error if loading fails
          }}
        />
      ) : error ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          Unable to load the page.
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-gray-500">
          No URL loaded
        </div>
      )}
    </div>
  );
};

export default BrowserContent;
