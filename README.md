# FilmSphere - Movie Search Application

FilmSphere is a modern React application for searching and discovering movies using the OMDb API. This project demonstrates best practices for building production-grade React applications.

## Features

- Search for movies by title
- Responsive design for all devices
- Accessible UI components
- Error handling and loading states
- Modern folder structure
- Custom hooks for business logic
- API service separation
- Type checking with PropTypes

## Project Structure

```
src/
  ├── assets/           # Static assets like images and icons
  ├── components/       # Reusable UI components
  │   ├── Header.jsx    # App header with title and search
  │   ├── MovieCard.jsx # Individual movie display card
  │   ├── MoviesList.jsx # Container for displaying movies
  │   └── SearchBar.jsx # Search input component
  ├── constants/        # Application constants
  ├── hooks/            # Custom React hooks
  │   └── useMovieSearch.js # Movie search logic
  ├── services/         # API and external services
  │   └── movieService.js # OMDB API integration
  ├── utils/            # Helper functions and utilities
  ├── App.js            # Main application component
  ├── App.css           # Application styles
  └── index.js          # Application entry point
```

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Environment Setup

Before starting the application, you need to create a `.env` file in the root directory with your OMDb API key:

```env
REACT_APP_OMDB_API_KEY=your_omdb_api_key_here
```

You can get an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx).

## Technologies Used

- React 18 with Hooks
- Axios for API requests
- PropTypes for type checking
- React Helmet for document head management
- CSS for styling
- Error boundaries for error handling

## Best Practices Implemented

- Component composition and reusability
- Custom hooks for separating business logic
- HTTPS for API calls
- Proper error handling
- Accessibility improvements
- Responsive design
- Modular CSS
- Environment variables for API keys
- Service layer for API interactions
- Proper loading and error states
- Error boundaries for application stability
