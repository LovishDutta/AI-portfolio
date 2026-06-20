function AchievementCard({ achievement }) {
    return (
        <div
            className="
                bg-[#161b22]
                border
                border-slate-700
                rounded-2xl
                p-6
            "
        >
            <h3
                className="
                    text-xl
                    font-semibold
                    mb-3
                "
            >
                {achievement.title}
            </h3>

            <p
                className="
                    text-slate-400
                    leading-7
                "
            >
                {achievement.description}
            </p>
        </div>
    );
}

export default AchievementCard;