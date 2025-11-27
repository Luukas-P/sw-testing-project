# Software Testing Project

[![Coverage Status](https://coveralls.io/repos/github/Luukas-P/sw-testing-project/badge.svg?branch=main)](https://coveralls.io/github/Luukas-P/sw-testing-project?branch=main)

> A comprehensive testing implementation for 10 functions in a JavaScript utility library, completed as part of the **COMP.SE.200 Software Testing** course at Tampere University. Also includes AI generated tests for comparison purposes.

---

## Project Structure

```
├── src/                    # Source code of the utility library
├── test/
│   ├── unit/              # Manually designed unit tests
│   └── ai-generated/      # AI-generated unit tests
└── .github/workflows/     # CI/CD pipeline configuration
```

---

## Running Tests

Execute tests using the following npm commands:

### Run All Tests
```bash
npm test
```

### Run AI-Generated Tests Only
```bash
npm test -- --grep "AI Generated"
```

### Run Manual Unit Tests Only
```bash
npm test -- --grep "Unit"
```

---

## AI-Based Testing Strategy

A portion of this test suite was generated using Artificial Intelligence to explore automated testing capabilities and compare AI-generated tests with manually crafted ones.

### Tool & Model
- **AI Tool:** Google Gemini
- **Version:** Gemini (Large Language Model, late 2024/2025)

### Generation Process

The tests in `test/ai-generated/` were created through the following approach:

1. **Input Method**  
   Each function's source code was provided individually to ensure context-aware test generation.

2. **Prompt Strategy**  
   The AI was instructed to generate comprehensive unit tests using Mocha and Chai, with specific requirements:
   - Coverage of basic functionality based on JSDoc comments
   - Edge case handling (null, undefined, NaN)
   - Distinctive naming conventions (adding "(AI Generated)" to describe blocks) for separate execution and reporting

3. **Verification**  
   Generated code was reviewed and integrated without modifying the logic, enabling an honest comparison between AI-generated and manually crafted tests.

---

## License

The source code in the `src/` directory is provided under the license specified in that directory. This project respects the original licensing terms of the library under test.

---

## Course Information

**Course:** COMP.SE.200 Software Testing  
**Institution:** Tampere University