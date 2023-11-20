import React from "react";
import { Recipe } from "../types";

interface RecipeInstructionCardProps {
  Recipe: Recipe;
}

const RecipeInstructionCard: React.FC<RecipeInstructionCardProps> = ({
  Recipe,
}) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <h3 className="text-xl font-bold mb-2">Instructions:</h3>
      <div className="mt-4">
        {Recipe.steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center mb-4 border-b border-gray-300 pb-4"
          >
            <div className="flex-shrink-0 w-1/3 pr-4">
              {step.step_image && (
                <img
                  src={step.step_image.url}
                  alt={`Step ${index + 1}`}
                  className="w-full h-auto"
                />
              )}
            </div>
            <div className="w-2/3">
              <p className="text-xl font-bold mt-2">Step {index + 1}</p>
              <p className="text-gray-600">{step.step_text.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeInstructionCard;
