import React, { Component, Fragment } from 'react';
import './App.css';
import Member from "./components/Member"
import Button from "./components/Button"

const family = {
  member1: {
    name: "Yvs",
    age: 24
  },
  member2: {
    name: "Rosie",
    age: 23
  },
  member3: {
    name: "Buu",
    age: 5
  },
  member4: {
    name: "Luffy",
    age: 4
  }
}

class App extends Component {
  state = {
    family,
    isShow: false
  }

handleClick = num => {
  const family = { ...this.state.family }
  family.member1.age += num
this.setState({family})
}
handleChange =( event, id) => {
  const family = { ...this.state.family }
  const name = event.target.value
  family[id].name = name
  this.setState({ family })
}
handleShowDescription = () =>{
const isShow = !this.state.isShow
this.setState({ isShow })
}
hideName = id => {
  const family = { ...this.state.family }
  family[id].name = " "
  this.setState({ family })
}
  render() {
    const { family, isShow} = this.state
    const { title } = this.props
    const  number  = 4

    let description = null
      if (isShow){
        description = <strong> Hello !</strong>
      }
      const list = Object.keys(family)
      .map(member => (
        <Member
        key = {member}
        handleChange= {event  => this.handleChange(event, member)}
        hideName={() => this.hideName(member)}
        age={family[member].age}
        name={family[member].name} />
      ))

    return (
      <Fragment>
        <div className="App">
          <h1>{title}</h1>
          { list }
      {  // <Member age={family.member4.age}
        //                   name={family.member4.name}>
        //   { description }
        //     <button onClick={this.handleShowDescription}>
        //     {
        //      isShow ? "HIDDEN" : " SHOW"
        //     }
        //      </button>
        //  </Member>
        //    <Button number={number} old={() => this.handleClick(number)} />
        }
        </div>
      </Fragment>
    )
  }
}

export default App;
