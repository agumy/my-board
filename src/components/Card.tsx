import * as React from "react"

export const Card: React.VFC = () => {
  return (
    <div className="w-2/5 h-3/4 shadow-xl rounded-lg bg-green-200 flex flex-col">
      <header className="w-full h-1/5 flex justify-center items-center">
        <span className="text-gray-700 text-2xl">Title</span>
      </header>
      <div className="h-full"></div>
      <footer className="w-full h-1/5"></footer>
    </div>
  )
}
