# Happycasa - GEMINI.md

## Project Overview
Happycasa is a modern, responsive landing page project. The goal is to create a high-performance, visually appealing website for the company, ensuring a seamless experience across all devices.

### Architecture & Tech Stack
- **Frontend**:
    - **Framework**: React 19 (Vite)
    - **Styling**: Tailwind CSS v4
    - **Routing**: React Router v7
    - **Linting**: ESLint
- **Backend (Planned)**:
    - **Framework**: FastAPI
    - **Database**: PostgreSQL
    - *Note: Backend implementation is currently pending.*

## Building and Running

### Frontend
To work on the frontend, navigate to the `frontend` directory:

```bash
cd frontend
```

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint for code quality |
| `npm run preview` | Preview the production build |

### Backend
- **TODO**: Define build and run commands once the backend implementation begins.

## Development Conventions

### Folder Structure (Frontend)
- `src/`: Root source folder.
    - `components/`: Reusable components (e.g., `Header.jsx`, `Footer.jsx`).
    - `pages/`: Page-level components (e.g., `Home.jsx`).
    - `assets/`: Static assets like images and logos.
    - `App.jsx`: Main application component and routing configuration.
    - `main.jsx`: Application entry point.

### Coding Standards
- **Style**: Use functional components with hooks (React 19+).
- **Styling**: Prefer Tailwind CSS utility classes for all styling.
- **Imports**: Use ES Modules (`import`/`export`).
- **Guidelines**: Refer to `.github/instructions/frontend/react.instructions.md` for specific landing page goals and `.github/instructions/backend/fastapi.instructions.md` for specific backend instructions to follow

## Project Guidelines
- **Responsive Design**: All components must be mobile-first and responsive.
- **Performance**: Maintain high scores on performance metrics (Vite + React 19 optimized).
- **Consistency**: Follow the architectural patterns established in the `src/` directory.
