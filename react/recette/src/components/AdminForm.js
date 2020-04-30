import React from 'react';

const AdminForm = ({
  id: key,
  updateRecette,
  deleteRecette,
  recettes
  }) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
      const { name, value } = event.target
      const recette = recettes[key]
      recette[name] = value
      updateRecette(key, recette)
    }
    return(
  <div className="card">
    <form className="admin-form">
      <input value={recette.nom} onChange={e => handleChange(e, key)} type="text" name="nom" placeholder="nom de la recette" />
      <input value={recette.image} onChange={e => handleChange(e, key)} type="text" name="image" placeholder="addresse de l'image" />
      <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" rows="3" placeholder="liste des ingredients" />
      <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" rows="15" placeholder="les des instructions" />
    </form>
    <button onClick={() => deleteRecette(key)}> - Supprimer cette recette </button>
  </div>
)

}

export default AdminForm;
