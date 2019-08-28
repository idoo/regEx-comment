import {
  DEFAULT_REGEX,
  CPP_REGEX,
  CSHARP_REGEX,
  GO_REGEX,
  JAVA_REGEX,
  JAVASCRIPT_REGEX,
  PHP_REGEX,
  TYPESCRIPT_REGEX
} from "../src/index";

let fs = require("fs");

const cppPath = "./languages/cpp.cpp";
const cpp = readFile(cppPath);

const csharpPath = "./languages/csharp.cs";
const csharp = readFile(csharpPath);

const goPath = "./languages/go.go";
const go = readFile(goPath);

const javaPath = "./languages/java.java";
const java = readFile(javaPath);

const javascriptPath = "./languages/javascript.js";
const javascript = readFile(javascriptPath);

const typescriptPath = "./languages/typescript.ts";
const typescript = readFile(typescriptPath);

const phpPath = "./languages/php.php";
const php = readFile(phpPath);

const languages = new Map([
  ["cpp", cpp],
  ["csharp", csharp],
  ["go", go],
  ["java", java],
  ["javascript", javascript],
  ["php", php],
  ["typescript", typescript]
]);

const regexs = new Map([
  ["cpp", CPP_REGEX],
  ["csharp", CSHARP_REGEX],
  ["go", GO_REGEX],
  ["java", JAVA_REGEX],
  ["javascript", JAVASCRIPT_REGEX],
  ["php", PHP_REGEX],
  ["typescript", TYPESCRIPT_REGEX],
]);

export const testRegex = (name: string) => {
  const languageExample = languages.get(name);
  const regex = regexs.get(name);

  return languageExample.match(regex);
};

function readFile(path) {
  return fs.readFileSync(process.cwd() + "/__tests__/" + path).toString();
}

module.exports = {
  testRegex
};
