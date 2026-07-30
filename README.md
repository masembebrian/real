# RealEstate.AI - Advanced Real-Time Real Estate System

A modern, high-performance real estate platform built with FastAPI, Next.js, and WebSockets.

## Key Features
- **Real-Time Market Data:** Live price updates and viewer tracking via WebSockets.
- **Modern UI/UX:** Clean, glassmorphism-inspired design using Tailwind CSS and Framer Motion.
- **Scalable Architecture:** FastAPI backend with PostgreSQL and Redis.
- **AI-Ready:** Designed to integrate ML models for property valuation.

## Tech Stack
- **Frontend:** Next.js 13+, Tailwind CSS, Lucide React
- **Backend:** FastAPI (Python), SQLAlchemy, WebSockets
- **Infrastructure:** Docker, Redis, PostgreSQL

## Getting Started

### Prerequisites
- Docker and Docker Compose

### Running the System
```bash
docker-compose up --build
```
The frontend will be available at `http://localhost:3000` and the API at `http://localhost:8000`.

## Project Structure
- `backend/`: FastAPI application and database models.
- `frontend/`: Next.js application with React components.
- `docker-compose.yml`: Orchestration for all services.
