**Title: Introduction and Installation of Docker**

Aim:

To learn and apply containerization in development, deployment, and execution of application within the containers.

Objectives:

- To understand the concept of docker and its use in the modern application development.

- To follow step-by-step guide for installing Docker on the host.

- To review different components of docker which include image, container, Docker Engine.

- To use few fundamental commands for container creation and managing.

- To analyze the advantage of using Docker to deploy the application and maintain environment consistency.

Theory:

Docker is containerization platform that bundles an application along with the resources required by it in a lightweight and portable container. This container can be used across any system, irrespective of the platform. Docker containers execute identically in every environment (development, testing and production).

Container differ from Virtual Machine as they share the same OS kernel of the host rather than using the entire OS. They use less memory, disk space and processing power.Docker uses client-server architecture where client communicates with Docker Daemon (aka Docker Engine) which builds, runs and manages the containers.

Key Concepts:

Docker Image: A read-only template used to create containers.

Docker Containers: A running instance of an image.

Dockerfile: A script which consists of commands for building Docker Image.

Docker Hub: Cloud service for storing and sharing Docker Images.

Docker is commonly used for developing Micro Services, DevOps, Cloud computing and CI/CD infrastructure.

**Procedure**

**Step 1: Download docker**

Head over to the official docker website: https://www.docker.com

Download docker desktop based on the OS you are using (windows or mac)

**Step 2: Install docker**

Open up the installed file.

Follow the steps that show up on your screen. Make sure to enable some features like WSL 2 if prompted (for windows users)

**Step 3: Run docker**

Open docker desktop. Wait until the Docker Engine is running.

**Step 4: Check if its installed**

Open the command prompt or terminal, and type.

docker --version

**Step 5: Test out Docker**

docker run hello-world

This command pulls an image and runs it inside a container.

**Step 6: Pull an image**

docker pull nginx

**Step 7: Run a container**

docker run -d -p 8080:80 nginx

After this, open a web browser and go to http://localhost:8080

**Step 8: Check all running containers**

docker ps

**Step 9: Stop a container**

docker stop <container_id>;

**Purpose of Docker**

The aim of docker is to provide an environment where applications can be developed, deployed and run in a containerized manner, so that they work reliably regardless of the environment it is being run in because it ships the code with all the dependencies, and libraries in a container image.

This solves issues that might arise due to different environments, provides scalability, faster development cycle and allows more use of containers in order to enhance devops practices, support for CI/CD systems, microservice architectures, etc. Also, it helps in efficient use of the system resources, because docker uses lighter containers than full virtual machines.

**Conclusion**

In this practical, Docker was successfully installed and tested. The experiment demonstrated how Docker simplifies application deployment by using containers. It ensures consistency across different environments and improves efficiency in software development. Docker’s lightweight and scalable nature makes it an essential tool in modern DevOps practices.