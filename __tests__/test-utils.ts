import {
  DEFAULT_REGEX,
  CPP_REGEX,
  CSHARP_REGEX,
  FORTRAN_REGEX,
  GO_REGEX,
  HASKELL_REGEX,
  JAVA_REGEX,
  JAVASCRIPT_REGEX,
  KOTLIN_REGEX,
  LUA_REGEX,
  OCAML_REGEX,
  PHP_REGEX,
  PERL_REGEX,
  PYTHON_REGEX,
  RUBY_REGEX,
  SWIFT_REGEX,
  TYPESCRIPT_REGEX
} from "../lib/index";

import { read } from "fs";

let fs = require("fs");

const cppPath = "./languages/cpp.cpp";
const cpp = readFile(cppPath);

const csharpPath = "./languages/csharp.cs";
const csharp = readFile(csharpPath);

const fortranPath = "./languages/fortran.f";
const fortran = readFile(fortranPath);

const goPath = "./languages/go.go";
const go = readFile(goPath);

const haskellPath = "./languages/haskell.hs";
const haskell = readFile(haskellPath);

const kotlinPath = "./languages/kotlin.kt";
const kotlin = readFile(kotlinPath);

const luaPath = "./languages/lua.lua";
const lua = readFile(luaPath);

const javaPath = "./languages/java.java";
const java = readFile(javaPath);

const javascriptPath = "./languages/javascript.js";
const javascript = readFile(javascriptPath);

const typescriptPath = "./languages/typescript.ts";
const typescript = readFile(typescriptPath);

const ocamlPath = "./languages/ocaml.ml";
const ocaml = readFile(ocamlPath);

const perlPath = "./languages/perl.pl";
const perl = readFile(perlPath);

const phpPath = "./languages/php.php";
const php = readFile(phpPath);

const pythonPath = "./languages/python.py";
const python = readFile(pythonPath);

const swiftPath = "./languages/swift.swift";
const swift = readFile(swiftPath);

const rubyPath = "./languages/ruby.rb";
const ruby = readFile(rubyPath);

const languages = new Map([
  ["cpp", cpp],
  ["csharp", csharp],
  ["fortran", fortran],
  ["go", go],
  ["haskell", haskell],
  ["java", java],
  ["javascript", javascript],
  ["kotlin", kotlin],
  ["lua", lua],
  ["ocaml", ocaml],
  ["perl", perl],
  ["php", php],
  ["python", python],
  ["ruby", ruby],
  ["swift", swift],
  ["typescript", typescript]
]);

const regexs = new Map([
  ["cpp", CPP_REGEX],
  ["csharp", CSHARP_REGEX],
  ["fortran", FORTRAN_REGEX],
  ["go", GO_REGEX],
  ["haskell", HASKELL_REGEX],
  ["java", JAVA_REGEX],
  ["javascript", JAVASCRIPT_REGEX],
  ["kotlin", KOTLIN_REGEX],
  ["lua", LUA_REGEX],
  ["ocaml", OCAML_REGEX],
  ["perl", PERL_REGEX],
  ["php", PHP_REGEX],
  ["python", PYTHON_REGEX],
  ["ruby", RUBY_REGEX],
  ["swift", SWIFT_REGEX],
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
