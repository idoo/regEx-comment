# RegEx 
extract [currently single line only] comment content from programming languages

## C++
`/^([^\/\/]*)\/\/(.*)$/`

## C#
`/^([^\/\/]*)\/\/(.*)$/`

## Fortan
`/^([^!]*)!(.*)$/`

## Go
`/^([^!]*)!(.*)$/`

## Haskell
`/^([^--]*)--(.*)$/`

## Java
`/^([^\/\/]*)\/\/(.*)$/`

## Javascript
#### Single line
`/^([^\/\/]*)\/\/(.*)$/`
#### Multi line
`/(\/\*[\s\S]*?(.*)\*\/)|(\/\/.*)/gm`

## Kotlin
`/^([^\/\/]*)\/\/(.*)$/`

## PHP
`/^([^\/\/]*)\/\/(.*)$/`

## Python
`/^([^#]*)#(.*)$/`

## Ruby
`/^([^#]*)#(.*)$/`

## TypeScript
`/^([^\/\/]*)\/\/(.*)$/`


Thank you <a href="https://github.com/Bogdan-Lyashenko">Bogdan Lyashenko</a>!
