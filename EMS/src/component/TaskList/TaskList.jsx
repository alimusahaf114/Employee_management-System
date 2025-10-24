import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto  w-full py-5 flex items-center justify-start gap-5 mt-10  "
    >
      <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4>July 04 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Make Notebook lessons complete{" "}
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          doloribus iste at, ad nulla molestiae!
        </p>
      </div>
      <div className="h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4>July 04 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Make Notebook lessons complete{" "}
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          doloribus iste at, ad nulla molestiae!
        </p>
      </div>
      <div className="h-full flex-shrink-0 p-5 w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4>July 04 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Make Notebook lessons complete{" "}
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          doloribus iste at, ad nulla molestiae!
        </p>
      </div>
      <div className="h-full flex-shrink-0 p-5 w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4>July 04 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">
          Make Notebook lessons complete{" "}
        </h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
          doloribus iste at, ad nulla molestiae!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
