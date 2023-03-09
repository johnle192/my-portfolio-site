import { Component } from "react"

class About extends Component {
  render() {
    return <div className="about-container">
      <p className="text-3xl font-bold underline"> About Me </p>
      <div className="about-content">
        Hi there, I'm John and this is my website. I'm a self-taught developer currently based out of the DFW area. 
        I was born and raised in Wisconsin and went to college at Northwestern University. In my spare time, I like
        to rock climb, lift, dance, bake, and play with my dog, Danny.
      </div>
    </div>
  }
}

export default About;