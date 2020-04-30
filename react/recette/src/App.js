import React from 'react'
import PropTypes from "prop-types";
// CSS
import './App.css'


import Header from "./components/Header"
import Admin from "./components/Admin";
import Card from "./components/Card";
import withFirebase from "./hoc/withFirebase"

import ColorContext from "./components/Color"

//                                                   fonction avec dossier hoc beaucoup plus dry
const App = ({
  recettes,
  match,
  addRecette,
  deleteRecette,
  updateRecette,
  chargerExemple
})=> {
  const cards = Object.keys(recettes)
  .map(key => <Card key={key} details={recettes[key]} />)

  return (
    <ColorContext>
    <div className='box'>
        <Header pseudo={match.params.pseudo} />
          <div className='cards'>
            { cards }
          </div>
        <Admin
        pseudo={match.params.pseudo}
        recettes={recettes}
        addRecette={addRecette}
        deleteRecette= {deleteRecette}
        updateRecette={updateRecette}
        chargerExemple={chargerExemple} />
  </div>
  </ColorContext>
  )
}
//                                        fonction sans dossier hoc
// class App extends Component {
//   state = {
//     pseudo: this.props.match.params.pseudo
//   }
//   render () {
//     const cards = Object.keys(this.props.recettes)
//     .map(key => <Card key={key} details={this.props.recettes[key]} />)
//
//     return (
//       <div className='box'>
//           <Header pseudo={this.state.pseudo} />
//             <div className='cards'>
//               { cards }
//             </div>
//           <Admin
//           pseudo={this.state.pseudo}
//           recettes={this.props.recettes}
//           addRecette={this.props.addRecette}
//           deleteRecette= {this.props.deleteRecette}
//           updateRecette={this.props.updateRecette}
//           chargerExemple={this.props.chargerExemple} />
//     </div>
//     )
//   }
// }

//                              permission
  App.propTypes = {
    recettes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    addRecette: PropTypes.func.isRequired,
    deleteRecette: PropTypes.func.isRequired,
    updateRecette: PropTypes.func.isRequired,
    chargerExemple: PropTypes.func.isRequired
  }
  //

const WrappedComponenet = withFirebase(App)

export default WrappedComponenet
