import Rule from "../rule.js";

module.exports = Rule.makeRule({
    name: "long-paragraph",
    selector: "paragraph",
    pattern: /^.{501,}/,
    lint: function(state, content, nodes, match) {
        return `Paragraph too long:
This paragraph is ${content.length} characters long.
Shorten it to 500 characters or fewer.`;
    },
});
