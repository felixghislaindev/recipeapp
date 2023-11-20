import React from "react";
import { Recipe } from "../types";

interface RecipeStorageCardProps {
  recipeData: Recipe;
}

const RecipeStorageCard: React.FC<RecipeStorageCardProps> = ({
  recipeData,
}) => {
  const storageParagraph = recipeData.storage.text;

  return (
    <div className="bg-white p-4 rounded-md mt-4">
      <h3 className="text-xl font-bold mb-2">How to store:</h3>
      <p className="text-gray-700">{storageParagraph}</p>
    </div>
  );
};

export default RecipeStorageCard;
