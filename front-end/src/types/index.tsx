interface Image {
  alt: string | null;
  url: string;
}

interface Step {
  step_image: Image;
  step_text: {
    text: string;
  };
}

interface ShortDescription {
  text: string;
}

interface Ingredient {
  count: number;
  ingredient: {
    document: {
      data: {
        name: {
          text: string;
        };
        name_plural: {
          text: string;
        };
      };
    };
  };
  short_description1: ShortDescription;
  unit: string;
}

interface Author {
  author: {
    document: {
      data: {
        full_name: {
          text: string;
        };
      };
    };
  };
}

export interface Recipe {
  id: string;
  category: string;
  cooking_time: number;
  date: string;
  difficulty: string;
  preparation_time: number;
  servings: number;
  image: Image;
  short_description: ShortDescription;
  steps: Step[];
  storage: {
    text: string;
  };
  title: {
    text: string;
  };
  authors: Author[];
  body: {
    id: string;
    items: Ingredient[];
  }[];
  description: {
    text: string;
  };
  leftovers: {
    text: string;
  };
}

interface Cursor {
  next: string;
  limit: number;
  totalRecords: number;
}

export interface RecipeResponse {
  cursor: Cursor;
  data: Recipe[];
}
