import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="mx-auto text-black p-2 rounded-lg border border-black">
          <span className="font-bold text-lg">ODDBOX</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
