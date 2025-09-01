Video Chat App - A Full-Stack Slack Clone
This is a feature-rich, full-stack video chat application that mimics the core functionalities of Slack. It includes real-time messaging, video and audio calls, file sharing, and much more. This project is built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates several modern technologies to provide a seamless user experience.

Live Demo :-https://video-chat-app-frontend-alpha.vercel.app

✨ Features
- Real-time Messaging: Instantaneous messaging between users in channels and direct messages.
- Video and Audio Calls: High-quality video and audio calls with features like screen sharing, reactions, and call recording.
- Channels: Create public and private channels for group conversations.
- Direct Messages: One-to-one private conversations.
- File Sharing: Share images, PDFs, and other file types in chats.
- User Authentication: Secure user authentication and authorization with social sign-up options.
- Message Reactions: React to messages with emojis.
- Threaded Replies: Reply to specific messages to keep conversations organized.
- Pinned Messages: Pin important messages in a channel or direct message.
- User Invitations: Invite users to private channels.
- Polls: Create polls with multiple options within a chat.
- Error Monitoring: Production-grade error monitoring to track and fix bugs.


## 🛠️ Tech Stack

### Frontend (`/frontend`)
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/) – Authentication
- [Stream Video React SDK](https://getstream.io/video/)
- [React Query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)

### Backend (`/backend`)
- Node.js: A JavaScript runtime environment.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing application data.
- Mongoose: An ODM library for MongoDB and Node.js.

### Services And Tools 
- Clerk: For user authentication and management.
- Stream: For real-time chat and video call functionalities.
- Ingest: For running background jobs to sync databases with authentication.
- Sentry: For error monitoring and bug tracking.
- Vercel: For deploying the frontend and backend applications.

## 📂 Project Structure
video-chat-app/
├── frontend/ # React (Vite) frontend
│ ├── src/ # React components, pages, hooks
│ ├── public/ # Static assets
│ └── vite.config.js
│
├── backend/ # Node.js backend (API, signaling, server logic)
│ ├── src/ # Backend routes, controllers
│ └── index.js
│
├── vercel.json # Vercel deployment config
└── README.md

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js and npm installed on your machine.
A MongoDB Atlas account for the database.
Accounts for Clerk, Stream, Ingest, and Sentry.

Installation:-
1. Clone the repository:-
git clone https://github.com/sumitdiwaka/video-chat-app.git
cd video-chat-app

2. Install server dependencies:-
cd server
npm install

3. Install client dependencies:-
cd ../client
npm install

Configuration
1. Set up environment variables for the server:-
Create a .env file in the server directory and add the following variables with your credentials:

Code snippet

MONGO_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
SENTRY_DSN=your_sentry_dsn
Set up environment variables for the client:
Create a .env file in the client directory and add the following variables:

Code snippet

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
VITE_SENTRY_DSN=your_sentry_dsn

Running the Application
2. Start the server:
cd server
npm start

3. Start the client:
cd ../client
npm run dev

The application should now be running on your local machine.

usage
- After setting up the project, you can:
- Sign up for a new account or log in with an existing one.
- Create new channels or join existing ones.
- Start conversations with other users through direct messages.
- Initiate video calls with other users.
- Share files and media in your conversations.

🚢 Deployment
The frontend and backend of this application are deployed on Vercel. You can follow the deployment guides provided by Vercel to deploy your own instance of this application.

📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.