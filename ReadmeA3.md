# Assignment 3 - CI/CD with GitHub Actions
**DSO101 | Bidhas Mongar | 02250345**

## Overview
Configured a GitHub Actions workflow to automatically build Docker images for both frontend and backend, push them to DockerHub, and deploy them on Render.com on every push to the main branch.

## Tools Used
- GitHub Actions (CI/CD automation)
- Docker & DockerHub (containerization & registry)
- Render.com (cloud deployment)
- Node.js & Express (backend)
- PostgreSQL (database)

## Steps Taken
1. Created `.github/workflows/deploy.yml` with 4 stages:
   - Checkout code
   - Login to DockerHub
   - Build & push backend and frontend images
   - Trigger Render deployment via webhook
2. Added 3 GitHub Secrets: `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN`, `RENDER_DEPLOY_HOOK`
3. Pushed code to main branch to trigger the pipeline
4. Created a PostgreSQL database on Render and connected it to the backend
5. Updated frontend image on Render to use the latest build

## Screenshots

### GitHub Actions - Successful Workflow
![GitHub Actions Success](Screenshots/image%20copy%202.png)

### DockerHub - Image Pushed
![DockerHub Image](Screenshots/image%20copy%203.png)

### Render.com - Live Deployment
![Render Deployment](Screenshots/image%20copy%204.png)

## Challenges Faced

### 1. GitHub Push Blocked - Exposed Secret
While committing files, a file called `Docker Acess-Token.txt` containing the DockerHub token was accidentally committed. GitHub's push protection blocked the push. This was resolved by removing the file from git history using `git rm --cached` and `git commit --amend`, then regenerating a new DockerHub token and updating the GitHub Secret.

### 2. Missing PostgreSQL Database
After deployment, the backend showed `Error creating table: Connection terminated unexpectedly`. This was because no PostgreSQL database existed on Render. A new free PostgreSQL instance was created on Render and the backend environment variables (`DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`) were updated accordingly.

### 3. Frontend Serving Old Image
The frontend was still using the old Docker image from Assignment 1 (`bidhasmonga/fe-todo:02250345`). The `deploy.yml` was updated to also build and push the frontend image, and Render was updated to pull `bidhasmonga/fe-todo:latest`.

## Learning Outcomes
- How to automate full CI/CD pipelines using GitHub Actions
- How to securely store credentials using GitHub Secrets
- How to trigger external deployments via webhooks
- Importance of never committing secrets to version control
- How to connect a managed PostgreSQL database on Render

## Live Deployment
 https://fe-todo-02250345.onrender.com
