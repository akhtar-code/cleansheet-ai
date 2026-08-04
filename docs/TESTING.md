# Testing Strategy

## Goal

CleanSheet AI aims to provide reliable spreadsheet transformations through automated testing.

---

## Planned Test Categories

### Unit Tests

Utility functions:

- removeEmptyRows
- removeDuplicates
- removeEmptyColumns
- trimSpaces
- findReplace
- sortData
- splitColumn
- mergeColumns
- autoClean

---

### Component Tests

React components:

- UploadBox
- ExcelPreview
- Toolbar
- Statistics

---

### Integration Tests

User workflows:

- Upload spreadsheet
- Clean spreadsheet
- Download spreadsheet

---

### Regression Tests

Verify bug fixes remain fixed after future updates.

---

## Planned Testing Tools

- Vitest
- React Testing Library
- GitHub Actions

---

## Future Coverage Goal

Target:

- 80% utility coverage
- 70% component coverage

---

# Current Test Coverage

Current automated tests cover:

- ✅ removeEmptyRows
- ✅ removeDuplicates
- ✅ removeEmptyColumns
- ✅ trimSpaces
- ✅ findReplace
- ✅ sortData
- ✅ splitColumns
- ✅ mergeColumns
- ✅ autoClean

## Test Statistics

- 9 test files
- 60+ automated unit tests
- All tests passing

## Next Testing Goals

- React component testing
- Integration testing
- End-to-end testing
- GitHub Actions automated testing