import React, { Component, createRef } from 'react'
import './App.css';
import "./animations.css"

import Formulaire from "./components/Formulaire";
import Message from "./components/Message";
import base from "./base";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  state = {
    messages: {},
    title: this.props.match.params.title,
    pseudo: this.props.match.params.pseudo
  }
messagesRef = createRef()

componentDidMount () {
  base.syncState("/", {
    context: this,
    state: "messages"
  })
}

componentDidUpdate () {
  const ref = this.messagesRef.current;
  ref.scrollTop = ref.scrollHeight;
}

  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`] = message
    Object
    .keys(messages)
    .slice(0, -10)
    .forEach(key => {
      messages[key] = null
    })

    this.setState({messages});
  }
  isUser = pseudo => pseudo === this.state.pseudo
  isTitle = title => title === this.state.title

  render () {

    const messages = Object
    .keys(this.state.messages)
    .map(key => (
        <CSSTransition
          timeout={300}
          classNames="fade"
          key={key}>
          <Message
              isUser = {this.isUser}
              message={this.state.messages[key].message}
              pseudo={this.state.messages[key].pseudo} />
          </CSSTransition>
    ))
    return (
      <div className="box">
      <h1 className="title">{this.state.title}</h1>
        <div className="boxdesign">
          <div className="messages" ref={this.messagesRef} >
              <TransitionGroup className="message"> { messages } </TransitionGroup>
          </div>
            <Formulaire
                length={144}
                pseudo={this.state.pseudo}
                addMessage={this.addMessage}/>
            </div>
      </div>
    )
  }
}

export default App
