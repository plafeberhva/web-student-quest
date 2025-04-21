# Development Agreements

This document contains important agreements and conventions for the Web Student Quest project.

## Server Ports

- Frontend development server (Vite) runs on port 3000
- If port 3000 is in use, the server will automatically try the next available port

## File Structure

- `/src` - Contains all source code files
  - `index.ts` - Main TypeScript entry point
- `/docs` - Project documentation
- `/data` - Game data files
  - `/csv/initial` - Initial state CSV files
  - `/csv/current` - Current state CSV files (used during gameplay)

## Git Conventions

### Ignored Files
- `.cursor/` - Cursor IDE files
- `package-lock.json` - NPM lock file
- `node_modules/` - Dependencies
- `.env` - Environment variables (use .env.example as template)

### Branching
- Feature branches should be named `feature/[description]`
- Each issue should have its own branch

## Environment Variables
- `VITE_APP_NAME` - Application name
- `VITE_APP_VERSION` - Application version

## Development Workflow
1. Create a feature branch for each issue
2. Update documentation when making architectural decisions
3. Keep the main branch deployable at all times

## Server Management
- When starting servers, always check if the port is already in use
- Use `npm run dev` to start the development server
- The development server will automatically open the browser 