import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"

export default function TweetInput(props) {
  
  // const [inputClassName, setInputClassName] = React.useState("tweet-textarea")
  const handleInputFocus = (event) => {
    if (event._reactName=="onFocus"){
      event.target.classList.add("expanded")
    } else if (event._reactName=="onBlur") {
      event.target.classList.remove("expanded")
    }
    return null; 
  }

  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea 
        name="new-tweet-input" 
        type="text" 
        placeholder="What's Happening?" 
        value={props.value} 
        onChange={props.handleOnChange}
        // className = "expanded"
        onFocus={handleInputFocus}
        onBlur={handleInputFocus} 
      >
      </textarea>

      <SmileIcon />
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
