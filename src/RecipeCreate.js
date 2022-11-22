import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  }
  const [formData,setFormData] = useState(initialFormState)
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared. 
  const handleInputChange = (event) => {
    let value = event.target.value
    setFormData({
      ...formData,
      [event.target.name]: value
    })

  }

  const handleFormSubmit = event => {
    event.preventDefault();
    addRecipe(formData)
    setFormData(initialFormState)
  }
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input 
                  id='name'
                  name='name'
                  placeholder='Name'
                  onChange={handleInputChange}
                  value={formData.name}
                ></input>
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input 
                  id='cuisine'
                  name='cuisine'
                  placeholder='Cuisine'
                  onChange={handleInputChange}
                  value={formData.cuisine}
                ></input>
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input 
                  id='photo'
                  name='photo'
                  placeholder='URL'
                  onChange={handleInputChange}
                  value={formData.photo}
                ></input>
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea 
                  id='ingredients'
                  name='ingredients'
                  placeholder='Ingredients'
                  onChange={handleInputChange}
                  value={formData.ingredients}
                ></textarea>
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea 
                  id='preparation'
                  name='preparation'
                  placeholder='Preparation'
                  onChange={handleInputChange}
                  value={formData.preparation}
                ></textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
