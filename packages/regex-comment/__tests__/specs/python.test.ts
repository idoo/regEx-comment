import { testRegex } from "./../test-utils";

const languageName = 'python';

describe("Python", () => {
  it("returns `Hello World! program`", () => {
    expect(testRegex(languageName)).toContain("'''Hello World! program'''")
  });

  it("returns `One More Multiline`", () => {
    expect(testRegex(languageName)).toContain('"""One More Multiline"""')
  });

  it("returns `# output`", () => {
    expect(testRegex(languageName)).toContain('# output')
  });

  it("returns `# commented line`", () => {
    expect(testRegex(languageName)).toContain('# commented line')
  });
});
