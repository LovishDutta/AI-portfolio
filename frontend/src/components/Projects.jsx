import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section
            className="
                max-w-7xl
                mx-auto
                px-6
                py-24
            "
        >
            <div className="mb-16">
                <h2
                    className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        mb-4
                    "
                >
                    Projects
                </h2>

                <p
                    className="
                        text-slate-400
                        text-lg
                    "
                >
                    A collection of AI, Machine Learning,
                    Full Stack, and Backend projects that
                    showcase my software engineering skills.
                </p>
            </div>

            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                "
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;