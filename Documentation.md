# Creating Content on NomeDaAPI

Welcome to the NomeDaAPI documentation! Here, we will guide you on how to create content, specifically a movie or a series, on our platform.

## Prerequisites

- Ensure you have an account on our platform and have the necessary authentication token to interact with our API.

## API Endpoint

To create content, make a POST request to the following endpoint:

POST /content

## Headers

Ensure you include the `Authorization` header with your authentication token:

Authorization: Bearer YOUR_TOKEN_HERE

## Request Body

The body of your request will vary slightly depending on whether you're adding a movie or a series.

### Creating a Movie

For movies, your request body should look like this:

```json
{
  "name": "Your Movie Name",
  "description": "A brief description of the movie",
  "year": "Release Year (e.g., 2023)",
  "type": "Movie",
  "cover": "URL_to_movie_cover_image"
}
```

### Creating a Series

For series, include additional fields for the number of seasons and episodes:

```json
{
  "name": "Your Series Name",
  "description": "A brief description of the series",
  "year": "Release Year (e.g., 2023)",
  "type": "Series",
  "cover": "URL_to_series_cover_image",
  "numberOfSeasons": 5,
  "numberOfEpisodes": 50
}
```

## Response

If successful, the API will return a 201 Created status along with the details of the content you just added. If there's an error, you'll receive an error message detailing what went wrong.

We hope this guide helps you in adding content to our platform. If you have any issues or questions, please reach out to our support team. Enjoy using NomeDaAPI!
