
# 🎬 MovieDesk

> A modern Angular web app to explore trending movies, TV shows, and people — powered by TMDB.

This project is a **Single Page Application (SPA)** built with **Angular** that uses **The Movie Database (TMDB) API** to display trending movies, TV shows, and people.


---
## Demo 🎥

[Watch Demo]([https://youtu.be/VIDEO_ID](https://drive.google.com/file/d/14YXggk3WHpRFY3G0orxFq_rJ3PSEZIOT/view?usp=sharing))
---
## Features ✨

* **Single Page Application (SPA)** experience — no full-page reloads.
* **Navbar** with 4 main sections:
  * **List** : Displays all trending (movies, TV shows, and people).
  * **People** : Displays popular people.
  * **Movies** : Displays trending movies.
  * **TV** : Displays trending TV shows.
* **Authentication** :
* Token is required for me to access TMDB API endpoints.
* **Card Design** :
* Each item card shows an image, title, rating, and a short description (if available).
* **Details Page** :
* Clicking a card opens a detailed view of that item inside the app without reloading.
* **Dark Theme** :
* The entire application uses a dark, modern, cinematic theme.

---

## API Reference 🔗

* [TMDB API Documentation](https://developer.themoviedb.org/reference/intro/getting-started)
* Example endpoint for trending data:

  ```
  https://api.themoviedb.org/3/trending/all/{time_window}
  ```

---

## Technologies Used 🛠️

* **Angular** — Frontend framework
* **TypeScript** — For type-safe JavaScript
* **Bootstrap 5** — For responsive UI design
* **FontAwesome** — For icons
* **TMDB API** — For real-world movie and TV data

---

## Getting Started 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/moviedb-spa.git
   ```
2. Navigate into the project directory:

   ```bash
   cd moviedb-spa
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the Angular development server:

   ```bash
   ng serve
   ```
5. Visit the app in your browser:

   ```
   http://localhost:4200
   ```

---

## Routes Overview 📚

| Route Path  | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `/list`   | Display all trending content                                 |
| `/people` | Display popular people                                       |
| `/movie`  | Display trending movies                                      |
| `/tv`     | Display trending TV shows                                    |
| `/:id`    | Display detailed view of an item (movie, tv show, or person) |

---

## Notes 📚

* **Single Page Navigation** is handled with Angular Router.
* **RouterLink** and **RouterLinkActive** are used for smooth navigation between pages without reloads.
* **Authorization Token** is necessary to interact with TMDB API.
