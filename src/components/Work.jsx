import { useState } from "react";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);

  const work = [
    {
      id: "1",
      projectName: "Go-Eventz",
      icon: "./assets/work-1.jfif",
      image: "./assets/work-1.png",
      description:
        "A full-stack event management platform with secure ticket booking, dashboards, and payment integration.",
      fullDescription: `🔹 Full Description
Go-Eventz is a scalable full-stack event management application that enables users to discover, book, and manage events seamlessly. It supports multi-role access including users, organizers, and admins, each with dedicated dashboards.
The platform integrates secure payment processing using Stripe, allowing real-time transaction tracking and reliable ticket booking. Organizers can manage events, monitor sales, and analyze revenue, while admins oversee platform-wide activity.
The system is built with a modular backend architecture and a responsive frontend, ensuring performance, scalability, and smooth user experience across devices.
🔹 Tech Stack
React, TailwindCSS, Redux Toolkit, Node.js, Express.js, MongoDB, Stripe API`,
      link: "https://go-event-ruddy.vercel.app/",
      github: "https://github.com/JayapriyaSiakumar/GoEvent",
      backendLink: "https://goevent-backend.onrender.com/",
      backendGithub: "https://github.com/JayapriyaSiakumar/GoEvent-Backend",
      tech: ["React", "Tailwind", "Node", "MongoDB", "Stripe"],
    },
    {
      id: "2",
      projectName: "Recipes App",
      icon: "./assets/work-2.jpg",
      image: "./assets/work-2.png",
      description:
        "A responsive recipe discovery app with real-time search and category filtering.",
      fullDescription: `🔹 Full Description
The Recipes App is a modern frontend application that allows users to explore and search thousands of recipes using the MealsDB API. It provides instant search results, category-based filtering, and detailed recipe views including ingredients and step-by-step instructions.
The application focuses on clean UI, fast rendering, and smooth user experience. It demonstrates strong API integration, reusable component design, and responsive layout implementation.
🔹 Tech Stack
React, TailwindCSS, MealsDB API`,
      link: "https://meals-app-bay.vercel.app/",
      github: "https://github.com/JayapriyaSiakumar/mealsApp",
      tech: ["React", "Tailwind", "axios", "meals db"],
    },
    {
      id: "3",
      projectName: "Smart Expense Tracker",
      icon: "./assets/work-32.png",
      image: "./assets/work-3.png",
      description:
        "An expense tracking app with charts and category-based insights.",
      fullDescription: `🔹 Full Description
The Smart Expense Tracker is a responsive financial management application that helps users track income and expenses efficiently. It provides real-time updates, category-based filtering, and visual insights using charts.
Users can add, edit, and delete transactions while monitoring their financial trends through dynamic graphs. The app uses Context API for lightweight state management and focuses on clean UI and performance.
🔹 Tech Stack
React, Context API, Recharts, TailwindCSS`,
      github:
        "https://github.com/JayapriyaSiakumar/SmartExpenseTracker-Frontend",
      backendLink: "https://smartexpensetracker-backend-4zyg.onrender.com/",
      backendGithub:
        "https://github.com/JayapriyaSiakumar/SmartExpenseTracker-Backend",
      tech: ["React", "Context API", "Recharts"],
    },
    {
      id: "4",
      projectName: "WchatApp",
      icon: "./assets/work-4.png",
      image: "./assets/work-41.png",
      description:
        "WChatApp — Real-Time MERN Chat Application with Smart Notifications & Responsive UX",
      fullDescription: `WChatApp is a full-stack chat application built using the MERN stack and Socket.IO, enabling real-time one-to-one and group messaging. It features live typing indicators, online/offline status, and an interactive notification system with unread tracking. The UI is fully responsive, adapting seamlessly to mobile with a sliding sidebar and optimized chat experience.
🔹 TECH STACK
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
      tech: ["React", "Context API", "Socket.io", "nodejs", "mongodb"],
    },
  ];

  return (
    <div id="work" className="w-full px-4 sm:px-8 lg:px-[10%] py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
        My Projects
      </h2>

      {/* ✅ GRID FIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {work.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedWork(item)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col overflow-hidden">
            {/* Image */}
            <img
              src={item.icon}
              alt={item.projectName}
              className="w-full h-44 object-cover"
            />

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {item.projectName}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Links */}
              <div className="flex gap-4 text-sm mt-auto">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline">
                  🔗 Demo
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:underline">
                  🐙 GitHub
                </a>
              </div>
              {item.backendLink && (
                <div className="flex gap-4 text-sm mt-2">
                  <a
                    href={item.backendLink}
                    target="_blank"
                    className="text-blue-500">
                    🔗 Backend
                  </a>

                  <a
                    href={item.backendGithub}
                    target="_blank"
                    className="text-gray-700">
                    🐙 Backend GitHub
                  </a>
                </div>
              )}

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ MODAL FIX */}
      {selectedWork && (
        <div
          onClick={() => setSelectedWork(null)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold text-blue-600 mb-4">
              {selectedWork.projectName}
            </h2>

            <img
              src={selectedWork.image}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-600 text-sm mb-4">
              {selectedWork.fullDescription}
            </p>

            <div className="flex gap-4 text-sm">
              <a
                href={selectedWork.link}
                target="_blank"
                className="text-blue-500">
                🔗 Frontend
              </a>

              <a
                href={selectedWork.github}
                target="_blank"
                className="text-gray-700">
                🐙 GitHub
              </a>
            </div>

            {selectedWork.backendLink && (
              <div className="flex gap-4 text-sm mt-2">
                <a
                  href={selectedWork.backendLink}
                  target="_blank"
                  className="text-blue-500">
                  🔗 Backend
                </a>

                <a
                  href={selectedWork.backendGithub}
                  target="_blank"
                  className="text-gray-700">
                  🐙 Backend GitHub
                </a>
              </div>
            )}

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedWork.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-200 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
