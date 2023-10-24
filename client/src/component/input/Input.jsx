import React,{Component} from "react";
import "./input.scss"

const Input = () => {
  return (<>
    <div className="chatInput">
        <input onKeyDown={this.props.send} placeholder="Type a Message....Enter to Send!!" />
    </div>
  </>
  )
}

export default Input