import { useState } from "react";
export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);
  const work = [
    {
      id: "1",
      name: "FullStack Project",
      icon: "./assets/work-1.jfif",
      image: "./assets/work-1.png",
      projectName: "Go-Eventz",
      description:
        "Go-Eventz is a fully featured event-management web application designed for users to discover, book, and manage events, while providing organizers and admins with complete control over event operations, payments, and analytics. The platform delivers a seamless user experience from browsing events to completing secure online payments.",
      fullDescription: `Tech Stack: React, TailwindCSS, Redux Toolkit, Node.js, Express.js, MongoDB, Stripe API
Go-Eventz is a fully featured full-stack event-management platform that enables users to discover, book, and manage events. Organizers can create and manage events with full control over ticketing and revenue, while admins monitor platform-wide activity, payments, and analytics. The platform offers a seamless user experience from event browsing to secure online payments.

🚀 Key Features

👥 User, Organizer & Admin Management
- User Module: Browse events, purchase tickets, manage bookings, and track payment history.
- Organizer Module: Create, update, and publish events; manage ticket sales; track revenue; and view attendee lists.
- Admin Panel: Approve or reject organizer registrations; monitor events; manage users; and view system-wide insights.

💳 Secure Payment Integration (Stripe)
- Integrated Stripe Checkout for secure ticket purchases.
- Real-time payment status updates.
- All transaction details stored in MongoDB for analytics and reporting.

📊 Dashboard Analytics
- Revenue Graph: Visual representation of total earnings with date & event-based filtering.
- Payment Graph: Displays completed, pending, and failed payments.
- Built with optimized Node.js + Express API endpoints and dynamic React chart components.

🌐 Front-End (React + TailwindCSS + Redux Toolkit)
- Fully responsive modern UI built with TailwindCSS.
- Redux Toolkit for efficient global state management (auth, events, tickets, payments).
- Real-time updates for ticket availability, payment status, and event operations.

🗄️ Back-End (Node.js + Express + MongoDB)
- RESTful API architecture with modular, scalable structure.
- JWT-based authentication for Users, Organizers, and Admins.
- MongoDB models for events, users, roles, tickets, and payments.
- Middleware for role-based access control (RBAC) and request validation.
`,
      link: "https://go-event-ruddy.vercel.app/",
      github: "https://github.com/JayapriyaSiakumar/GoEvent",
      backendLink: "https://goevent-backend.onrender.com/",
      backendGithub: "https://github.com/JayapriyaSiakumar/GoEvent-Backend",
      tech1: "react",
      tech2: "tailwindcss",
      tech3: "mongodb",
      tech4: "nodejs",
      tech5: "expressjs",
    },
    {
      id: "2",
      name: "Frontend Project",
      icon: "./assets/work-2.jpg",
      image: "./assets/work-2.png",
      projectName: "Recipes App",
      description:
        "The Recipes App is a modern and intuitive frontend application that allows users to explore thousands of recipes, view detailed cooking instructions, discover ingredients, and search meals instantly. Powered by the MealsDB API, the app provides a smooth and responsive UI with fast search, category filtering, and interactive recipe details — delivering a seamless browsing experience for food lovers.",
      fullDescription: `Tech Stack: React, TailwindCSS, MealsDB API
The Recipes App is a modern and interactive frontend application that allows users to explore thousands of delicious meals. Built with React and TailwindCSS, the app provides a fast, clean, and responsive interface for browsing recipes, viewing ingredients, and learning step-by-step cooking instructions through the MealsDB API.

🚀 Key Features

🍽️ Recipe Search & Discovery
- Instant recipe search using keywords.
- Fetches live meal data from the MealsDB REST API.
- Displays meal images, categories, origin, and ingredients.

📖 Detailed Recipe View
- Full recipe details including:
  - Ingredients list
  - Measurements
  - Step-by-step cooking instructions
  - Meal category, tags, and area
- Includes embedded YouTube tutorial links provided by the API.

🔍 Category & Filters
- Browse meals by categories such as Beef, Chicken, Desserts, Vegetarian, Seafood, and more.
- Tailwind-styled filter buttons for a smooth browsing experience.

⚡ Front-End (React + TailwindCSS)
- Fully responsive UI with a clean and modern layout.
- Fast rendering and efficient state handling using React.
- Reusable components such as recipe cards, search bar, and category filters.

🌐 API Integration (MealsDB)
- Fetches real-time recipe data using public API endpoints.
- Includes loading states, error handling, and empty search results.
- Optimized fetch logic to improve performance and user experience.

⭐ Additional Highlights
- Beautiful recipe grid layout.
- Smooth UX with transitions and hover effects.
- Perfect frontend-only project to showcase React + Tailwind skills.
`,
      link: "https://meals-app-bay.vercel.app/",
      github: "https://github.com/JayapriyaSiakumar/mealsApp",
      tech1: "react",
      tech2: "tailwindcss",
      tech3: "mealsdb",
    },
    {
      id: "3",
      name: "Full Stack Project",
      icon: "./assets/work-32.png",
      image: "./assets/work-3.png",
      projectName: "Smart Expense Tracker",
      description:
        "The Smart Expense Tracker is a clean and efficient frontend application designed to help users track, manage, and visualize their daily expenses. Built with React and TailwindCSS, it offers an intuitive interface for adding transactions, categorizing expenses, and viewing financial insights through dynamic charts powered by Recharts.",
      fullDescription: `Tech Stack: React, Context API, Recharts, TailwindCSS
The Smart Expense Tracker is a clean and efficient frontend application designed to help users track, manage, and visualize their daily expenses. Built with React and TailwindCSS, it offers an intuitive interface for adding transactions, categorizing expenses, and viewing financial insights through dynamic charts powered by Recharts.

🚀 Key Features

💸 Add, Edit & Delete Transactions
- Users can easily add new income or expense entries.
- Each transaction includes amount, category, and short notes.
- Supports editing and removing transactions with instant UI updates.

📊 Real-Time Expense Visualization
- Integrated Recharts for attractive and interactive financial charts.
- Pie Chart: Visual breakdown of expenses by category.
- Line/Bar Chart: Spending trends over days, weeks, or months.
- Automatically recalculates totals and updates charts instantly.

⚡ State Management with Context API
- Global state shared across components without prop drilling.
- Efficient, lightweight alternative to Redux for this project.
- Ensures smooth and scalable state updates for transactions.

🎨 Responsive UI (React + TailwindCSS)
- Clean, modern interface using TailwindCSS utility classes.
- Responsive layout optimized for desktop and mobile.
- Smooth transitions, hover animations, and reusable components.

📁 Features & Functionality
- Total balance calculation (Income – Expenses).
- Category-based filtering to analyze spending patterns.
- Persistent data using localStorage (optional).
- Error handling and input validations.

⭐ Additional Highlights
- Minimalistic dashboard with easy-to-read stats.
- Well-structured components and clean project architecture.
- Perfect for demonstrating React fundamentals, context state management, and data visualization.
`,
      link: "https://smart-expense-tracker-frontend-lovat.vercel.app/",
      github:
        "https://github.com/JayapriyaSiakumar/SmartExpenseTracker-Frontend",
      backendLink: "https://smartexpensetracker-backend-4zyg.onrender.com/",
      backendGithub:
        "https://github.com/JayapriyaSiakumar/SmartExpenseTracker-Backend",
      tech1: "react",
      tech2: "tailwindcss",
      tech3: "javascript",
      tech4: "context-api",
    },
    {
      id: "4",
      name: "Full Stack Project",
      icon: "./assets/work-4.png",
      image: "./assets/work-41.png",
      projectName:
        "WChatApp — Real-Time MERN Chat Application with Smart Notifications & Responsive UX",
      description:
        "WChatApp is a real-time MERN chat application with instant messaging, smart notifications, and a fully responsive UI optimized for both desktop and mobile devices.",
      fullDescription: `WChatApp is a production-oriented real-time chat application developed using the MERN stack, designed to deliver a fast, scalable, and user-friendly messaging experience.

The application supports secure user authentication and enables both one-to-one and group conversations with real-time message delivery powered by Socket.IO. It includes advanced interaction features such as live typing indicators, online/offline user presence tracking, and automatic message synchronization.

A core highlight of the application is its smart notification system, which provides real-time alerts for incoming messages with unread counts and quick navigation to conversations. This ensures users stay updated without actively monitoring chats.

The user interface is fully responsive and optimized for multiple devices. On mobile, the sidebar transforms into a slide-in drawer with overlay control, ensuring smooth navigation and better usability. Messages are displayed with structured grouping, timestamps, and sender differentiation for clarity.

This project demonstrates strong full-stack development skills, including API design, state management using React Context API, and real-time communication handling. It reflects the ability to build scalable applications with a focus on performance and user experience.
Frontend

React.js
Tailwind CSS

Backend

Node.js
Express.js

Database

MongoDB

Real-Time Communication

Socket.IO

Authentication

JWT (JSON Web Token)

Other Tools & Libraries

Axios (API calls)
React Hot Toast (notifications UI)
date-fns (time formatting)`,
      link: "https://wchatapp.netlify.app/",
      github: "https://github.com/JayapriyaSiakumar/ChattingApp",
      backendLink: "https://chatingapp-backend-5iaz.onrender.com/",
      backendGithub: "https://github.com/JayapriyaSiakumar/ChatingApp-Backend",
      tech1: "react",
      tech2: "tailwindcss",
      tech3: "socket.io",
      tech4: "context-api",
      tech5: "nodejs",
    },
  ];
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My works</h4>
      <h2 className="text-center text-5xl font-Ovo">My Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development and full stack
        development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((work) => (
          <div
            key={work.id}
            onClick={() => setSelectedWork(work)}
            className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg">
            {/* Project Image */}
            <div className="relative group">
              <img
                className="w-full h-48 object-cover rounded-t-2xl"
                src={work.icon}
                alt="Project Thumbnail"
              />
              {/* Optional: Hover overlay or arrow icon as seen in the image */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h5 className="text-2xl font-bold tracking-tight text-blue-700 ">
                  {work.projectName}
                </h5>
                {/* <span className="text-xs text-gray-400 font-medium">
                  Under Development
                </span> */}
              </div>
              {/* truncate line-clamp-10 */}
              <p className="mb-4 text-sm font-normal text-gray-600 leading-relaxed ">
                {work.description}
              </p>
              {/* Links */}
              <div className="flex gap-4 mb-6 text-sm font-medium text-gray-700">
                <p className="">FrontEnd : </p>
                <a
                  href={work.link}
                  className="flex items-center gap-1 hover:text-blue-600">
                  <span>🔗 Demo</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-blue-600">
                  <span>🐙 GitHub</span>
                </a>
              </div>
              {work.backendLink ? (
                <div className="flex gap-4 mb-6 text-sm font-medium text-gray-700">
                  <p className="">Backend : </p>
                  <a
                    href={work.backendLink}
                    className="flex items-center gap-1 hover:text-blue-600">
                    <span>🔗 Demo</span>
                  </a>
                  <a
                    href={work.backendGithub}
                    className="flex items-center gap-1 hover:text-blue-600">
                    <span>🐙 GitHub</span>
                  </a>
                </div>
              ) : (
                <></>
              )}
              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-800 text-white rounded-full">
                  {work.tech1}
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-green-400 text-white rounded-full">
                  {work.tech2}
                </span>
                {work.tech3 && (
                  <span className="px-3 py-1 text-xs font-semibold bg-orange-400 text-white rounded-full">
                    {work.tech3}
                  </span>
                )}
                {work.tech4 && (
                  <span className="px-2 py-1 text-xs font-semibold bg-gray-500 text-white rounded-full">
                    {work.tech4}
                  </span>
                )}
                {work.tech5 && (
                  <span className="px-2 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                    {work.tech5}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((work) => (
          <div
            key={work.name}
            onClick={() => setSelectedWork(work)}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${work.icon})` }}>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{work.name}</h2>
                <p className="text-sm text-gray-700">{work.projectName}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src="./assets/send-icon.png" alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 "
          onClick={() => setSelectedWork(null)}>
          <div
            className="relative  w-full max-w-4xl max-h-[95vh] p-6 rounded-2xl bg-white border border-[var(--border)] shadow-lg flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-[#6366f1] text-2xl">
                {selectedWork.projectName}
              </h2>
              <img
                src="./assets/close-black.png"
                alt=""
                className="w-3 cursor-pointer"
                onClick={() => setSelectedWork(null)}
              />
            </div>

            <img
              src={selectedWork.image}
              alt=""
              className="rounded-lg  mb-4 w-1/2 h-auto object-center max-h-50 mx-auto"
            />

            {/* Content Section */}
            <div className="p-6">
              <p className="mb-4 text-sm font-normal whitespace-pre-wrap text-gray-600 leading-relaxed">
                {selectedWork.description}
              </p>

              {/* Links */}
              <div className="flex gap-4 mb-6 text-sm font-medium text-gray-700">
                {selectedWork.backendLink ? (
                  <p className="">FrontEnd : </p>
                ) : (
                  <></>
                )}
                <a
                  href={selectedWork.link}
                  className="flex items-center gap-1 hover:text-blue-600">
                  <span>🔗 Demo</span>
                </a>
                <a
                  href={selectedWork.github}
                  className="flex items-center gap-1 hover:text-blue-600">
                  <span>🐙 GitHub</span>
                </a>
              </div>
              {selectedWork.backendLink ? (
                <div className="flex gap-4 mb-6 text-sm font-medium text-gray-700">
                  <p className="">Backend : </p>
                  <a
                    href={selectedWork.backendLink}
                    className="flex items-center gap-1 hover:text-blue-600">
                    <span>🔗 Demo</span>
                  </a>
                  <a
                    href={selectedWork.backendGithub}
                    className="flex items-center gap-1 hover:text-blue-600">
                    <span>🐙 GitHub</span>
                  </a>
                </div>
              ) : (
                <></>
              )}

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-800 text-white rounded-full">
                  {selectedWork.tech1}
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-green-400 text-white rounded-full">
                  {selectedWork.tech2}
                </span>
                {selectedWork.tech3 && (
                  <span className="px-3 py-1 text-xs font-semibold bg-orange-400 text-white rounded-full">
                    {selectedWork.tech3}
                  </span>
                )}
                {selectedWork.tech4 && (
                  <span className="px-2 py-1 text-xs font-semibold bg-gray-500 text-white rounded-full">
                    {selectedWork.tech4}
                  </span>
                )}
                {selectedWork.tech5 && (
                  <span className="px-2 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                    {selectedWork.tech5}
                  </span>
                )}
              </div>
            </div>

            <a
              href={selectedWork.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2">
              View Project{" "}
              <img
                src="./assets/right-arrow-white.png"
                alt=""
                className="w-4"
              />
            </a>
          </div>
        </div>
      )}
      {/* <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
        Show more
        <img
          src="./assets/right-arrow-bold.png"
          alt=""
          className="w-4 dark:hidden"
        />
        <img
          src="./assets/right-arrow-bold-dark.png"
          alt=""
          className="w-4 hidden dark:block"
        />
      </a> */}
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">What i got</h4>
        <h2 className="text-center text-5xl font-Ovo">My Certificate</h2>
        <div className="w-screen d-flex items-center justify-center">
          <img
            className="w-[60%] max-h-70 m-4"
            src="./assets/certificate.png"
            alt="certificate"
          />
        </div>
      </div>
    </div>
  );
}
