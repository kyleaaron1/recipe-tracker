import { useState, useEffect } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import type { Recipe } from "./types/Recipe";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [recipe, ...prev]);
  };

  const deleteRecipe = (id: number) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };
  
  const editRecipe = (
    id: number,
    name: string,
    ingredients: string,
    instructions: string
  ) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id
          ? { ...recipe, name, ingredients, instructions }
          : recipe
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Tracker</h1>
      <p>Add recipes and view them later.</p>

      <RecipeForm addRecipe={addRecipe} />

      <h2>Recipes</h2>

      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe} 
        editRecipe={editRecipe}
      />
    </div>
  );
}

export default App;