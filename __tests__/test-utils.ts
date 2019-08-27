import {
  DEFAULT_REGEX,
  CPP_REGEX,
  CSHARP_REGEX,
  GO_REGEX
} from '../src/index'

let fs = require('fs')

const cppPath = "./languages/cpp.cpp";
const cpp = readFile(cppPath)

const csharpPath = "./languages/csharp.cs";
const csharp = readFile(csharpPath)

const goPath = "./languages/go.go";
const go = readFile(csharpPath)

const languages = new Map([
  ["cpp", cpp],
  ["csharp", csharp],
  ["go", go],
]);

const regexs = new Map([
  ["cpp", CPP_REGEX],
  ["csharp", CSHARP_REGEX],
  ["go", GO_REGEX],
])

export const testRegex = (name: string) => {
  const languageExample = languages.get(name);
  const regex = regexs.get(name);

  return languageExample.match(regex)
};

function readFile(path) {
  return fs.readFileSync(process.cwd() + "/__tests__/" + path).toString()
}

module.exports = {
  testRegex
};
