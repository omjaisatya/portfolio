import About from "./about/page";
import { Sparkles, Code, Rocket } from "lucide-react";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-12 py-16 sm:py-20 flex flex-col items-center gap-24 w-full">
      <section className="w-full text-center px-4 sm:px-8">
        <div className="flex justify-center items-center gap-2 mb-4 text-amber-500">
          <Sparkles className="w-6 h-6" />
          <span className="uppercase text-sm font-semibold">
            Frontend Developer / Backend Developer
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
          I am a graduate student of Computer Science and Engineering from
          Maharshi Dayanand University, Rohtak. I am passionate about Computer
          Science and I love exploring new technologies. I am a quick learner
          and a team player.
        </p>
      </section>

      <section id="about" className="w-full px-4 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <About />
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-4 text-blue-600">
          <Code className="w-6 h-6" />
          <h2 className="text-3xl font-semibold">My Tech Stack</h2>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
          I build scalable, responsive UIs with:
        </p>
        <ul className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-white">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "JavaScript",
            "React Native",
            "Git",
            "Nodejs",
            "Express",
            "MongoDB",
          ].map((skill) => (
            <li
              key={skill}
              className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="w-full px-4 sm:px-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-4 text-green-600">
          <Rocket className="w-6 h-6" />
          <h2 className="text-3xl font-semibold">My Journey</h2>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
          I started by turning sketches into HTML in high school. Since then,
          I’ve explored the world of frontend development—building passion
          projects, contributing to open source, and constantly learning. I love
          the feeling of turning an idea into an experience people can interact
          with.
        </p>
      </section>

      <section id="projects" className="text-center w-full">
        <a
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg sm:text-xl font-medium hover:bg-blue-700 transition-all"
        >
          See My Projects →
        </a>
      </section>

      <section className="w-full px-4 sm:px-8">
        <h2 className="text-3xl font-semibold text-center mb-10 text-purple-600">
          My Timeline
        </h2>
        <ol className="relative border-l border-gray-300 dark:border-gray-700 max-w-4xl mx-auto">
          {[
            {
              year: "2021",
              title: "Started Learning HTML & CSS",
              description:
                "Created my first static website with raw HTML and CSS.",
            },
            {
              year: "2022",
              title: "Discovered JavaScript",
              description:
                "Began building interactive features and small web apps.",
            },
            {
              year: "2023",
              title: "Built First React App",
              description: "Fell in love with components and state management.",
            },
            {
              year: "2023",
              title: "Learned TypeScript & Tailwind",
              description:
                "Started writing strongly typed, scalable frontend code.",
            },
            {
              year: "2024–2024",
              title:
                "Started Internship at Alnac It Pvt. Ltd. (Octaworld) Company",
              description:
                "Gained real-world experience in a fast-paced environment.",
            },
          ].map((item, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-purple-600 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                {item.year}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="text-center w-full px-4 sm:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
          Want to work together?
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Let’s create something amazing.
        </p>
        <a
          href="mailto:satyaprakash451256@proton.me"
          className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition"
        >
          Get In Touch
        </a>
      </section>
      <Footer />
    </main>
  );
}
