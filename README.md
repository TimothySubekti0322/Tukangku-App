# TUKANGKU

Tukangku - "**Your favorite all for one service app!**. Tukangku provides a solution to the problem of availability and quality of skilled workers. It is a platform that can assist in booking skilled workers offering a variety of services, with a guarantee for quality repairs."

## Tukangku Team

<p align="center" style="margin: 60px 0px">
  <img src="https://res.cloudinary.com/dlx2svkha/image/upload/v1717063652/zs2cjbopm6cukj7prw1w.png" alt="Benyamin Jodi Sitinjak" width="25%">
  <img src="https://via.placeholder.com/100x1/0000/0000.png" alt="spacer" style="width: 5%;">
  <img src="https://res.cloudinary.com/dlx2svkha/image/upload/v1715343955/Group_377_qrizgb.png" alt="Timothy Subekti" width="25%">
    <img src="https://via.placeholder.com/100x1/0000/0000.png" alt="spacer" style="width: 5%;">
  <img src="https://res.cloudinary.com/dlx2svkha/image/upload/v1715343955/Group_378_vlfrt6.png" alt="Felisa Aidadora D" width="25%">
</p>

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [Feedback](#feedback)

## Features

### 1. Booking Service

Tukangku app allows users to easily book skilled workers like plumbers, electricians, and carpenters for home services and repairs. Users can select the required service, provide job details, view worker profiles and quotes, and confirm their booking with an online payment.

### 2. Messaging

Chat directly with the worker assigned to your booking. Our in-app messaging feature allows for clear communication between you and the handyman to discuss details and updates regarding the service.

### 3. Search Service

Find the right service quickly with our search feature. Simply enter keywords related to the service you need, and browse through a list of available options.

### 4. History Service

Keep track of your service history:

- **Upcoming Services**: View and manage your upcoming bookings.
- **Completed Services**: Access records of all completed services.
- **Cancelled Services**: Review services that were cancelled.

## Technologies Used

### Frontend

- **Framework :** React Native (Expo)
- **Language :** Typescript
- **Material Design Library :** React Native Paper
- **CSS Framework :** NativeWind

### Backend

- **Framework :** Express.js

### Database

- **Cloud Database :** Firestore

## Getting Started

### Prerequisites

Before you begin setting up Tukangku on your system, ensure you meet the following prerequisites to ensure a smooth setup and execution environment:

1. **Node.js :**

   - **Description :** You need Node.js version 20.10.0 or higher installed on your machine. Node.js is essential as it will run the npm package manager and the server environment for your project.

   - **Download** : [Node.js installation](https://nodejs.org/en/)

2. **Expo CLI**

   - **Description**: The command-line tool for interacting with Expo during development.

   - **Installation**: Run this command in your terminal to install Expo CLI:
     ```bash
     npm install -g expo-cli
     ```

3. **Git :**

   - **Description :** Version control is handled via Git. Make sure you have Git installed to clone the project repository.

   - **Download :** [Git installation](https://git-scm.com/downloads)

4. **Google Cloud Storage & Firebase Account :**

   - **Description :** Set up accounts for Google Cloud Storage and Firebase Admin SDK. Make sure to obtain necessary credentials and API keys.

   - **Create Account :** [Tutorial Create Firebase Account](https://youtu.be/oVlbJTFbHDE)

### Installation

First of all you need to **clone this project**

```bash
git clone https://github.com/TimothySubekti0322/Tukangku-App
```

#### Backend Setup

Navigate to the backend directory

Then install all the dependencies by running this command

```bash
npm install
```

Now Upload your serviceAccount.json in root folder. from the previous video, it should be renamed to serviceAccount.json. File name must be serviceAccount.json otherwise it will cause an error

Create a .env file in the root of the backend directory to store your environment variables such as API keys, database URLs, and other sensitive configurations. Use the following template to guide your setup:

```bash
PORT=4000
JWT_SECRET=YOUR_JWT_SECRET_HERE
```

- **JWT_SECRET :** could be generate automaticly by typing this command in terminal

  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

Once all configurations are in place, start the backend server by running:

```bash
npm start
```

This command will use Nodemon to run app.js and now you can access server on **localhost:4000**

#### Frontend Setup

Navigate to the backend directory

```bash
cd Tukangku
cd client
```

Then install all the dependencies by running this command

```bash
npm install
```

Before we start the server, we should to configure the API URL in order to connect with backend server. go to static/API.js and replace the code with your IPv4 address. you can get your IPv4 address by going to command terminal and type "ipconfig". Then search for IPv4 address that look's like this "192.168.1.110", then replace the Base_URL like the code below

```bash
const BASE_URL = "http://{IPv4 Address}:4000";
```

Launch the development server with Expo to start working on the frontend

```bash
npm run start
```

This command will open a new tab where you can choose to run the application on an iOS simulator, Android emulator, or your mobile device via the Expo Go app.

#### Verifying Installation

To verify that your installation is successful, ensure the backend server is running without errors and the frontend connects to the backend correctly. Check the console for any potential errors or missing configurations and ensure your .env file is correctly set up as per the backend requirements.

By following these detailed steps, you will set up both the frontend and backend of the Tukangku application, ready for development and testing.

## API Documentation

For a comprehensive guide on how to use the API endpoints provided by Tukangku, please refer to our detailed API documentation. This documentation includes all necessary details on API endpoints, including request formats, required parameters, example requests and responses, and error handling.

### Accessing the API Documentation

You can view the API documentation by visiting the following link:
[Tukangku API Documentation](https://documenter.getpostman.com/view/28193468/2sA3Qv7AQS)

### Using the Documentation

The API documentation is interactive and allows you to directly interact with the API from within the documentation itself. To use this feature:

- Ensure you are logged into Postman if required.
- Select the endpoint you wish to test.
- Enter required parameters and authentication credentials directly in the documentation to make live API calls.
- API flow already automated, everytime you hit login API, then token variable will be updated. Remember that you have to hit login API once before you use another APIs

## Deployment

To make it easier for users and stakeholders to try out the Tukangku app, we provide a downloadable APK for Android devices and a backend URL for accessing the server.

### Android Application

To download the latest version of the Tukangku app for Android:

**[Download Tukangku APK](https://drive.google.com/drive/folders/1biGLzSKBInrbZ-57yNpA9Ug3FAo9i6rr?usp=sharing)**:

The APK file can be sideloaded onto your Android device. Follow these steps:

1. Download the APK file to your device.
2. Allow installations from unknown sources if prompted.
3. Install the app by tapping on the downloaded APK file.
4. Launch the app and start exploring the features of Tukangku.

### Backend URL

Access the backend server for API interactions and management:

**[Tukangku Backend URL](https://tukangku.fly.dev)**

You can access the backend via this URL, which provides:

- APIs for managing guests and events.
- Real-time data insights through dashboards.
- Secure endpoints to ensure your event data is protected.

## Contributors

The Tukangku team is composed of talented individuals who bring diverse skills and perspectives to the development of our app. Our team member :

- **[Benyamin Jodi Sitinjak](https://www.linkedin.com/in/benyamin-jodi-sitinjak-571a89215/)** As Hustler (Business Development Lead)
- **[Timothy Subekti](https://github.com/TimothySubekti0322)** As Hacker (Technical Lead)
- **[Felisa Aidadora Darmawan](https://www.linkedin.com/in/felisadarmawan/)** As Hipster (Design Lead)

## Feedback

Your feedback is crucial for us to continue improving Tukangku and providing the best possible experience. Whether it's a feature request, bug report, or general comments, we value your input.

### How to Provide Feedback

- **GitHub Issues**: For technical issues or feature requests, please open an issue on our [GitHub repository](/issues).
