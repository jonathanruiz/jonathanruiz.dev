/** @type {import("prettier").Options} */
const config = {
    ...require("prettier-config-standard"),
    plugins: [require.resolve("prettier-plugin-astro")],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ],
    endOfLine: "lf",
    semi: false,
    singleQuote: false,
    tabWidth: 4
}

module.exports = config
