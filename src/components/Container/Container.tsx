import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto w-full">
      {children}
    </div>
  );
};

export default Container;
