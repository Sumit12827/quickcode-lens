# RepoLens AI

RepoLens AI is a web app that helps you quickly understand any public GitHub repository.
It analyzes repository structure, identifies key modules and technologies, and generates AI-powered summaries.

## What You Get

- Repository overview in plain language
- Detected tech stack (frontend, backend, testing, etc.)
- Architecture and data-flow summary
- Important modules and critical files
- AI suggestions to improve project health
- File-level AI explanations from the built-in file explorer

## How It Works

1. Enter a public GitHub repository (`owner/repo` or full URL)
2. RepoLens fetches metadata and repository tree from GitHub
3. Key files are sent to Gemini for analysis
4. Results are shown in an interactive dashboard

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Vercel Serverless Functions (`/api`)
- Google Gemini API

## Prerequisites

- Node.js 18+ and npm
- A Google Gemini API key

## Local Setup

1. Clone the repository:

   ```bash
   git clone <YOUR_GIT_URL>
   cd quickcode-lens
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` in the project root:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   GITHUB_TOKEN=your_github_personal_access_token_here
   ```

   - `GEMINI_API_KEY` is required
   - `GITHUB_TOKEN` is optional but recommended to reduce GitHub API rate-limit issues

4. Start the app:

   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — Start local development server
- `npm run build` — Create production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm run test` — Run tests once with Vitest

## Deployment (Vercel)

This repository is ready for Vercel deployment.

1. Push your code to GitHub
2. Import the repository into Vercel
3. Set environment variables in Vercel project settings:
   - `GEMINI_API_KEY` (required)
   - `GITHUB_TOKEN` (optional)
4. Deploy

`vercel.json` and the `api/` directory are already configured for SPA routing and serverless API endpoints.

## Notes

- This app is intended for **public** GitHub repositories
- If analysis fails unexpectedly, verify your API keys and rate limits first
