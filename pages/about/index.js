import { Card } from "@mui/material";
import React from "react";
import "tailwindcss/tailwind.css";
import Footer from "@/components/Footer";
import { Icon } from "@iconify/react";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-purple-800 p-16 w-2/3 border-4 border-purple-900 shadow-xl">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="bg-yellow-400 p-16 w-1/3 border-4 border-yellow-800 shadow-xl">
          <div>
            <img
              src="public/307BDD66-157F-406F-B8B2-1AE82351CDA7.JPG"
              className="rounded-full"
            ></img>
          </div>
        </div>
      </div>
      <div className="bg-orange-700 p-16 border-4 border-orange-900 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Tech Stack</h2>
        <div className="flex justify-center">
          <div className="mr-4">
            <Icon icon="vscode-icons:file-type-reactjs" />
          </div>
          <div className="mr-4">
            <Icon icon="vscode-icons:file-type-ruby" />
          </div>
          <div className="mr-4">
            <Icon icon="vscode-icons:file-type-rails" />
          </div>
          <div>
            <Icon icon="vscode-icons:file-type-js-official" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
