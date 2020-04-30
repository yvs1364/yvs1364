import React, { Component } from 'react';

class AddRecette extends Component {
  state = {
    nom:"",
    image: "",
    ingredients: "",
    instructions: ""
  }

  handleChange = event => {
    const {name, value}  = event.target
    this.setState({[name]: value})
  }
handleSubmit = event => {
  event.preventDefault()
  const recette = { ...this.state }
  this.props.addRecette(recette)
  Object.keys(recette).forEach( i => {
    recette[i] = ""
  });
this.setState({...recette})
}
  render() {
    return (
      <div className="card">
      <form className="admin-form add-recette" onSubmit={this.handleSubmit}>
          <input value={this.state.nom}  onChange={this.handleChange} name="nom" type="text" placeholder="nom de la recette"/>
          <input value={this.state.image} onChange={this.handleChange} name="image" type="text" placeholder="nom de l'image"/>
          <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="3" placeholder="liste des ingredients"/>
          <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="15" placeholder="liste des instructions"/>
          <button type="Submit"> + Ajouter une recette</button>
      </form>
      </div>
    );
  }

}

export default AddRecette;
