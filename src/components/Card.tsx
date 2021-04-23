import React from "react"
import TinderCard from "react-tinder-card"
import matchingMock from "../../mock/matching.json"

// type TinderCardAPI = {
//   swipe: (directive: "left" | "right" | "top" | "down") => Promise<void>
// }

type Matching = {
  users: {
    name: string
    twitter: string
    description: string
    artifacts: {
      service: string
      url: string
      title: string
      description: string
    }[]
  }[]
}

type Props = {
  matching: Matching
}

export const Card: React.VFC<Props> = ({
  matching = matchingMock as Matching,
}) => {
  return (
    <>
      {matching.users.reverse().map((user) => (
        <TinderCard
          key={user.name}
          // @ts-expect-error It takes a className but has no type definition.
          className="absolute bg-green-200 bg-white flex flex-col h-3/4 p-5 rounded-lg shadow-xl w-2/5"
        >
          <header className="flex h-1/5 items-center justify-center w-full">
            <span className="text-2xl text-black">{user.name}</span>
          </header>
          <div className="h-full"></div>
          <footer className="flex h-1/5 items-center justify-between text-black w-full">
            <button className=" bg-accent h-8 rounded-md text-white w-16">
              Unlike
            </button>
            <button className="bg-accent h-8 rounded-md text-white w-16">
              Like
            </button>
          </footer>
        </TinderCard>
      ))}
    </>
  )
}
