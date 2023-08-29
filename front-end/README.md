# Oddbox - Front-End Technical Test

The Oddbox Front-End technical test is designed to test your fundamental understanding of building a React application and fetching data from an API endpoint.

Please do not spend longer than 4 hours on the task - we are looking to understand your approach rather than your ability to build something production-ready in a morning!

## Task

Your task is to build a simple front-end to display recipes for customers.

This front-end would consist of several pages. Each page has been detailed below, with an overview of how the user will interact with it and what it could look like. 

We already have recipes served via a local API to provide you some recipe data. The API has already been created to serve recipe data. You **do not** need to modify the API code in any way. 

We have provided wireframes in the `wireframes/` folder to give an idea of what we would like these pages to look like. We are not looking for pixel-perfect design and we do not mind about exact colours and fonts. We have just provided these wireframes to give an idea of the page layout and functionality. 

### Page 1 - All Recipes List

Wireframe: `wireframes/all-recipes-page.png`

We want to show a list of all the Recipes, and this page should have the option to load more recipes (paginate) if the user requests it. 

To fetch all recipes from the API, you can use the **http://localhost:3002/recipes/?_page=1** endpoint. The API only returns a list of 10 records at a time to paginate, which you can do using the `?_page=` attribute. There is a `cursor` attribute in the JSON response to show the API endpoint for the next page. 

### Page 2 - Individual Recipe

Wireframe: `wireframes/individual-recipe-page.png`

Clicking on a recipe on the "All Recipes" page should show this page with detail about the specific recipe. 

If you need to fetch a specific recipe from the API, you can use the **http://localhost:3002/recipes/{id}** endpoint, where `{id}` is the ID of the recipe you wish to fetch, e.g. `recipes/chocolate-orange-pavlovas`

### Page 3 - Saved Recipes List

Wireframe: `wireframes/saved-recipes-page.png`

This will behave very similarly to the "All Recipes List" page, except it should only show the recipes that a customer has "saved". 

A customer can save recipes by clicking the "Save" button on an individual recipe page. The recipes that a customer saves should be stored as state locally in their browser. 

## Getting Started

1. [Install Node](https://nodejs.org/en)
2. Run `npm install` in this folder
2. Run `npm run start` in this folder. 

There should now be two applications running:
* React front-end: http://localhost:3001/ 
* Recipe API: http://localhost:3002/

We suggest you have a look at the example data that the API responds with to familiarise yourself first.

* http://localhost:3002/recipes/?_page=1 (GET all recipes, with pagination)
* http://localhost:3002/recipes/chocolate-orange-pavlovas (GET a specific recipe, by ID)

### Folder Structure

The React framework has been created using [create-react-app](https://create-react-app.dev/) with the [TypeScript template](https://create-react-app.dev/docs/adding-typescript/). 

* `src/` contains the React components 
* `public/` contains any static files
* `wireframes/` contains the wireframe examples for each page, you do not need to modify this.
* `server/` contains the API code, you do not need to modify this.

## Assumptions

... (Please add any assumptions you make while working on this exercise.)

## Notes

... (Please add any additional information that would be useful for us to know when we review this exercise.)
