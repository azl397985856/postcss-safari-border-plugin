var postcss = require("postcss");

var plugin = require("./");

function run(input, output, opts) {
    return postcss([plugin(opts)]).process(input);
}

it("doesn nothing", () => {
    return run("a{ }", {}).then(result => {
        expect(result.css).toBe("a{ }");
    });
});

it("does something", () => {
    return run("a{ border-radius: 10px; overflow: hidden; }", "a{ }", {}).then(
        result => {
            expect(result.css).toBe(
                "a{ border-radius: 10px; overflow: hidden; -webkit-mask-image: -webkit-radial-gradient(white, black); }"
            );
        }
    );
});
