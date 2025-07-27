# cs-uip-ui

This repository contains the **User Identity Platform (UIP)** user interface for Nova Softworks.

It is a [SvelteKit](https://kit.svelte.dev/) application designed for user account management and identity workflows. The app can be run locally for development or deployed using Docker and Helm (via Argo CD or another GitOps flow).

## Getting started (Local Development)

1. **Clone the repository:**

```bash
git clone https://github.com/your-org/cs-uip-ui.git
cd cs-uip-ui
```

2. **Install dependencies:**

```
npm install
```

2. **Run the development server:**

```
npm run dev -- --open
```

This starts the app locally using Vite. The development server respects environment variables listed below.

## Environment variables

| Variable                     | Required?                   | Default                 | Description                                                                                                              |
| ---------------------------- | --------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `PUBLIC_BASE_URL`            | Yes, except in offline mode |                         | Public URL where the UI and authentication server are served. Must match your ingress domain.                            |
| `PUBLIC_ENVIRONMENT`         | No                          | `development`           | Use `'offline'` to work locally without contacting remote APIs. Useful for design, mock flows, or testing display logic. |
| `PUBLIC_LOG_LEVEL`           | No                          | `info`                  | Log verbosity (`trace`, `debug`, `info`, `warn`, `error`).                                                               |
| `PRIVATE_HMAC_SALT`          | No                          | `dev-default-salt`      | Secret salt used to hash session identifiers for log correlation. Only available on the server side.                     |
| `PRIVATE_ADMIN_API_BASE_URL` | Yes                         | `http://localhost:4434` | URL of the Kratos admin URL. Only available on the server side.                                                          |

You can define these in .env files or pass them directly via your deployment mechanism (Docker, Kubernetes, etc.).

## Docker support

A production-ready Dockerfile is included. To build and run locally:

```
docker build -t csuipui .
docker run -p 3000:3000 \
  -e PUBLIC_ENVIRONMENT=offline \
  csuipui

```

## Helm support

To learn more about deploying the app, see the [Helm chart README](./charts/ui/README.md).
