# CleanSheet AI
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![License](https://img.shields.io/badge/License-MIT-green)



## Demo

### Live Website

Coming Soon

### Screenshots

Coming Soon

CleanSheet AI is a modern spreadsheet cleaning application built with Next.js, React, and TypeScript.

It helps users clean messy Excel files in seconds by removing duplicate records, deleting empty rows and columns, trimming whitespace, sorting data, merging and splitting columns, and exporting a cleaned spreadsheet.
## Why CleanSheet AI?

Spreadsheet cleaning is one of the most repetitive tasks for students, accountants, analysts, HR teams, and business professionals.

CleanSheet AI automates common spreadsheet cleaning operations while keeping all processing inside the browser for better privacy, speed, and security.

Typical use cases include:

- Financial reports
- HR employee records
- Sales spreadsheets
- Customer databases
- Survey exports
- Academic datasets
- CSV imports

---

## Features

- Upload Excel (.xlsx, .xls) and CSV files
- Remove empty rows
- Remove duplicate rows
- Remove empty columns
- Trim whitespace
- Find and replace values
- Sort data
- Split columns
- Merge columns
- Auto Clean
- Download cleaned Excel file
- Live spreadsheet preview
- Mobile responsive workspace
- Fast client-side processing
## Features Overview

| Category | Status |
|----------|--------|
| Spreadsheet Upload | ✅ |
| Live Preview | ✅ |
| Data Cleaning | ✅ |
| Data Transformation | ✅ |
| Excel Export | ✅ |
| Mobile Responsive | ✅ |
| Client-side Processing | ✅ |
| TypeScript Architecture | ✅ |

---

## Technology Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

### Spreadsheet Engine

- SheetJS (xlsx)

### Development

- Git
- GitHub
- Vercel

---

## Project Structure

```text
app/
components/
hooks/
utils/
types/
public/
```
## Architecture

```text
User
   │
   ▼
UploadBox
   │
   ▼
processFile()
   │
   ▼
Excel Data
   │
   ▼
Cleaning Utilities
   │
   ├── removeEmptyRows
   ├── removeDuplicates
   ├── removeEmptyColumns
   ├── trimSpaces
   ├── sortData
   ├── splitColumn
   ├── mergeColumns
   └── autoClean
   │
   ▼
ExcelPreview
   │
   ▼
downloadExcel()
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/akhtar-code/cleansheet-ai.git
```

Install packages

```bash
npm install
```

Run development server

```bash
npm run dev
```
## Development Workflow

This project follows a feature-branch workflow.

```text
Issue
   ↓
Feature Branch
   ↓
Development
   ↓
Commits
   ↓
Pull Request
   ↓
Merge
```

Every new feature is developed in its own branch before being merged into the main branch.

---

## Current Features

| Feature | Status |
|----------|--------|
| Upload Files | ✅ |
| Excel Preview | ✅ |
| Remove Empty Rows | ✅ |
| Remove Duplicates | ✅ |
| Remove Empty Columns | ✅ |
| Trim Spaces | ✅ |
| Auto Clean | ✅ |
| Download Excel | ✅ |
| Mobile Responsive | ✅ |

---

## Future Features

### Version 1.1

- Undo previous actions
- Multiple worksheet support
- Faster processing for large spreadsheets

### Version 1.2

- AI-powered cleaning suggestions
- Formula protection
- Data validation

### Version 2.0

- User accounts
- Cloud storage
- Team collaboration
- AI spreadsheet assistant
## Known Limitations

Current MVP limitations:

- Processes one spreadsheet at a time
- Client-side processing only
- No cloud synchronization
- No user authentication
- No collaboration features
- Optimized for small to medium spreadsheets

---
## Version History

### v1.1 (Current)

- Responsive landing page
- Responsive workspace
- Upload validation
- Excel preview
- Remove empty rows
- Remove duplicates
- Remove empty columns
- Trim spaces
- Find & Replace
- Sort data
- Split columns
- Merge columns
- Auto Clean
- Excel download
- Loading overlay
- Mobile responsive interface

### Planned v1.2

- Undo history
- Large file optimization
- Multiple worksheet support
- Formula protection

## License

MIT License
## Contributing

Contributions, suggestions, and bug reports are welcome.

Please create an Issue before submitting major changes.