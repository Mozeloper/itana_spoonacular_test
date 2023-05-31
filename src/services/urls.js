export const baseUrl = import.meta.env.VITE_BASE_URL;
export const api_key = import.meta.env.VITE_SPOONACULAR_API_KEY;
export const queryKey_number = `?apiKey=${api_key}&number=16`;

export const appUrls = {
  RANDOM_RECIPES_URL: `${baseUrl}/random${queryKey_number}`,
  COMPLEX_RECIPES_URL: `${baseUrl}/complexSearch${queryKey_number}`,
  RECIPE_DETAILS_URL: `${baseUrl}`,
};
