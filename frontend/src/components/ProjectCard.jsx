function ProjectCard({ project }) {
    return (
        <div
            className="
                bg-[#161b22]
                border
                border-slate-700
                rounded-2xl
                p-6
                hover:-translate-y-2
                hover:border-sky-400
                transition-all
                duration-300
                flex
                flex-col
                h-full
            "
        >
            <p
                className="
                    text-sky-400
                    text-sm
                    font-medium
                    mb-2
                "
            >
                {project.category}
            </p>

            <h3
                className="
                    text-2xl
                    font-semibold
                    mb-4
                "
            >
                {project.title}
            </h3>

            <p
                className="
                    text-slate-400
                    leading-7
                    mb-6
                    flex-grow
                "
            >
                {project.description}
            </p>

            <div className="mb-6">
                <h4
                    className="
                        text-lg
                        font-medium
                        mb-3
                    "
                >
                    Tech Stack
                </h4>

                <div
                    className="
                        flex
                        flex-wrap
                        gap-2
                    "
                >
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="
                                px-3
                                py-1
                                rounded-full
                                bg-slate-800
                                text-sky-400
                                text-sm
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h4
                    className="
                        text-lg
                        font-medium
                        mb-3
                    "
                >
                    Highlights
                </h4>

                <ul
                    className="
                        text-slate-400
                        space-y-2
                    "
                >
                    {project.highlights.map(
                        (highlight, index) => (
                            <li
                                key={index}
                                className="
                                    flex
                                    gap-2
                                "
                            >
                                <span className="text-sky-400">
                                    ▹
                                </span>

                                <span>
                                    {highlight}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>

            <div
                className="
                    flex
                    gap-4
                    mt-auto
                "
            >
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            px-4
                            py-2
                            bg-sky-500
                            hover:bg-sky-600
                            rounded-lg
                            transition
                        "
                    >
                        Live Demo
                    </a>
                )}

                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
                        px-4
                        py-2
                        border
                        border-slate-600
                        hover:border-sky-400
                        rounded-lg
                        transition
                    "
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;