const fs = require("fs/promises");
const path = require("path");
const { Document } = require("@langchain/core/documents");

const DATA_DIR = path.join(__dirname, "../../data");

async function readJson(fileName) {
    const filePath = path.join(DATA_DIR, fileName);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

async function generateDocuments() {
    const documents = [];

    const [
        about,
        skills,
        projects,
        achievements,
        positions,
        contact,
        cpProfile
    ] = await Promise.all([
        readJson("about.json"),
        readJson("skills.json"),
        readJson("projects.json"),
        readJson("achievements.json"),
        readJson("positions.json"),
        readJson("contact.json"),
        readJson("cp-profile.json")
    ]);

    // ABOUT

    documents.push(
        new Document({
            pageContent: `
Name: ${about.name}

Title: ${about.title}

College: ${about.college}

Degree: ${about.degree}

Graduation Year: ${about.graduationYear}

CGPA: ${about.cgpa}

Location: ${about.location}

Summary:
${about.summary}

Interests:
${about.interests.join(", ")}
`,
            metadata: {
                type: "about",
                title: "About Lovish Dutta"
            }
        })
    );

    // SKILLS

    documents.push(
        new Document({
            pageContent: `
Languages:
${skills.languages.join(", ")}

Frontend:
${skills.frontend.join(", ")}

Backend:
${skills.backend.join(", ")}

Databases:
${skills.databases.join(", ")}

AI and Machine Learning:
${skills.ai_ml.join(", ")}

Tools:
${skills.tools.join(", ")}

Core Subjects:
${skills.coreSubjects.join(", ")}
`,
            metadata: {
                type: "skills",
                title: "Technical Skills"
            }
        })
    );

    // PROJECTS

    projects.forEach(project => {
        documents.push(
            new Document({
                pageContent: `
Project Name: ${project.title}

Category: ${project.category}

Duration: ${project.duration || "Not specified"}

Description:
${project.description}

Problem:
${project.problem || "Not specified"}

Solution:
${project.solution || "Not specified"}

Tech Stack:
${project.techStack.join(", ")}

Features:
${project.features.join("\n")}
`,
                metadata: {
                    type: "project",
                    projectId: project.id,
                    title: project.title
                }
            })
        );
    });

    // ACHIEVEMENTS

    achievements.forEach(achievement => {
        documents.push(
            new Document({
                pageContent: `
Achievement Title:
${achievement.title}

Description:
${achievement.description}
`,
                metadata: {
                    type: "achievement",
                    title: achievement.title
                }
            })
        );
    });

    // POSITIONS

    positions.forEach(position => {
        documents.push(
            new Document({
                pageContent: `
Position:
${position.title}

Organization:
${position.organization}

Duration:
${position.duration}

Description:
${position.description}
`,
                metadata: {
                    type: "position",
                    title: position.title
                }
            })
        );
    });

    // CONTACT

    documents.push(
        new Document({
            pageContent: `
Email:
${contact.email}

GitHub:
${contact.github}

LinkedIn:
${contact.linkedin}

College:
${contact.college}
`,
            metadata: {
                type: "contact",
                title: "Contact Information"
            }
        })
    );

    // CP PROFILE

    documents.push(
        new Document({
            pageContent: `
Competitive Programming Profiles

Codeforces:
${JSON.stringify(cpProfile.codeforces, null, 2)}

LeetCode:
${JSON.stringify(cpProfile.leetcode, null, 2)}

CodeChef:
${JSON.stringify(cpProfile.codechef, null, 2)}

GeeksForGeeks:
${JSON.stringify(cpProfile.gfg, null, 2)}

GitHub:
${JSON.stringify(cpProfile.github, null, 2)}
`,
            metadata: {
                type: "competitive-programming",
                title: "Competitive Programming Profiles"
            }
        })
    );

    return documents;
}

module.exports = generateDocuments;