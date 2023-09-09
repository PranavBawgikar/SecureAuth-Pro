<h1 align="center">SecureAuth Pro</h1>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

SecureAuth Pro is a Node.js API designed to handle user authentication using JSON Web Tokens (JWT). This robust authentication system leverages MongoDB as the database, Mongoose for creating models and connecting to the Express server, bcryptjs for password hashing, and JWT to manage private routes.

## Getting Started

Follow these steps to set up and run SecureAuth Pro on your local machine.

### Prerequisites

- Node.js installed on your system.
- MongoDB Atlas account for database storage.
- Create a `.env` file in the root folder and add your MongoDB Atlas connection string:

```env
DB_CONNECT=your_connection_string_here
```
### Installing Dependencies

In the project directory, run:

```bash
npm install
```

This command will install all the required dependencies, including `@hapi/joi` for schema validation, `bcryptjs` for password hashing, `nodemon` for server auto-restart during development, `express` for building the API, and `jsonwebtoken` for authentication.

### Starting the Server

To start the server, run:

```bash
npm start
```

The server will run locally on port 3000 (you can change this in the `.env` file).

## Usage

SecureAuth Pro provides a powerful authentication solution for your applications. It includes user registration, login, and JWT-based authentication for protected routes. You can integrate this API into your frontend or other services that require secure user management.

## Contributing

Contributions are welcome from the community. Feel free to open issues or pull requests to help improve SecureAuth Pro.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
