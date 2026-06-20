function About() {
  const education = [
    {
      title: "B.Tech Computer Science & Engineering",
      institute: "National Institute of Technology Kurukshetra",
      duration: "2024 - 2028",
      score: "CGPA: 9.55",
    },
    {
      title: "CBSE Class XII",
      duration: "2023 - 2024",
      score: "95.4%",
    },
    {
      title: "CBSE Class X",
      duration: "2021 - 2022",
      score: "97.0%",
    },
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "C++", "Python", "JavaScript", "Java"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "TensorFlow",
        "PyTorch",
        "NumPy",
        "Pandas",
        "Scikit-Learn",
        "OpenCV",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Postman",
        "Hugging Face",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "Core CS",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "DBMS",
        "Computer Networks",
        "Operating Systems",
        "Probability & Statistics",
        "Linear Algebra",
      ],
    },
  ];

  const responsibilities = [
    {
      title: "Student Internship Coordinator",
      organization: "Training & Placement Cell, NIT Kurukshetra",
      description:
        "Facilitating internship opportunities, student-company interactions, and placement activities.",
    },
    {
      title: "Technobyte - Technical Society",
      organization: "NIT Kurukshetra",
      description:
        "Active member contributing to technical workshops, coding contests, and collaborative learning initiatives.",
    },
    {
      title: "Team Leader - ICPC (CodeClashers)",
      organization: "ICPC",
      description:
        "Led a 3-member team, coordinating strategy and problem-solving during programming contests.",
    },
    {
      title: "Team Leader - Smart India Hackathon (AuraFarmers)",
      organization: "SIH",
      description:
        "Led a 6-member team, managing task allocation and development efforts.",
    },
  ];

  const profiles = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lovish-dutta-25bab53b6/",
    },
    {
      name: "GitHub",
      link: "https://github.com/LovishDutta",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/lovish_911/",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/Lovish_91",
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/lovish_911",
    },
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/lovishdbkyj",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Heading */}

      <h1 className="text-5xl font-bold text-center mb-16">
        About Me
      </h1>

      {/* Education */}

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-sky-400 mb-8">
          Educational Background
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                p-6
              "
            >
              <h3 className="font-semibold text-xl mb-3">
                {item.title}
              </h3>

              {item.institute && (
                <p className="text-gray-400 mb-2">
                  {item.institute}
                </p>
              )}

              <p className="text-gray-400">
                {item.duration}
              </p>

              <p className="mt-3 text-sky-400 font-medium">
                {item.score}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-sky-400 mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                p-6
              "
            >
              <h3 className="text-xl font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3
                      py-2
                      rounded-lg
                      bg-slate-800
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Positions of Responsibility */}

      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-sky-400 mb-8">
          Positions of Responsibility
        </h2>

        <div className="space-y-6">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                p-6
              "
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-sky-400 mt-1">
                {item.organization}
              </p>

              <p className="text-gray-400 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Profiles */}

      <section>
        <h2 className="text-3xl font-semibold text-sky-400 mb-8">
          Contact & Profiles
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400">
              lovishdutta30@gmail.com
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">
              +91 98130 63310
            </p>
          </div>

          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-xl
                p-6
                hover:border-sky-400
                transition
              "
            >
              <h3 className="font-semibold">
                {profile.name}
              </h3>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;