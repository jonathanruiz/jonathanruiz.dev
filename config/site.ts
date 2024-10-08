export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Jonathan Ruiz",
    description:
        "A portfolio site for Jonathan Ruiz, a software engineer based in Utah",
    mainNav: [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Blog",
            href: "/blog"
        }
    ],
    links: {
        github: "https://github.com/jonathanruiz",
        linkedin: "https://www.linkedin.com/in/jonathan-ruiz-9a3038168/"
    },
    projects: [
        {
            title: "Portfolio",
            description: "This site you're on right now!",
            link: "https://jonathanruiz.dev",
            githubRepo: "https://github.com/jonathanruiz/jonathanruiz.dev",
            tags: ["Astro", "React", "TypeScript", "TailwindCSS"]
        },
        {
            title: "wakey",
            description:
                "A TUI built for managing and waking your devices using Wake-on-LAN. ",
            githubRepo: "https://github.com/jonathanruiz/wakey",
            tags: ["GoLang", "CLI", "TUI"]
        },
        {
            title: "grubrun",
            description: "A webapp to help with organizing your food runs.",
            githubRepo: "https://github.com/jonathanruiz/grubrun",
            tags: ["React", "TypeScript", "TailwindCSS", "GoLang", "WebSockets"]
        },
        {
            title: "Hacker News Next.js",
            description: "A Hacker News clone built with Next.js.",
            link: "",
            githubRepo: "https://github.com/jonathanruiz/hacker-news-nextjs",
            tags: ["Next.js", "React", "TypeScript", "TailwindCSS"]
        },
        {
            title: "Nato Reader",
            description:
                "A CLI tool to read an input as the NATO phonetic alphabet.",
            link: "https://github.com/jonathanruiz/nato-reader",
            githubRepo: "https://github.com/jonathanruiz/hacker-news-nextjs",
            tags: ["GoLang", "CLI"]
        }
    ]
}
