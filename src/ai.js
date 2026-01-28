// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and
//  suggest a recipe they could make with some or all of those ingredients. You don't need
//  to use every ingredient they mention in your recipe. The recipe can include additional
//  ingredients they didn't mention, but try not to include too many extra ingredients. Format your
//  response in markdown to make it easier to render to a web page`;

// export async function getRecipe(ingredients) {
//   try {
//     const response = await fetch(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_GAMMA_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "upstage/solar-pro-3:free",
//           messages: [
//             { role: "system", content: SYSTEM_PROMPT },
//             {
//               role: "user",
//               content: `Here are the ingredients I have: ${ingredients.join(", ")}`,
//             },
//           ],
//         }),
//       },
//     );

//     const data = await response.json();

//     // Error handling in case the model is busy or offline
//     if (!response.ok) {
//       console.error("OpenRouter API Error:", data);
//       throw new Error(data.error?.message || "Failed to fetch recipe");
//     }

//     return data.choices[0].message.content;
//   } catch (err) {
//     console.error("Recipe fetch failed:", err);
//     return "Sorry, I couldn't generate a recipe right now. Please check your API key and try again.";
//   }
// }

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and
 suggest a recipe they could make with some or all of those ingredients. You don't need 
 to use every ingredient they mention in your recipe. The recipe can include additional
 ingredients they didn't mention, but try not to include too many extra ingredients. Format your
 response in markdown to make it easier to render to a web page`;

export async function getRecipe(ingredients) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GAMMA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Updated Model ID
          model: "arcee-ai/trinity-large-preview:free",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            {
              role: "user",
              content: `Here are the ingredients I have: ${ingredients.join(", ")}`,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    // Safety check: Did the API return an error?
    if (!response.ok) {
      console.error("OpenRouter API Error:", data);
      throw new Error(data.error?.message || "Failed to fetch recipe");
    }

    return data.choices[0].message.content;
  } catch (err) {
    console.error("Recipe fetch failed:", err);
    return "Sorry, I couldn't generate a recipe right now. Please check your API key and try again.";
  }
}
