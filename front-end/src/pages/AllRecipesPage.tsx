import React, { useState, useEffect } from "react";
import axios from "axios";
import { Recipe, RecipeResponse } from "../types";
import RecipeCard from "../components/RecipeCard";
import { Link, useNavigate } from "react-router-dom";

const RecipeList: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const fetchIndividualRecipes = (recipeId: string) => {
    navigate(`/recipe/${recipeId}`);
  };
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const fetchMoreRecipes = async () => {
    try {
      console.log(nextPageUrl);
      const response = await axios.get<RecipeResponse>(nextPageUrl || "");
      const newRecipes = response.data.data;
      setAllRecipes((prevRecipes) => [...prevRecipes, ...newRecipes]);
      setNextPageUrl(response.data.cursor.next);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSaveRecipe = (recipe: Recipe) => {
    const updatedSavedRecipes = [...savedRecipes];

    const isRecipeSaved = updatedSavedRecipes.some(
      (savedRecipe) => savedRecipe.id === recipe.id
    );

    if (!isRecipeSaved) {
      updatedSavedRecipes.push(recipe);
      setSavedRecipes(updatedSavedRecipes);
      localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes));
    }
  };

  useEffect(() => {
    const fetchInitialRecipes = async () => {
      try {
        const response = await axios.get<RecipeResponse>(
          "http://localhost:3002/recipes/?_page=1"
        );
        const newRecipes = response.data.data;
        setAllRecipes(newRecipes);
        setNextPageUrl(response.data.cursor.next);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchInitialRecipes();
  }, []);

  return (
    <div className="w-5/6 mx-auto p-14 mt-4 bg-white">
      <h2 className="text-lg font-bold mb-1">All Recipes</h2>
      <div className="flex justify-end mt-4 ml-auto">
        <Link
          to="/saved-recipes"
          className="text-black px-4 py-2 rounded-md hover:bg-white hover:text-black border border-gray"
        >
          See All Saved
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
        {allRecipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image.url ? recipe.image.url : ""}
            altText={recipe.image.alt ? recipe.image.alt : ""}
            duration={recipe.cooking_time}
            title={recipe.title.text}
            onClick={() => fetchIndividualRecipes(recipe.id)}
            onSave={() => handleSaveRecipe(recipe)}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="mt-4 bg-white text-black px-4 py-2 rounded-md hover:bg-black hover:text-white border border-gray-200 "
          onClick={fetchMoreRecipes}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
