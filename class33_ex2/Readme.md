


--- In this application we have added the functionality to fetch the movies from OMDB APi
APi:  const response = await axios.get(`${API_URL}?s=${searchTerm}&type=${type}&apikey=${API_KEY}`);


---- Create the API service to fetch the movie data and it will will proivd the full information about the movies
 const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);

-- in this application implmented the search bar wher user can enter movie name. If the movie data is present in the API it will diplay the movie list.



Display search results in a grid or list format, showing movie posters, titles, and brief descriptions.
Implement pagination for handling large sets of search results.
Implement a detailed view for each movie, including a larger poster, title, release year, genre, plot summary, ratings, and cast.
Include a dropdown filter which filters the movies based on their type. Use API endpoint for filter.
do not use the filter method [ex: array.filter()].
Set up React Router to handle navigation between the search page, movie details page.
Implement error handling for API requests and display user-friendly messages when necessary.
Handle cases where no results are found or the API returns an error.
Clean, readable, and well-documented code.
A brief README file explaining the project.

