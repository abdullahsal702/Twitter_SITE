import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import { formatLikes } from "../../utils/format"
import "./Tweet.css"

export default function Tweet({ tweet }) {

  const [amountLikes, setAmountLikes] = React.useState(tweet.likes) 
  const [liked, setLiked] = React.useState(false)

  return (
    <div className="tweet" data-tweet-id={tweet.id}>
      <div className="tweet-avatar">
        <AvatarIcon />
      </div>

      <div className="tweet-content">
        <TweetUserInfo name={tweet.name} handle={tweet.handle}/>
        <p className="tweet-text">{tweet.text}</p>
        <TweetFooter numComments={tweet.comments} numRetweets={tweet.retweets} numLikes={amountLikes} setAmountLikes={setAmountLikes}/>
      </div>
    </div>
  )
}

export function TweetUserInfo({ name, handle }) {
  return (
    <div className="tweet-user-info">
      <div className="meta">
        <p className="name">{name}</p>
        <span className="handle">@{handle}</span>
        <span className="dot">•</span>
        <span className="ts">1 min</span>
      </div>
      <i className="fa fa-angle-down"></i>
    </div>
  )
}

export function TweetFooter({ numComments, numRetweets, numLikes, setAmountLikes }) {

  const handleOnLike = (event) => {
    setAmountLikes(numLikes + 1)
    event.target.classList.add("red")
    console.log(event.target.parentElement.classList)
    console.log(event.target.classList) 
  }

  return (
    <div className="tweet-footer">
      <span>
        <i className="fa fa-comment"></i>
        {numComments || 0}
      </span>
      <span>
        <i className="fa fa-retweet"></i>
        {numRetweets || 0}
      </span>
      <span>
        <i className="fas fa-heart" onClick={handleOnLike}></i>
        {formatLikes(numLikes ?? 0)}
      </span>
      <span>
        <i className="fa fa-envelope"></i>
      </span>
    </div>
  )
}
