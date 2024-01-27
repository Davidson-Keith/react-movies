// process.env => .env.development, or .env.production
export const baseUrl = process.env.REACT_APP_API_URL; // http://localhost:5233/api
export const genresUrl = `${baseUrl}/genres`; // http://localhost:5233/api/genres
