import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-10"
          onClick={() => setIsOpen(prevOpen => !prevOpen)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setIsOpen(prevOpen => !prevOpen)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 z-5 `}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </>
  );
};

export default Sidebar;