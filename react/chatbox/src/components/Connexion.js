import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Connexion extends Component {
state = {
    pseudo: "",
    title: "",
    goToChat: false
}
createChan = event =>{
  const title = event.target.value
  this.setState({ title });
}
handleChangePseudo = event =>{
  const pseudo = event.target.value
  this.setState({ pseudo });
}

handleSubmit = event =>{
  event.preventDefault()
  this.setState({ goToChat: true})
}

  render() {
    if (this.state.goToChat){
      return <Redirect push to={`/chan/${this.state.title}/pseudo/${this.state.pseudo}`}></Redirect>
    }

    return (
      <div className="connexionBox">
        <div className="cadre">
            <form className="connexion" onSubmit={this.handleSubmit}>
              <input value={this.state.title}   onChange={this.createChan} placeholder="which chan?" type="text" required />
              <input value={this.state.pseudo} onChange={this.handleChangePseudo} placeholder="pseudo" type="text" required />
              <button type="submit"> SUBMIT</button>
            </form>
          </div>
      </div>
    );
  }

}

export default Connexion;
