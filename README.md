# User Directory Website

A simple and responsive user directory website built using React.js and Vite. This project demonstrates functional components, hooks, and state management with React Context API. It also incorporates routing and responsive design.

## Features

### Home Page
- Fetches and displays a list of users from the API:
  👉 [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Displays each user's **name**, **email**, and **city**.
- Search bar to filter users by name.
- Sorting functionality (A-Z, Z-A) by name.
- Clicking on a user navigates to their detailed profile page.

### User Detail Page
- Displays full user details, including:
  - Name
  - Email
  - Phone
  - Company Name
  - Website
- Includes a "Go Back" button to navigate back to the home page.

### Additional Features
- State management using React Context API or Redux.
- Loading and error handling while fetching data.
- Fully responsive design for both mobile and desktop devices.

## Technologies Used
- **React.js** (Functional Components and Hooks)
- **Vite** for fast development and build
- **React Router** for navigation
- **CSS**, **Tailwind CSS**, for styling
- **React Context API** or **Redux** for state management

## Installation and Setup

Follow these steps to set up and run the project locally:

### Prerequisites
Ensure you have the following installed:
- Node.js (>=14.x)
- npm (Node Package Manager)

### Clone the Repository
```bash
git clone https://github.com/Shankerteja/Users-Web.git
cd Users-Web
```

### Install Dependencies
Install the required npm packages:
```bash
npm install
```

### Start the Development Server
Run the Vite development server:
```bash
npm run dev
```

This will start the application, and you can access it at the URL provided by Vite (e.g., [http://localhost:5173](http://localhost:5173)).

## Folder Structure
```
Users-Web/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Home and User Detail pages
│   ├── context/     # Context API setup (if used)
│   ├── redux/       # Redux setup (if used)
│   ├── App.jsx      # Main app component
│   └── main.jsx     # Entry point
├── vite.config.js   # Vite configuration
├── package.json     # Project configuration
├── index.html       # HTML template
└── README.md        # Documentation
```

## API Reference
- Base URL: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Response Format: JSON

Example User Object:
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "city": "Gwenborough",
    "geo": { "lat": "-37.3159", "lng": "81.1496" }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For questions or feedback, reach out to me at [Shankerteja](https://github.com/Shankerteja).

