import React from "react";

export default function Background({ children }) {
  return (
    <div>
      {/* <div className="w-3/4 mx-auto mt-36 h-60">{children}</div> */}
      <div className="px-4 mx-auto py-36 h-60 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {children}
      </div>
    </div>
  );
}
