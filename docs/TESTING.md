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