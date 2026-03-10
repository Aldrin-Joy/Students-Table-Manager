# Students Table Manager

A React.js project for managing a students table. This project is frontend-only, using React state or local JSON for CRUD operations. Key features include a student table, add/edit/delete functionality, simulated loading, Excel download, and filtering, all with a clean UI and responsive layout.

## Features

- **Student Table**: View a list of students.
- **CRUD Operations**: Add, Edit, and Delete students.
- **Filtering**: Easily filter and search through the student records.
- **Excel Download**: Export the student table to an Excel file.
- **Responsive UI**: Clean and responsive layout for various screen sizes.
- **State Management**: Uses React state for fast and interactive local data management.

## Tech Stack

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [XLSX](https://www.npmjs.com/package/xlsx) - For Excel file generation

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory:

   ```bash
   cd "Students Table"
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server, usually at `http://localhost:5173`. You can open this URL in your browser to view the application.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled static files, which can be deployed to static hosting services like Vercel, Netlify, or GitHub Pages.

## Previewing Build

To preview the production build locally, run:

```bash
npm run preview
```
