//introduction
- A simple calculator microservice built with Node.js and Express that provides basic arithmetic operations via a REST API

//Funtion
- Accepts HTTP requests for basic arithmetic operations
- Provides meaningful error handling
- Returns JSON-formatted responses

//Run the Microservice
- Clone the repository
- npm init -y
- npm install express
- node index.js
The server will start and run at: http://localhost:3000

//API endpoints
- add
Returns num1 + num2
- subtract
Returns num1 - num2
- multiply
Returns num1 * num2
- divide
Returns num1 / num2 (Error if num2 == 0)
- power 
Returns num1 ^ num2
- sqrt 
Returns sqrt(num1) (Error if num1 < 0)
- modulo 
Returns num1 % num2 (Error if num2 == 0)

//Error Handling
- If non-numeric values are provided, an error message is returned.
- If division by zero is attempted, an appropriate error message is returned.
- If you try to square a number less than zero, an error is returned.
- If you try to take a modulus with a number equal to zero, an error is returned.

//docker
- Install Docker
- Clone or Use an Existing Project
- Create a Dockerfile
Define the base image, install dependencies, copy the app, and set the startup command.
- Build the Docker Image
docker build -t shichengxiang/sit323-calculator .
- Create a docker-compose.yml file
Define services, ports, and dependencies for containerized deployment.
- Start the Application Using Docker Compose
docker-compose up -d
- Test the Application
- Tag and Push the Docker Image to Docker Hub
docker tag sit323-calculator shichengxiang/sit323-2025-prac5p:latest
docker push shichengxiang/sit323-2025-prac5p:latest

//Google Cloud
- This task demonstrates how to build, tag, and push a Node.js microservice to a private Google Artifact Registry using Docker.
- Authenticate Docker with Artifact Registry
gcloud auth configure-docker australia-southeast2-docker.pkg.dev
- Build the Docker Image
docker build -t sit323-calculator .
- Tag the Docker Image
docker tag sit323-calculator australia-southeast2-docker.pkg.dev/sit323-25t1-xiang-5c638ea/sit323-artifact/sit323-calculator
- Push the Image to Artifact Registry
docker push australia-southeast2-docker.pkg.dev/sit323-25t1-xiang-5c638ea/sit323-artifact/sit323-calculator
- Run the Microservice from the Cloud Image
docker run -p 3000:3000 australia-southeast2-docker.pkg.dev/sit323-25t1-xiang-5c638ea/sit323-artifact/sit323-calculator
- Open browser and visit:
http://localhost:3000

# SIT323 Task 6.1P - Kubernetes Deployment

This task demonstrates how to deploy a containerized Node.js calculator microservice onto a Kubernetes cluster using a publicly hosted Docker image.

---

## Project Information

- **Docker Image**: `shichengxiang/sit323-calculator:latest`
- **Service Type**: NodePort
- **Exposed Port**: `32658`
- **App Port**: `3000`
- **Deployed with**: Docker Desktop Kubernetes

---

## Files Included

- `Dockerfile` – Docker image definition  
- `index.js` – Node.js microservice  
- `package.json` – Application dependencies  
- `deployment.yaml` – Kubernetes deployment definition  
- `service.yaml` – Kubernetes service definition  
- `README.md` – Documentation

---

## How to Deploy the Microservice

### 1. Start Kubernetes (Docker Desktop with Kubernetes enabled)

Make sure Docker Desktop is running and Kubernetes is enabled in its settings.

### 2. Apply the Deployment and Service YAML files

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml


//Author
Shicheng Xiang