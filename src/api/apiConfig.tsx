const apiConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  baseUrl: "https://api.themoviedb.org/3/",
  originalImage: (imgPath: String) =>
    `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath: String) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};
export default apiConfig;
