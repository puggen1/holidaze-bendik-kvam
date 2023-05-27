const baseUrl = "https://api.noroff.dev/api/v1/holidaze";
const geocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?"
const emailRegex = /^[a-z0-9.æøå]{0,}[a-z0-9]{1,}@stud.noroff.no$/
const usernameRegex = /^[a-zA-Z0-9_æøåÆØÅ]{3,}$/
export { baseUrl, geocodingUrl, emailRegex, usernameRegex };
