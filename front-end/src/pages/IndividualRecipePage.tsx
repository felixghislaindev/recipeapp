import React, { useEffect, useState } from "react";
import RecipeHeaderCard from "../components/RecipeHeaderCard";
import { Link, useParams } from "react-router-dom";
import RecipeInstructionCard from "../components/RecipeInstructionCard";
import RecipeStorageCard from "../components/RecipeStorageCard";
import RecipeIngredientCard from "../components/RecipeIngredientCard";
import axios from "axios";
import { Recipe } from "../types";

function IndividualRecipePage() {
  const { id: recipeId } = useParams();

  const [recipeData, setRecipeData] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/recipes/${recipeId}`
        );
        setRecipeData(response.data.data);
      } catch (error) {
        console.error("Error fetching recipe data:", error);
      }
    };

    fetchRecipeData();
  }, [recipeId]);
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
      <div className="mt-4">
        {recipeData && <RecipeHeaderCard Recipe={recipeData} />}
      </div>
      <div className="mt-4 md:flex md:gap-2">
        <div className="w-full md:w-2/3">
          {recipeData && <RecipeInstructionCard Recipe={recipeData} />}
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          {recipeData && <RecipeIngredientCard recipeData={recipeData} />}

          {recipeData && <RecipeStorageCard recipeData={recipeData} />}
        </div>
      </div>
    </div>
  );
}

export default IndividualRecipePage;
