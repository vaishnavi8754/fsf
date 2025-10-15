# AngularJS To-Do Application

This is a simple To-Do application built using AngularJS for the front-end and Node.js for the back-end. The application allows users to manage their to-do items, which are stored in a JSON file.

## Project Structure

```
angularjs-todo-app
├── client
│   ├── index.html          # Main HTML file for the AngularJS application
│   ├── app.js              # Initializes the AngularJS application
│   ├── controllers
│   │   └── todoController.js # Manages to-do items
│   ├── services
│   │   └── todoService.js   # Handles HTTP requests for CRUD operations
│   └── styles
│       └── style.css        # CSS styles for the application
├── server
│   ├── server.js            # Entry point for the Node.js server
│   └── data
│       └── todos.json       # Stores to-do items in JSON format
├── package.json             # npm configuration file
└── README.md                # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd angularjs-todo-app
   ```

2. **Install dependencies:**
   Navigate to the project directory and run:
   ```
   npm install
   ```

3. **Start the server:**
   In the `server` directory, run:
   ```
   node server.js
   ```

4. **Open the application:**
   Open `client/index.html` in your web browser to access the To-Do application.

## Usage

- Add new to-do items using the input field and submit button.
- Remove to-do items by clicking the delete button next to each item.
- The application retrieves and displays the to-do items from the JSON file on page load.

## Technologies Used

- AngularJS
- Node.js
- Express
- JSON

## License

This project is licensed under the MIT License.