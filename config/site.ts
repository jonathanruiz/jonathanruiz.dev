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
            link: "https://jonathanruiz.dev",
            githubRepo: "https://github.com/jonathanruiz/jonathanruiz.dev"
        },
        {
            title: "Hacker News Next-js",
            link: "",
            githubRepo: "https://github.com/jonathanruiz/hacker-news-nextjs"
        },
        {
            title: "nato-reader",
            link: "https://github.com/jonathanruiz/nato-reader",
            githubRepo: "https://github.com/jonathanruiz/hacker-news-nextjs"
        }
    ]
}
