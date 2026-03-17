import type { Recipe } from "../types/Recipe";
import RecipeItem from "./RecipeItem";

type RecipeListProps = {
  recipes: Recipe[];
  deleteRecipe: (id: number) => void;
  editRecipe: (id: number, name: string, ingredients: string, instructions: string) => void;
};

function RecipeList({ recipes, deleteRecipe, editRecipe }: RecipeListProps) {
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
          editRecipe={editRecipe}
        />
      ))}
    </ul>
  );
}

export default RecipeList;