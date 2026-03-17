import type { Recipe } from "../types/Recipe";
import RecipeItem from "./RecipeItem";

type RecipeListProps = {
  recipes: Recipe[];
  deleteRecipe: (id: number) => void;
};

function RecipeList({ recipes, deleteRecipe }: RecipeListProps) {
  if (recipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          deleteRecipe={deleteRecipe}
        />
      ))}
    </ul>
  );
}

export default RecipeList;