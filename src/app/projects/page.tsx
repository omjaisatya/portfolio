"use client";

import ProjectCard from "../components/ProjectCard";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Projects() {
  const router = useRouter();
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="flex items-center text-blue-600 hover:underline mb-6 text-lg sm:text-xl"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Projects
      </h1>

      <ProjectCard
        title="Pluse Post"
        description="PlusePost is a blogging application built with the ReactJS. This application allows users to create, read, update, and delete blog posts.It includes features like user authentication and a rich text editor for creating posts."
        liveLink="https://pluse-post.vercel.app"
        repoLink="https://github.com/omjaisatya/pluse-post"
      />

      <ProjectCard
        title="Chat Connect"
        description="Chat Connect is a real-time chat application built using React, Node.js, Express, Socket.IO, and MongoDB. This project allows users to communicate with each other instantly, with features such as user authentication, real-time messaging, and chat room management."
        liveLink="https://chat-connect-pi.vercel.app/"
        repoLink="https://github.com/omjaisatya/chat-connect"
      />
    </main>
  );
}
