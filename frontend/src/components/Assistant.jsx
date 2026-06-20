import { useState } from "react";

function Assistant() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [sources, setSources] = useState([]);
    const [loading, setLoading] = useState(false);

    const suggestions = [
        "Tell me about Lovish's ML projects",
        "What backend technologies does Lovish know?",
        "Explain the pneumonia detection project",
        "What achievements does Lovish have?",
        "Why should someone hire Lovish?"
    ];

    async function handleAsk(customQuestion = null) {
        const query = customQuestion || question;

        if (!query.trim()) return;

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:8000/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        question: query,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {
                setAnswer(data.answer);
                setSources(data.sources || []);
            } else {
                setAnswer("Something went wrong.");
                setSources([]);
            }
        } catch (error) {
            console.error(error);

            setAnswer(
                "Unable to connect to the AI Assistant."
            );

            setSources([]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section
            className="
                max-w-6xl
                mx-auto
                px-6
                py-24
            "
        >
            {/* Heading */}

            <div className="mb-12 text-center">
                <h1
                    className="
                        text-5xl
                        font-bold
                        mb-4
                    "
                >
                    Ask Lovish AI
                </h1>

                <p
                    className="
                        text-slate-400
                        text-lg
                    "
                >
                    Ask questions about projects,
                    skills, achievements, coding
                    profiles, and experience.
                </p>
            </div>

            {/* Input */}

            <div
                className="
                    bg-[#161b22]
                    border
                    border-slate-700
                    rounded-2xl
                    p-6
                    mb-10
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        md:flex-row
                        gap-4
                    "
                >
                    <input
                        type="text"
                        value={question}
                        onChange={(e) =>
                            setQuestion(
                                e.target.value
                            )
                        }
                        placeholder="Ask something about Lovish..."
                        className="
                            flex-1
                            bg-[#0d1117]
                            border
                            border-slate-700
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            focus:border-sky-400
                        "
                    />

                    <button
                        onClick={() => handleAsk()}
                        disabled={loading}
                        className="
                            px-6
                            py-3
                            bg-sky-500
                            hover:bg-sky-600
                            rounded-xl
                            transition
                            disabled:opacity-50
                        "
                    >
                        {loading
                            ? "Thinking..."
                            : "Ask"}
                    </button>
                </div>
            </div>

            {/* Suggested Questions */}

            <div className="mb-12">
                <h2
                    className="
                        text-2xl
                        font-semibold
                        mb-6
                    "
                >
                    Suggested Questions
                </h2>

                <div
                    className="
                        flex
                        flex-wrap
                        gap-3
                    "
                >
                    {suggestions.map(
                        (suggestion) => (
                            <button
                                key={suggestion}
                                onClick={() => {
                                    setQuestion(
                                        suggestion
                                    );
                                    handleAsk(
                                        suggestion
                                    );
                                }}
                                className="
                                    px-4
                                    py-2
                                    bg-[#161b22]
                                    border
                                    border-slate-700
                                    rounded-xl
                                    hover:border-sky-400
                                    transition
                                "
                            >
                                {suggestion}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Answer */}

            <div
                className="
                    bg-[#161b22]
                    border
                    border-slate-700
                    rounded-2xl
                    p-8
                    mb-8
                    min-h-[250px]
                "
            >
                <h2
                    className="
                        text-2xl
                        font-semibold
                        mb-6
                    "
                >
                    Response
                </h2>

                {!answer ? (
                    <p
                        className="
                            text-slate-400
                            leading-8
                        "
                    >
                        Ask me anything about
                        Lovish's projects,
                        technical skills,
                        achievements,
                        coding profiles,
                        leadership positions,
                        and experience.
                    </p>
                ) : (
                    <div
                        className="
                            text-slate-300
                            leading-8
                            whitespace-pre-wrap
                        "
                    >
                        {answer}
                    </div>
                )}
            </div>

            {/* Sources */}

            {sources.length > 0 && (
                <div>
                    <h2
                        className="
                            text-2xl
                            font-semibold
                            mb-6
                        "
                    >
                        Sources
                    </h2>

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-4
                        "
                    >
                        {sources.map(
                            (source, index) => (
                                <div
                                    key={index}
                                    className="
                                        bg-[#161b22]
                                        border
                                        border-slate-700
                                        rounded-xl
                                        px-4
                                        py-3
                                    "
                                >
                                    <p
                                        className="
                                            font-medium
                                        "
                                    >
                                        {
                                            source.title
                                        }
                                    </p>

                                    <p
                                        className="
                                            text-sm
                                            text-slate-400
                                        "
                                    >
                                        {
                                            source.type
                                        }
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Assistant;