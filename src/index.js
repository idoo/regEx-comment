// TODO: add more cases for multiline comments
const DEFAULT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*$/gm;
const CPP_REGEX = DEFAULT_REGEX;
const CSHARP_REGEX = DEFAULT_REGEX;
const GO_REGEX = DEFAULT_REGEX;
const JAVA_REGEX = DEFAULT_REGEX;
const JAVASCRIPT_REGEX = DEFAULT_REGEX;
const PHP_REGEX = DEFAULT_REGEX;
const TYPESCRIPT_REGEX = DEFAULT_REGEX;

module.exports = {
  DEFAULT_REGEX,
  CPP_REGEX,
  CSHARP_REGEX,
  GO_REGEX,
  JAVA_REGEX,
  JAVASCRIPT_REGEX,
  PHP_REGEX,
  TYPESCRIPT_REGEX
};
