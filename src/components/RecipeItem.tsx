import { useState } from "react";
import type { Recipe } from "../types/Recipe";

type RecipeItemProps = {
  recipe: Recipe;
  deleteRecipe: (id: number) => void;
  editRecipe: (
    id: number,
    name: string,
    ingredients: string,
    instructions: string
  ) => void;
};

function RecipeItem({ recipe, deleteRecipe, editRecipe }: RecipeItemProps) {
  // 🔹 track whether we're editing
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 local state for form inputs
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  // 🔹 handle save
  const handleSave = () => {
    editRecipe(recipe.id, name, ingredients, instructions);
    setIsEditing(false);
  };

  return (
    <li style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
      {isEditing ? (
        // ✏️ EDIT MODE
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
          />

          <br />

          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients"
          />

          <br />

          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
          />

          <br />

          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        // 👀 VIEW MODE
        <div>
          <h3>{recipe.name}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>

          <button onClick={() => deleteRecipe(recipe.id)}>
            Delete
          </button>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </li>
  );
}

export default RecipeItem;