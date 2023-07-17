# AiroMedical testTask

## How to start

### visit the [demo page](https://yuriy-khoptyanii.github.io/AiroMedical__testTask).

### To run locally:

1. Clone the project to your local machine
2. yarn install
3. yarn dev
4. Open the app in your web browser by navigating to http://localhost:3000

## What is this task about

* Created an app that displays a list of beer recipes.
* Users be able to scroll through a list of recipes and to view a single recipe.

### Detailed instructions that were taken into account during execution:

- Get a list of recipes on initial load, save them in the zustand store
(https://api.punkapi.com/v2/beers?page=1)
- The amount of recipes rendered should always be 15
- Implement multiple selection of recipes. User can select multiple recipes by clicking on
recipes with the mouse right button. If user selected at least one recipe, the "Delete"
button should appear somewhere.
- If the user clicks the "Delete" button, selected items should be removed from rendered
list (but still 15 recipes should be rendered).
- Users can deselect recipe if item is clicked one more time.
- Users can go to a single recipe page by clicking on recipe card with mouse left button.
- If there is no more recipes to show, you should make another API request to get another
25 recipes.

## Technologies

- React with hooks
- Typescript
- Zustand
- SCSS
- React-spinners
