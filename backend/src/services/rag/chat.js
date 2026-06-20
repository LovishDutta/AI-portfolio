require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");
const search = require("./search");

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function chat(question) {
    const retrievedDocs = await search(question, 5);

    const context = retrievedDocs
        .map((doc, index) => {
            return `
Source ${index + 1}

Title: ${doc.metadata.title}

Content:
${doc.content}
`;
        })
        .join("\n\n");

    const prompt = `
You are an AI Portfolio Assistant for Lovish Dutta.

IMPORTANT RULES:

1. Answer ONLY using the provided context.
2. If the answer is not present in the context, say:
   "I don't have enough information about that in Lovish's portfolio."
3. Do not invent projects, skills, achievements, or experiences.
4. Keep answers concise and professional.

CONTEXT:

${context}

QUESTION:

${question}

ANSWER:
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });
    const uniqueSources = [
    ...new Map(
        retrievedDocs.map(doc => [
            doc.metadata.title,
            {
                title: doc.metadata.title,
                type: doc.metadata.type,
            }
        ])
    ).values()
];
    return {
        answer: response.text,
        sources: uniqueSources
    };
}

module.exports = chat;