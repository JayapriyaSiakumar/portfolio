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
      fullDescription:
        "Go-Eventz is a scalable event management platform with multi-role access (user, organizer, admin). It includes secure Stripe payments, analytics dashboards, and full event lifecycle management.",
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
      fullDescription:
        "A modern React app powered by MealsDB API, enabling users to explore recipes, view ingredients, and follow cooking instructions with a clean UI.",
      link: "https://meals-app-bay.vercel.app/",
      github: "https://github.com/JayapriyaSiakumar/mealsApp",
      tech: ["React", "Tailwind", "API"],
    },
    {
      id: "3",
      projectName: "Smart Expense Tracker",
      icon: "./assets/work-32.png",
      image: "./assets/work-3.png",
      description:
        "An expense tracking app with charts and category-based insights.",
      fullDescription:
        "Track income and expenses with real-time updates, charts, and filtering using Context API and Recharts.",
      link: "https://smart-expense-tracker-frontend-lovat.vercel.app/",
      github:
        "https://github.com/JayapriyaSiakumar/SmartExpenseTracker-Frontend",
      backendLink:
        "https://smartexpensetracker-backend-4zyg.onrender.com/",
      backendGithub:
        "https://github.com/JayapriyaSiakumar/SmartExpenseTracker-Backend",
      tech: ["React", "Context API", "Recharts"],
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
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col overflow-hidden"
          >
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
                  className="text-blue-500 hover:underline"
                >
                  🔗 Demo
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  🐙 GitHub
                </a>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-200 rounded-full"
                  >
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
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl rounded-2xl p-6 overflow-y-auto max-h-[90vh]"
          >
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
                className="text-blue-500"
              >
                🔗 Frontend
              </a>

              <a
                href={selectedWork.github}
                target="_blank"
                className="text-gray-700"
              >
                🐙 GitHub
              </a>
            </div>

            {selectedWork.backendLink && (
              <div className="flex gap-4 text-sm mt-2">
                <a
                  href={selectedWork.backendLink}
                  target="_blank"
                  className="text-blue-500"
                >
                  🔗 Backend
                </a>

                <a
                  href={selectedWork.backendGithub}
                  target="_blank"
                  className="text-gray-700"
                >
                  🐙 Backend GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}