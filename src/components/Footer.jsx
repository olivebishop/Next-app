import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">© 2023 iTisha. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-sm text-gray-400">
        Designed by Olive🦉
      </div>
    </footer>
  );
}

export default Footer;
