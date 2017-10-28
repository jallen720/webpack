import "../scss/style.scss";
import Content from "./Content.js";
import { writeLine, test } from "./util.js";
import containerTemplate from "../pug/container.pug";
import errorTemplate from "../pug/error.pug";


writeLine(containerTemplate());
writeLine(errorTemplate({ error: "error message"}));
writeLine(new Content(":)").test());
test();
