
let script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js";
document.body.append(script);
let source = script.src.split("@");
let version = source[1].split("/")[0];
console.log(`version:${version}`);
