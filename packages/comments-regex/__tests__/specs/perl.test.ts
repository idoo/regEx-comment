import { testRegex } from "./../test-utils";

const languageName = 'perl';

describe("Perl", () => {
  it("returns `Hello World! program`", () => {
    expect(
      testRegex(languageName)
    ).toContain('=begin\nHello World! program\n=cut')
  });

  it("returns `# output`", () => {
    expect(testRegex(languageName)).toContain('# output')
  });

  it("returns `# commented line`", () => {
    expect(testRegex(languageName)).toContain('# commented line')
  });
});
