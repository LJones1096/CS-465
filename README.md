# CS-465 Full Stack Development I

## Travlr Getaways Full Stack Web Application

### Architecture

Throughout this course, I worked with different types of frontend development while building the Travlr Getaways application. The customer-facing website used Express, HTML, JavaScript, and Handlebars templates to display travel information. This approach allowed the server to generate pages and display information retrieved from the database. The administrative side of the application used Angular to create a single-page application (SPA). Unlike the traditional website, the Angular application could update information and navigate between components without reloading the entire page. Both approaches were useful, but Angular provided more flexibility for the administrative features, including adding, editing, and deleting trips.

The backend used MongoDB, which is a NoSQL database. MongoDB was a good choice because it stores information in flexible documents rather than traditional relational tables. The trip information included fields such as the trip name, destination, resort, price, and description. Using MongoDB with Mongoose allowed the application to organize and retrieve this information while supporting communication between the frontend and backend.

### Functionality

JSON and JavaScript served different purposes throughout the project. JavaScript is a programming language used to create application functionality, while JSON is a format used to store and exchange data. JSON connected the frontend and backend by allowing the Express API to send trip information to the Angular application. When the administrator requested trip information or submitted changes, the application used JSON to exchange data between the different parts of the system.

Throughout development, I refactored code to improve organization and functionality. One example was separating the API controllers for retrieving all trips and finding a specific trip by its code. This made the code easier to understand and maintain. Another example was using reusable Angular components, including the trip listing and trip card components. Instead of repeating the same code for every trip, the application could display information using the same component. Reusable UI components help reduce duplicate code, improve consistency, and make future updates easier.

### Testing

Testing was an important part of developing the Travlr Getaways application. The application used API endpoints to communicate between the frontend, backend, and database. Different HTTP methods were used depending on the action being performed. GET requests retrieved trip information, POST requests added new trips, PUT requests updated existing trips, and DELETE requests removed trips. Testing these endpoints helped confirm that information was being transferred correctly and that the application responded as expected.

Adding authentication introduced additional testing requirements. The administrative application needed to verify that users were authorized before allowing certain actions. I worked with login authentication and JSON Web Tokens (JWT) to help secure the administrative features. Testing involved confirming that authorized requests could access protected functionality and that requests without proper authorization were restricted. This helped me understand how security affects communication between different parts of a full stack application.

### Reflection

CS-465 helped me develop a better understanding of how frontend development, backend development, and databases work together to create a complete application. Before this course, I had experience working with programming and databases, but this project gave me an opportunity to connect those skills in a larger application. Building Travlr Getaways helped me become more comfortable working with Express, Node.js, MongoDB, Angular, REST APIs, and authentication.

One of the biggest things I learned was the importance of organizing code and testing functionality throughout development. Each module built on the previous one, and changes to one part of the application sometimes affected another. Working through these challenges helped strengthen my problem-solving and troubleshooting skills.

As I prepare to transition into a career in technology, I believe the experience gained in this course will be valuable. I am still exploring different opportunities in computer science and information technology, including cybersecurity. Understanding how web applications are developed and secured gives me a stronger foundation for these career paths. Completing this project also gave me something practical to demonstrate my technical skills to potential employers.

### AI Usage Acknowledgment

### AI Usage Acknowledgment

I used Grammarly to assist with grammar, spelling, punctuation, and clarity. I reviewed the suggestions and made any necessary changes to ensure the final submission reflected my own work.
