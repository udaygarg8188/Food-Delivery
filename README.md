# Food-Delivery

Food Delivery MERN Stack Website
Overview
This project is a full-stack web application for a food delivery service, built using the MERN stack (MongoDB, Express.js, React, and Node.js). It includes user authentication, an admin panel for managing food items, and integration with AWS S3 for image storage. The application also integrates Stripe for payment processing. The project is deployed using Render.

Features
User authentication (sign-up, login)
Admin panel for managing food items
Food items display on the frontend
Add to cart functionality
View cart and order status
Payment processing using Stripe
Image storage on AWS S3
Deployed using Render
Technologies Used
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
Image Storage: AWS S3
Payment Processing: Stripe
Deployment: Render
Installation
Prerequisites
Node.js installed on your machine
MongoDB Atlas account or a local MongoDB server
AWS account with an S3 bucket set up
Stripe account for payment processing
Render account for deployment
Steps
Clone the repository:

bash
git clone https://github.com/udaygarg8188/Food-Delivery.git
cd food-delivery-mern
Set up environment variables:

Create a .env file in the root of your project and add the following environment variables:

plaintext
Copy code
PORT=4000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET_NAME=your_s3_bucket_name
STRIPE_SECRET_KEY=your_stripe_secret_key
Install backend dependencies:


cd backend
npm install
Install frontend dependencies:

cd ../frontend
npm install
Start the backend server:


cd ../backend
npm start
Start the frontend development server:


cd ../frontend
npm start
Usage
User Features
Sign Up / Login: Users can create an account or log in to their existing account.
Browse Food Items: Users can view the list of available food items.
Add to Cart: Users can add items to their cart.
View Cart: Users can view the items in their cart and proceed to checkout.
Place Order: Users can place an order and make a payment using Stripe.
Order Status: Users can view the status of their orders.
Admin Features
Admin Login: Admins can log in to the admin panel.
Manage Food Items: Admins can add, update, or remove food items.
View Orders: Admins can view the list of orders placed by users.
Deployment
The project is deployed using Render. Follow these steps to deploy your application:

Create a Render Account: Sign up at Render.

Deploy the Backend:

Create a new Web Service in Render.
Connect your GitHub repository.
Set the build command to cd backend && npm install.
Set the start command to cd backend && npm start.
Add the environment variables from your .env file to the Render environment variables.
Deploy the Frontend:

Create a new Web Service in Render.
Connect your GitHub repository.
Set the build command to cd frontend && npm install && npm run build.
Set the start command to serve -s build.
Add any necessary environment variables.
Contributing
If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React
Node.js
Express.js
MongoDB
AWS S3
Stripe
Render