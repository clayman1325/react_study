import { useState } from "react"
import TwitterFollowCard from "./TwitterFollowCard"

const App = () => {
  const isFollowing = true

  const users = [
    {
      initialIsFollowing: isFollowing,
      name: "Miguel Duran",
      alias:"midudev"
    },
    {
      initialIsFollowing: isFollowing,
      name: "David Mejia",
      alias:"clayman1325"
    },
    {
      initialIsFollowing: isFollowing,
      name: "Sara Hall",
      alias:"hall22"
    }
  ]

  return (
    <section className="App">
      { users.map(({ isFollowing, name, alias }) => (
        <TwitterFollowCard
          key={name}
          initialIsFollowing={isFollowing}
          name={name}
          alias={alias}
        />
      ))
      }
    </section>
  )
}

export default App