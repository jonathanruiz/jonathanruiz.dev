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
    }
}
