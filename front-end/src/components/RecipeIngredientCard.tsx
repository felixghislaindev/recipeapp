import React from "react";
import { Recipe } from "../types";

interface RecipeIngredientCardProps {
  recipeData: Recipe;
}

const RecipeIngredientCard: React.FC<RecipeIngredientCardProps> = ({
  recipeData,
}) => {
  console.log(recipeData.body);
  return (
    <div className="bg-white p-4 rounded-md">
      <div>
        <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
        <ul className="list-disc pl-4">
          {recipeData.body[0].items.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {`${ingredient.count} ${ingredient.unit} ${
                ingredient.ingredient.document.data.name.text
              } ${
                ingredient.short_description1.text
                  ? `(${ingredient.short_description1.text.trim()})`
                  : ""
              }`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeIngredientCard;
