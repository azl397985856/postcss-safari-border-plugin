var postcss = require("postcss");
module.exports = postcss.plugin("postcss-test-plugin", function() {
    return function(root) {
        root.walkRules(function(rule) {
            var hasOverflowHidden = false;
            var hasBorderRadius = false;
            rule.walkDecls(/^overflow-?/, function(decl) {
                if (decl.value === "hidden") {
                    hasOverflowHidden = true;
                }
            });

            rule.walkDecls(/border-radius/, function(decl) {
                hasBorderRadius = true;
            });

            if (hasOverflowHidden && hasBorderRadius) {
                var maskImage = rule.some(function(i) {
                    return i.prop === "-webkit-mask-image";
                });
                if (!maskImage) {
                    rule.append({
                        prop: "-webkit-mask-image",
                        value: "-webkit-radial-gradient(white, black)"
                    });
                }
            }
        });
    };
});
