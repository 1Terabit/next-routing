# Next.js Project

This project is a Next.js application that serves as a multi-page web application. Here's a summary of what each page does:

- **Home Page (`index.js`)**: This is the first page you see when you access the application. It contains links to the other pages of the application.
- **About Page (`about.js`)**: This page provides information about the author of the application.
- **Posts Page (`posts.js`)**: This page displays a list of posts obtained from an external API. Each time the page is loaded, data is fetched from the server using the `getServerSideProps` function.


## Project Structure

The project consists of several files that define the different parts of the application:

### _app.js

This is the main component of the application. It imports the necessary styles and renders the current page component.

### about.js

This is the "About" page. It contains a link to return to the home page.

### index.js

This is the home page of the application. It contains links to the other pages of the application.

### posts.js

This is the "Posts" page. It uses the `getServerSideProps` function to get data from the server when rendering the page. It displays a list of posts obtained from an external API.

### next.config.js

This file configures the webpack module system to correctly resolve the aliases of the page routes.

## How it Works

When you access the application, the home page is displayed. From there, you can navigate to the other pages using the provided links. The "Posts" page gets data from the server each time it loads, displaying a list of posts.


## How to Run the Project

To run this project, follow these steps:

1. Clone the repository.
1. Make sure you have Node.js and Next.js installed on your system.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
3. Run `next dev` to start the application.

Open <http://localhost:3000> to view it in the browser.
