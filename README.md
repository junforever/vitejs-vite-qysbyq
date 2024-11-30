# Movie List Project
## Overview
This project is a movie browsing web application built using React and Redux Toolkit. It provides users with a list of movies and implements features such as filtering and infinite scrolling. The project uses RTK Query for efficient data fetching, caching, and state management.

## Built With
- React 18.3.1
- Redux Toolkit 2.3.0
- React Redux 9.1.2
- Axios 1.7.7
- Tailwind CSS 3.4.15
- Vite 5.4.10
- DaisyUI 4.12.14
- Node 20.18.1
- React Icons 5.3.0
- Vitest 2.1.6
- Yarn 1.22.22
- Autoprefixer 10.4.20
- RTK Query

## Main Features:

1. Movie Listing: Displays a list of movies retrieved from an external API, allowing users to explore different titles.

2. Filtering: Users can apply filters like genre or rating using select elements to refine their search results.

3. Infinite Scroll: As users reach the end of the page, more movies are loaded automatically without the need for manual pagination, ensuring a seamless browsing experience.

4. State Management: Uses Redux Toolkit to manage global state for filter settings, enabling consistent filtering across different components of the app.

The application is designed to be user-friendly and performant, with a focus on responsiveness and a smooth user experience.

## How to Use the Application
**Start the Application:**

Run the project locally by using the following command:

```
yarn install
yarn dev
```

Make sure you have all dependencies installed by running `yarn install` before starting the development server.

**View Movies:**

Once the application is running, you will see a list of movies on the main page. These movies are fetched from an API and displayed in a grid format. The initial set of movies will be loaded automatically when you open the application.

**Infinite Scroll:**

As you scroll down the page, the application will automatically load more movies when you reach the bottom. This allows you to continuously discover more content without manual page navigation.

**Filtering Movies:**

At the top of the page, you can find filtering options such as category and Language (represented by select elements).
Choose one to filter the list of displayed movies. The filters are applied in real-time, fetching new data from the API to match your preferences.

**Rule:**

This is a feature to change text section background color of the movie card depending of the option selected.

**Movie Details:**

Clicking on a movie card will bring up more information about the selected movie, such as a summary, popularity, and other details.

**Error Handling and Loading States:**

While the movies are being fetched, a spinner will be displayed.
If there is an issue fetching the movies, an error message will inform you of the problem.

**Key Commands**
1. **Install Dependencies:** Install all necessary dependencies before running the application:

`yarn install`

2. **Define .env file:** Create an  `.env` file in the root directory of the project and add this variable with the corresponding api key:

`VITE_API_KEY=api_key_here`

2. **Run Development Server:** Start the application in development mode:

`yarn dev`

3. **Build for Production:** If you need to build the application for production:

`yarn build`

4. **Unit and Component Testing:** If you want to run the tests run the corresponding script:

`yarn test`

5. **End Point Testing:** If you want to test the Api End Point from vsc you need to install [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension and use the `Request.http` file inside of the `http` folder, you need to replace the api key here as well

## Requirements
**Node.js:** Ensure you have Node.js v20.18.1 installed.
**Yarn:** This project uses Yarn as the package manager. Install Yarn globally if it's not already available.