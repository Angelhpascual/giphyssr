export async function searchGifApi(q) {
  const api_key = "tnCO31SacELsJ7fvsv8YkXeSHW8nTEuV";
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=25&offset=0&rating=g&lang=en`
    );
    const results = await res.json();
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
