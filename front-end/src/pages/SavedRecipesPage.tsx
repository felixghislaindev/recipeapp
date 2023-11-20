import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types";
import { Link, useNavigate } from "react-router-dom";

function SavedRecipesPage() {
  const savedRecipesFromStorage = JSON.parse(
    localStorage.getItem("savedRecipes") || "[]"
  );

  const [savedRecipes] = useState<Recipe[]>(savedRecipesFromStorage);
  const navigate = useNavigate();

  const fetchIndividualRecipes = (recipeId: string) => {
    navigate(`/recipe/${recipeId}`);
  };

  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  return (
    <div className="w-5/6 mx-auto p-14 mt-4">
      <div className="mt-4">
        <Link
          to="/"
          className="bg-white text-black px-4 py-2 rounded-md font-semi-bold border border-gray-300"
        >
          Back to Recipes
        </Link>
      </div>
      <div className="p-14 mt-4 bg-white">
        <h3 className="text-xl font-bold mb-2">My Saved Recipes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
          {savedRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.image.url ? recipe.image.url : ""}
              altText={recipe.image.alt ? recipe.image.alt : ""}
              duration={recipe.cooking_time}
              title={recipe.title.text}
              onClick={() => fetchIndividualRecipes(recipe.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SavedRecipesPage;
