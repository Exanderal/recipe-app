export const getRandomRecipe = async () => {
  try {
    const response = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%252Cdessert",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    const recipe = await response.json();
    return recipe;
  } catch (e) {}
};
