import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-8">
      <div className="max-w-7xl mx-auto w-full">

        <div className="max-w-4xl">

          <p className="text-2xl md:text-3xl font-medium mb-4 text-gray-200">
            Hi There! 👋
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            I'M{" "}
            <span className="text-sky-400">
              LOVISH DUTTA
            </span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-8 space-y-2">
            <p>Software Engineer</p>
            <p>Machine Learning Enthusiast</p>
            <p>Competitive Programmer</p>
          </div>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mb-10">
            B.Tech Computer Science & Engineering at NIT Kurukshetra. Passionate about building AI-powered applications,
            scalable backend systems, and solving challenging algorithmic
            problems through competitive programming.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">

            <Link
              to="/assistant"
              className="
                px-7
                py-3
                rounded-lg
                bg-sky-500
                hover:bg-sky-600
                transition
                font-medium
              "
            >
              Ask AI Assistant
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                px-7
                py-3
                rounded-lg
                border
                border-sky-400
                hover:bg-sky-400/10
                transition
                font-medium
              "
            >
              View Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;