export default function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-white py-8 w-full">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <p className="text-lg mb-4">© 2025 Satya. All Rights Reserved.</p>

        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <a
            href="https://github.com/omjaisatya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-base sm:text-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satya-prakash451/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition text-base sm:text-lg"
          >
            LinkedIn
          </a>
          <a
            href="mailto:satyaprakash451256@proton.me"
            className="hover:text-blue-400 transition text-base sm:text-lg"
          >
            Email
          </a>
        </div>

        <p className="text-sm text-gray-400">
          Built with ❤️ using Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
