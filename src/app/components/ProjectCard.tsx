export default function ProjectCard({
  title,
  description,
  liveLink,
  repoLink,
}: {
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 shadow-lg p-6 mb-6 rounded-2xl">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>

      <div className="flex gap-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Live Demo
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
