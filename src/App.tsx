import React from "react"
import { Card } from "./components/Card"

export const App: React.VFC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-5">
      <Card />
    </div>
  )
}
