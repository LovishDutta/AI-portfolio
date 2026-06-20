const getEmbedding = require("./embedding");
const { getCollection } = require("./chroma");

function detectIntent(query) {
    query = query.toLowerCase();

    if (
        query.includes("project") ||
        query.includes("built") ||
        query.includes("developed")
    ) {
        return "project";
    }

    if (
        query.includes("skill") ||
        query.includes("technology")
    ) {
        return "skills";
    }

    if (
        query.includes("achievement")
    ) {
        return "achievement";
    }

    if (
        query.includes("position") ||
        query.includes("responsibility")
    ) {
        return "position";
    }

    return "general";
}

async function search(
    query,
    topK = 5
) {
    const embedding =
        await getEmbedding(
            query,
            "search_query"
        );

    const collection =
        await getCollection();

    const results =
        await collection.query({
            queryEmbeddings: [embedding],
            nResults: topK,
        });

    const docs = [];

    const intent =
        detectIntent(query);

    for (let i = 0;i < results.documents[0].length;i++) {
        const metadata =
            results.metadatas[0][i];

        if (
            intent !== "general" &&
            metadata.type !== intent
        ) {
            continue;
        }

        docs.push({
            content:
                results.documents[0][i],

            metadata,

            score:
                results.distances?.[0]?.[i] ??
                0,
        });
    }

    return docs;
}

module.exports = search;