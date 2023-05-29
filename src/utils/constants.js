//base url for noroff api
const baseUrl = "https://api.noroff.dev/api/v1/holidaze";
//deprecated google maps api
const geocodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
//regex for email
const emailRegex = /^[a-z0-9.æøå]{0,}[a-z0-9]{1,}@stud.noroff.no$/;
//regex for username
const usernameRegex = /^[a-zA-Z0-9_æøåÆØÅ]{3,}$/;
export { baseUrl, geocodingUrl, emailRegex, usernameRegex };
