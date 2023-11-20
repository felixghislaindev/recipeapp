import React from "react";

const RecipeCard: React.FC<{
  image: string;
  title: string;
  altText: string | null;
  duration: number;
  onClick?: () => void;
  onSave?: () => void;
}> = ({ image, title, duration, altText, onClick, onSave }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg flex flex-col cursor-pointer relative overflow-hidden group"
      onClick={onClick}
    >
      {onSave && (
        <button
          className="absolute mt-2 ml-2 bg-white text-black px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onSave();
          }}
        >
          Save
        </button>
      )}
      <img
        src={image}
        alt={altText ? altText : ""}
        className="h-56 object-cover mb-4 rounded-lg w-full"
      />
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-gray-400 bg-gray-100 px-2 py-1 rounded-md mt-auto w-2/5">
        {duration} minutes
      </p>
    </div>
  );
};

export default RecipeCard;
