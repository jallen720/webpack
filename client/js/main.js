import "../scss/style.scss";
import Content from "./Content.js";
import { writeLine, test } from "./util.js";
import containerTemplate from "../pug/container.pug";
import errorTemplate from "../pug/error.pug";


writeLine(containerTemplate());
writeLine(new Content(":)").test());
writeLine(errorTemplate({ error: "error message"}));
test();
