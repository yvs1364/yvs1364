import React, { PureComponent } from 'react';
import base from "../base";
import recettes from "../recettes"

const withFirebase = WrappedComponenet => (
  class HOC extends PureComponent {
    state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {}
    }
  chargerExemple = () => this.setState({ recettes })

    componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
        context: this,
        state: "recettes"
      });
    }
  componentWillUmount (){
    base.removeBinding(this.ref)
  }

  addRecette= recette => {
    const recettes = {...this.state.recettes}
    recettes[`recette-${Date.now()}`] = recette
    this.setState({recettes})
  }

  updateRecette= (key, newRecette) => {
    const recettes = {...this.state.recettes}
    recettes[key] = newRecette
    this.setState({recettes})
  }
  deleteRecette = key => {
      const recettes = {...this.state.recettes}
      recettes[key] = null
      this.setState({recettes})
  }
    render() {
      return (
        <WrappedComponenet
        recettes={this.state.recettes}
        chargerExemple={this.chargerExemple}
        addRecette={this.addRecette}
        updateRecette={this.updateRecette}
        deleteRecette={this.deleteRecette}
        {...this.props} />
      );
    }
  }
)

export default withFirebase;
