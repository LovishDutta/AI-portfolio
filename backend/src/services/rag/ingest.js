const generateDocuments = require("./documentGenerator");
const getEmbedding = require("./embedding");
const { getCollection } = require("./chroma");

const {
    RecursiveCharacterTextSplitter,
} = require("@langchain/textsplitters");

async function ingestPortfolio() {
    console.log("Generating documents...");

    const docs = await generateDocuments();

    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 100,
    });

    const splitDocs = await splitter.splitDocuments(docs);

    console.log("Chunks:", splitDocs.length);

    const collection = await getCollection();

    // Clear existing collection data
    try {
        const existing = await collection.get();

        if (
            existing &&
            existing.ids &&
            existing.ids.length > 0
        ) {
            await collection.delete({
                ids: existing.ids,
            });

            console.log(
                `Deleted ${existing.ids.length} existing chunks`
            );
        }
    } catch (error) {
        console.log(
            "No existing records found"
        );
    }

    const ids = [];
    const embeddings = [];
    const documents = [];
    const metadatas = [];

    for (let i = 0; i < splitDocs.length; i++) {
        const chunk = splitDocs[i];

        const embedding = await getEmbedding(
            chunk.pageContent,
            "search_document"
        );

        ids.push(`chunk-${i}`);

        embeddings.push(embedding);

        documents.push(
            chunk.pageContent
        );

        // Remove LangChain's loc metadata
        const {
            loc,
            ...cleanMetadata
        } = chunk.metadata;

        metadatas.push(
            cleanMetadata
        );

        if ((i + 1) % 5 === 0) {
            console.log(
                `Processed ${i + 1}/${splitDocs.length} chunks`
            );
        }
    }

    await collection.add({
        ids,
        embeddings,
        documents,
        metadatas,
    });

    console.log(
        `Indexed ${splitDocs.length} chunks successfully`
    );
}

module.exports = {
    ingestPortfolio,
};