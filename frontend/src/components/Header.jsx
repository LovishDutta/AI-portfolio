import { NavLink, Outlet } from "react-router-dom";

function Header() {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Achievements", path: "/achievements" },
        { name: "Ask AI", path: "/assistant" },
    ];

    return (
        <>
            <nav
                className="
                    fixed
                    top-0
                    left-0
                    w-full
                    z-50
                    bg-[#0d1117]/90
                    backdrop-blur-md
                    border-b
                    border-purple-500/20
                "
            >
                <div
                    className="
                        max-w-7xl
                        mx-auto
                        px-6
                        h-20
                        flex
                        items-center
                        justify-between
                    "
                >
                    {/* Logo */}

                    <h1
                        className="
                            text-2xl
                            font-bold
                            text-white
                            tracking-wide
                        "
                    >
                        
                    </h1>

                    {/* Navigation Links */}

                    <div
                        className="
                            flex
                            items-center
                            gap-8
                        "
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive }) =>
                                    `
                                    text-sm
                                    font-medium
                                    transition-all
                                    duration-300
                                    ${
                                        isActive
                                            ? "text-blue-400"
                                            : "text-gray-300 hover:text-blue-400"
                                    }
                                `
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Page Content */}

            <main
                className="
                    min-h-screen
                    bg-[#0d1117]
                    text-white
                    pt-20
                "
            >
                <Outlet />
            </main>
        </>
    );
}

export default Header;