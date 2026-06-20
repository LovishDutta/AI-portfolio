require("dotenv").config();

const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
});

async function getEmbedding(text, inputType = "search_document") {
    const response = await cohere.embed({
        texts: [text],
        model: "embed-english-v3.0",
        inputType,
    });

    return response.embeddings[0];
}

module.exports = getEmbedding;