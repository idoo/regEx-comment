# RegEx 
extract comment content from programming languages

## C++
`/^([^\/\/]*)\/\/(.*)$/`

## C#
`/^([^\/\/]*)\/\/(.*)$/`

## Fortan
`/^([^!]*)!(.*)$/`

## Go
`/^([^!]*)!(.*)$/`

## Haskell
`/(^ ?-- ?.*| -- .*)/gm`

## Java
`/(\/\*[\s\S]*?(.*)\*\/)|(\/\/.*)/gm`

## Javascript
`/(?:(?:^|\s)\/\/(.+?)$)|(?:\/\*(.*?)\*\/)/gms`

## Kotlin
`/^([^\/\/]*)\/\/(.*)$/`

## Lua
`/(^ ?-- ?.*| -- .*)/gm`

## Ocaml
`/\/\*(.*?)\*\//`

## PHP
`/(\/\*[\s\S]*?(.*)\*\/)|(\/\/.*)/gm`

## Perl
`/(^=begin(.*?|\n)*?=cut$|#.*)/gm`

## Python
`/^([^#]*)#(.*)$/`

## Ruby
`/^([^#]*)#(.*)$/`

## TypeScript
`/(\/\*[\s\S]*?(.*)\*\/)|(\/\/.*)/gm`


Thank you <a href="https://github.com/Bogdan-Lyashenko">Bogdan Lyashenko</a>!
