require("dotenv").config();

const { CloudClient } = require("chromadb");

const client = new CloudClient({
    apiKey: process.env.CHROMA_API_KEY,
    tenant: process.env.CHROMA_TENANT,
    database: process.env.CHROMA_DATABASE,
});

const COLLECTION_NAME = "portfolio";

async function getCollection() {
    try {
        return await client.getCollection({
            name: COLLECTION_NAME,
            embeddingFunction: null,
        });
    } catch {
        return await client.createCollection({
            name: COLLECTION_NAME,
            embeddingFunction: null,
        });
    }
}

module.exports = {
    getCollection,
};