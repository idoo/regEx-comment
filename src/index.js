// TODO: add more cases for multiline comments
const DEFAULT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*$/gm;
const CPP_REGEX = DEFAULT_REGEX;
const CSHARP_REGEX = DEFAULT_REGEX;
const GO_REGEX = DEFAULT_REGEX;
const JAVA_REGEX = DEFAULT_REGEX;
const JAVASCRIPT_REGEX = DEFAULT_REGEX;
const KOTLIN_REGEX = DEFAULT_REGEX;
const PHP_REGEX = DEFAULT_REGEX;
const RUBY_REGEX = /(#(.*)$)/gm;
const PYTHON_REGEX = /'{3}[\s\S]*?'{3}|"{3}[\s\S]*?"{3}|#(.*)$/gm;
const HASKELL_REGEX = /\{\-\|[\s\S]*?\-}|--.*$/gm;
const TYPESCRIPT_REGEX = DEFAULT_REGEX;

module.exports = {
  DEFAULT_REGEX,
  CPP_REGEX,
  CSHARP_REGEX,
  GO_REGEX,
  HASKELL_REGEX,
  JAVA_REGEX,
  JAVASCRIPT_REGEX,
  KOTLIN_REGEX,
  PHP_REGEX,
  PYTHON_REGEX,
  RUBY_REGEX,
  TYPESCRIPT_REGEX
};
