import { testRegex } from "./../test-utils";

const languageName = 'csharp';

describe("C#", () => {
  it("returns `Hello World! program`", () => {
    expect(testRegex(languageName)).toContain('/* Hello World! program */')
  });

  it("returns `// output`", () => {
    expect(testRegex(languageName)).toContain('// output')
  });

  it("returns `// commented line`", () => {
    expect(testRegex(languageName)).toContain('// commented line')
  });
});
