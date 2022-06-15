import * as React from "react"
import TweetInput from "./TweetInput"
import { useState } from "react"
import "./TweetBox.css"

export default function TweetBox(props) {

  const handleOnTweetTextChange = (event) => {
    props.setTweetText(event.target.value) 
  }

  const handleOnSubmit = () => {
    let newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText, 
      comments: 0, 
      retweets: 0, 
      likes: 0, 
      id: props.tweets.length
    }

    props.setTweets(oldTweets => [...oldTweets, newTweet])
    props.setTweetText("")
    // increment numTweets by 1 
    // let updatedTweetsNum = props.userProfile.numTweets + 1 
    // props.setUserProfile({numTweets: updatedTweetsNum}) 
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} tweetText={props.tweetText}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let characterCount =  140 - props.tweetText.length 
  return <span className={characterCount >= 0 ? "tweet-length" : "tweet-length red"} >{props.tweetText ? characterCount : null}</span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      {/* disables button if tweetText.length <= 0 or > 140 */}
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.tweetText?.length <= 0 || props.tweetText?.length > 140}>Tweet</button>
    </div>
  )
}
