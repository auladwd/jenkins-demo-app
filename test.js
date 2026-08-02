console.log("Running tests...");

// Simple dummy test
const assert = (condition, message) => {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`PASS: ${message}`);
};

assert(1 + 1 === 2, "Basic math works");
assert("hello".length === 5, "String length works");
assert(typeof "jenkins" === "string", "Type check works");

console.log("All tests passed!");
