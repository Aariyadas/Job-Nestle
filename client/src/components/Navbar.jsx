import React, { useState } from "react";

const Navbar = () => {
  const user = {};
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseNav = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative bg-[#f7fdfd] z-50">
        <div className="container mx-auto flex items-center justify-between p-5">

        </div>
      </div>
    </>
  );
};

export default Navbar;
