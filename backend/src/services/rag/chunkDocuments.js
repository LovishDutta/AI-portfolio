const { RecursiveCharacterTextSplitter } = require("@langchain/textsplitters");

async function chunkDocuments(documents) {
    const splitter =
        new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 100
        });

    const chunks =
        await splitter.splitDocuments(documents);

    return chunks;
}

module.exports = chunkDocuments;