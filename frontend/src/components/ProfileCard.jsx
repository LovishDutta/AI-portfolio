function ProfileCard({ profile }) {
    return (
        <a
            href={profile.profileLink}
            target="_blank"
            rel="noreferrer"
            className="
                block
                bg-[#161b22]
                border
                border-slate-700
                rounded-2xl
                p-6
                hover:-translate-y-2
                hover:border-sky-400
                transition-all
                duration-300
            "
        >
            <h3
                className="
                    text-2xl
                    font-semibold
                    mb-4
                "
            >
                {profile.platform}
            </h3>

            <div className="space-y-2 text-slate-300">

                {profile.rating && (
                    <p>
                        Rating:{" "}
                        <span className="text-sky-400">
                            {profile.rating}
                        </span>
                    </p>
                )}

                {profile.maxRating && (
                    <p>
                        Max Rating:{" "}
                        <span className="text-sky-400">
                            {profile.maxRating}
                        </span>
                    </p>
                )}

                {profile.rank && (
                    <p>
                        Rank:{" "}
                        <span className="text-sky-400">
                            {profile.rank}
                        </span>
                    </p>
                )}

                <p>
                    Problems Solved:{" "}
                    <span className="text-sky-400">
                        {profile.problemsSolved}
                    </span>
                </p>

            </div>
        </a>
    );
}

export default ProfileCard;