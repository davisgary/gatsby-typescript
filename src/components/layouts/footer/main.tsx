import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black text-center p-4">
      © {new Date().getFullYear()} Name
    </footer>
  );
};

export default Footer;