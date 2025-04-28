
---

# MovieDB Angular App 🎬

This project uses **The Movie Database (TMDB) API** to display trending movies, people, TV shows, and more!

Users must log in to fetch data using a secure token, and can explore details for each item.

## Features ✨

* **Navbar** with 4 main pages:
  * **List Page** : Displays trending content (movies, TV shows, people).
  * **People Page** : Displays popular people.
  * **Movies Page** : Displays trending movies.
  * **TV Page** : Displays trending TV shows.
* **Authentication** :
* User must log in first to retrieve a token.
* Token is used to access protected API endpoints.
* **Card View** :

  Each item card shows:

* Image (Poster/Profile)
* Title/Name
* Rating
* Short description (if available)
* **Details Page** :
* Clicking on any card navigates to a detailed view of the selected item.
* Details include extended information like overview, release date, language, and more.

## API Reference 🔗

* Main API documentation: [TMDB API Docs](https://developer.themoviedb.org/reference/intro/getting-started)
* Example endpoint for trending data:

  ```
  https://api.themoviedb.org/3/trending/all/{time_window}
  ```

## How it works 🚀

1. **User Authentication** :

* User logs in and receives a token.
* All further API requests are authenticated using the token.

1. **Fetching Data** :

* Trending content, people, movies, and TV shows are fetched dynamically using TMDB endpoints.
* Each page dynamically lists relevant items.

1. **Navigation** :

* Responsive Navbar links to different sections.
* Clicking any card leads to a dedicated details page.

1. **Dark Theme** :

* Modern dark UI for a clean, cinematic look.

## Technologies Used 🛠️

* **Angular** for frontend framework
* **TypeScript** for robust and type-safe development
* **Bootstrap 5** for responsive styling
* **TMDB API** for real-world data
* **FontAwesome** for icons

## Project Setup ⚙️

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/moviedb-app.git
   ```
2. Navigate to the project directory:

   ```bash
   cd moviedb-app
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   ng serve
   ```
5. Open your browser and navigate to:

   ```
   http://localhost:4200
   ```
