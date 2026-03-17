import type { Recipe } from "../types/Recipe";

type RecipeItemProps = {
  recipe: Recipe;
  deleteRecipe: (id: number) => void;
};

function RecipeItem({ recipe, deleteRecipe }: RecipeItemProps) {
  return (
    <li style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
      <h3>{recipe.name}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>

      <button onClick={() => deleteRecipe(recipe.id)}>
        Delete
      </button>
    </li>
  );
}

export default RecipeItem;