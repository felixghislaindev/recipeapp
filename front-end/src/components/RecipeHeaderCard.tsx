import React from "react";
import { Recipe } from "../types";

const RecipeHeaderCard: React.FC<{ Recipe: Recipe }> = ({ Recipe }) => {
  const {
    title,
    image,
    authors,
    date,
    cooking_time,
    preparation_time,
    servings,
    short_description,
  } = Recipe;
  console.log(short_description.text);
  return (
    <div className="w-full bg-white p-6 rounded-md mt-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 pr-4 relative h-72 mb-4 lg:mb-0">
        {image && (
          <img
            src={image.url}
            alt={image.alt ? image.alt : ""}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <div className="w-full lg:w-2/3">
        {/* Additional information such as author, date, etc. */}
        <div className="mt-4 flex flex-col lg:flex-row justify-between lg:space-x-4">
          <div className="flex space-x-2 mb-2 lg:mb-0">
            {authors && (
              <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                <span>{authors[0].author.document.data.full_name.text}</span>
              </div>
            )}
            <div className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
              {date}
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4">{title.text}</h2>

        {short_description && (
          <p className="text-gray-600 mt-2">{short_description.text}</p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 border border-gray-200 py-4 px-4">
          <div className="mb-4 g:mr-4 border-r border-gray-200 pr-4">
            <p className="text-gray-700">Prep Time:</p>
            <p className="font-semi-bold">{preparation_time} minutes</p>
          </div>
          <div className="mb-4 g:mr-4 border-r border-gray-200 pr-4">
            <p className="text-gray-700">Cooking Time:</p>
            <p className="font-semi-bold">{cooking_time} minutes</p>
          </div>

          <div className="mb-4 g:mr-4 border-r border-gray-200 pr-4">
            <p className="text-gray-700">Total Time:</p>
            <p className="font-semi-bold">
              {preparation_time + cooking_time} minutes
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700">Servings:</p>
            <p className="font-semi-bold">{servings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeaderCard;
