import React from "react";
import IngredientsList from "./ingredient.jsx";
import ClaudeRecipe from "./cloudesection.jsx";
import { getRecipe } from "../ai.js";
import Generating from "./generating.jsx";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState();
  const [showingtheloading, setshowingtheloading] = React.useState(false);
  const recipeSection = React.useRef(null);

  React.useEffect(
    function () {
      if (recipeShown !== "" && recipeSection.current !== null) {
        recipeSection.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [recipeShown],
  );
  const toggleRecipeShown = React.useCallback(
    async function () {
      setshowingtheloading(true);
      try {
        const response = await getRecipe(ingredients);
        console.log("Recipe received:", response);
        setRecipeShown(response);
      } catch (error) {
        console.error("Failed to fetch recipe", error);
      } finally {
        // "finally" ensures loading turns off whether it succeeds or fails
        setshowingtheloading(false);
        console.log("Loading state set to false");
      }
    },
    [ingredients],
  );
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          recipeRef={recipeSection}
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {showingtheloading ? (
        <Generating />
      ) : (
        recipeShown && <ClaudeRecipe recipe={recipeShown} />
      )}
    </main>
  );
}
