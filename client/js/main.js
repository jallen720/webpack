import "../scss/style.scss";
import Content from "./Content.js";
import { writeLine, test } from "./util.js";
import errorTemplate from "../pug/error.pug";


writeLine(new Content(":)").test());
writeLine(errorTemplate({ error: "error message"}));
test();
