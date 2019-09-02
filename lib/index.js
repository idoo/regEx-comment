// TODO: add more cases for multiline comments
const DEFAULT_REGEX = /\/\*[\s\S]*?\*\/|\/\/.*$/gm;

const CPP_REGEX = DEFAULT_REGEX;
const CSHARP_REGEX = DEFAULT_REGEX;
const FORTRAN_REGEX = /#if 0[\s\S]*?#endif|!((?!!).)*$/gm;
const GO_REGEX = DEFAULT_REGEX;
const HASKELL_REGEX = /\{\-\|[\s\S]*?\-}|--.*$/gm;
const JAVA_REGEX = DEFAULT_REGEX;
const JAVASCRIPT_REGEX = DEFAULT_REGEX;
const KOTLIN_REGEX = DEFAULT_REGEX;
const LUA_REGEX = /\[((=*)\[(.|\n)*?)\]\2\]|--.*$/gm;
const PERL_REGEX = /=begin[\s\S]*?=cut|(#(.*)$)/gm;
const PHP_REGEX = DEFAULT_REGEX;
const PYTHON_REGEX = /'{3}[\s\S]*?'{3}|"{3}[\s\S]*?"{3}|#(.*)$/gm;
const RUBY_REGEX = /(#(.*)$)/gm;
const SWIFT_REGEX = DEFAULT_REGEX;
const TYPESCRIPT_REGEX = DEFAULT_REGEX;

module.exports = {
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
  PERL_REGEX,
  PHP_REGEX,
  PYTHON_REGEX,
  RUBY_REGEX,
  SWIFT_REGEX,
  TYPESCRIPT_REGEX
};
