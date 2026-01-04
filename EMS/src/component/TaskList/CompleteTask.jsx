import React from 'react'

const CompleteTask = () => {
  return (
     <div className="h-auto flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl">
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
        <div className='mt-2'>
            <button className='w-full'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
