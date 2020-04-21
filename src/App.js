import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import image from "./405704.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post
            nickname="Chris"
            avatar={image}
            caption="Moving the community!"
            image={image}
          />
          <Post
            nickname="OG"
            avatar={image}
            caption="Holding a mic"
            image={image}
          />
        </div>
      </div>
    );
  }
}

export default App;
