// import React from "react";

// function Main() {
//   const [ingredients, setIngredients] = React.useState([]);

//   const ingredientsListItems = ingredients.map((ingredient) => (
//     <li key={ingredient}>{ingredient}</li>
//   ));
//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const newIngredient = formData.get("ingredient");
//     console.log(newIngredient);
//     setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
//   }

//   return (

//       <form className="form" onSubmit={handleSubmit}>
//         <input type="text" className="textbox" placeholder="e.g. Tommto" />
//         <button className="addbtn">+ Add ingredient</button>
//       </form>
//       <ul className="ingredient-list">{ingredientsListItems}</ul>
//     </main>
//   );
// }

import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="main">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          className="textbox"
        />
        <button className="addbtn">Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
export { Main };
