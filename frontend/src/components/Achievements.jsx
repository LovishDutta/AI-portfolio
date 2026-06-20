import ProfileCard from "./ProfileCard";
import AchievementCard from "./AchievementCard";

function Achievements() {

    const profiles = [
        {
            platform: "Codeforces",
            rating: 1532,
            maxRating: 1532,
            rank: "Specialist",
            problemsSolved: "450+",
            profileLink:
                "https://codeforces.com/profile/Lovish_91"
        },

        {
            platform: "LeetCode",
            rating: 1967,
            maxRating: 1967,
            rank: "Knight",
            problemsSolved: "850+",
            profileLink:
                "https://leetcode.com/u/lovish_911/"
        },

        {
            platform: "CodeChef",
            rating: 1687,
            maxRating: 1687,
            rank: "3 Star",
            problemsSolved: "60+",
            profileLink:
                "https://www.codechef.com/users/lovish_911"
        },

        {
            platform: "GeeksForGeeks",
            problemsSolved: "250+",
            profileLink: "#"
        }
    ];

    const achievements = [
        {
            title: "CodeChef Starters 236",
            description:
                "Secured Global Rank 159 among thousands of participants."
        },

        {
            title: "Codeforces Round 1096",
            description:
                "Achieved Global Rank 641 in a competitive international contest."
        },

        {
            title: "LeetCode Biweekly Contest 185",
            description:
                "Secured Global Rank 584."
        },

        {
            title: "ICPC Participant",
            description:
                "Participated in the International Collegiate Programming Contest as part of a three-member team and secured AIR 473."
        },

        {
            title: "College Coding competition",
            description:
                "Secured rank 1 in 'The Lost Algorithm', a college-level coding and logical reasoning competition."
        },

        {
            title: "Student Internship Coordinator",
            description:
                "Serving as Student Internship Coordinator at NIT Kurukshetra and assisting students in internship-related activities."
        }
    ];

    return (
        <section
            className="
                max-w-7xl
                mx-auto
                px-6
                py-24
            "
        >
            <div className="mb-16">

                <h2
                    className="
                        text-5xl
                        font-bold
                        mb-4
                    "
                >
                    Achievements
                </h2>

                <p
                    className="
                        text-slate-400
                        text-lg
                    "
                >
                    Competitive Programming Profiles,
                    Contest Achievements, and Positions
                    of Responsibility.
                </p>

            </div>

            <h3
                className="
                    text-3xl
                    font-semibold
                    mb-8
                "
            >
                Coding Profiles
            </h3>

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                    mb-20
                "
            >
                {profiles.map((profile) => (
                    <ProfileCard
                        key={profile.platform}
                        profile={profile}
                    />
                ))}
            </div>

            <h3
                className="
                    text-3xl
                    font-semibold
                    mb-8
                "
            >
                Achievements & Leadership
            </h3>

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-6
                "
            >
                {achievements.map((achievement) => (
                    <AchievementCard
                        key={achievement.title}
                        achievement={achievement}
                    />
                ))}
            </div>
        </section>
    );
}

export default Achievements;