import { testRegex } from "./../test-utils";

const languageName = 'fortran';

describe("Fortran", () => {
  it("returns `Hello World! program`", () => {
    expect(testRegex(languageName)).toContain('#if 0\nHello World! program\n#endif')
  });

  it("returns `// output`", () => {
    // TODO: fix it
    expect(testRegex(languageName)).toContain('! output')
  });

  it("returns `// commented line`", () => {
    expect(testRegex(languageName)).toContain('! commented line')
  });
});
