const DEFAULT_REGEX = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
const CPP_REGEX = DEFAULT_REGEX;
const CSHARP_REGEX = DEFAULT_REGEX;
const GO_REGEX = DEFAULT_REGEX;

module.exports = {
  DEFAULT_REGEX,
  CPP_REGEX,
  CSHARP_REGEX,
  GO_REGEX,
};
