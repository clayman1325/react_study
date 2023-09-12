import { useState } from 'react'

import './App.css'

function TwitterFollowCard({name, alias, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = !isFollowing ?  "Follow" : "Following"
    const buttonClassName = isFollowing
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src="https://unavatar.io/midudev" alt="image of the developer"/>
        <div className="tw-followCard-info">
          <strong> { name } </strong>
          <span className="tw-followCard-infoUserName"> @{alias}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
            <span className="tw-followCard-text"> {text} </span>
            <span className="tw-followCard-stopFollow"> Stop Follow</span>
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard
