**Title: Pushing Docker Image to the Registry (Docker Hub) and Understanding the Dockerfile Structure**

Aim

To understand the role of a container registry in storing and sharing Docker images, and to learn how to build, tag, and push images to Docker Hub using a Dockerfile.

Objectives

- To understand the function of a container registry (e.g., Docker Hub) in modern application deployment.
- To identify and verify locally available Docker images using the docker images command.
- To learn the correct format for tagging a Docker image with a Docker Hub username.
- To push a tagged image to a remote registry using the docker push command.
- To verify the successful upload of an image via Docker Hub’s web interface.
- To understand the structure and purpose of a Dockerfile, including key instructions such as FROM, WORKDIR, COPY, RUN, EXPOSE, and CMD.
- To analyze how a Dockerfile automates the creation of reproducible, portable container images.

**Procedure**

Step 1: Understand the Registry

A registry is a centralized and secure storage system used to manage container images, software binaries, and other artifacts. Docker Hub is the most common public registry used for storing and sharing Docker images.

Step 2: Understand the Process Flow

The process usually follows this order:

Local Image on your device → Tag with username → Push to Docker Hub → Verify on the registry

This means you first create or already have a Docker image on your computer, then rename it with your Docker Hub username, push it to the registry, and finally confirm that it was uploaded successfully.

Step 3: Check the Existing Images

Before pushing anything, confirm that the image already exists on your system by running:

docker images

This command lists all the Docker images available locally.
![alt text](<Screenshots/image copy 7.png>)

Step 4: Tag the Image

Tagging gives the image a proper name that includes your Docker Hub username. The general format is:

docker build -t username/imagename

Here, username is your Docker Hub account name, and imagename is the name you want to give to the image.
![alt text](<Screenshots/image copy 8.png>)
If the image is already built, you can also tag it using a similar naming format before pushing it.

Step 5: Push the Image
![alt text](<Screenshots/image copy 9.png>)
After tagging, push the image to Docker Hub using:

docker push username/imagename:version

The version number is important because it helps identify different releases of the image. If no version is given, Docker often uses the default tag latest.

Step 6: Verify the Upload

After pushing, log in to Docker Hub in your browser and check whether the image appears in your repository. This confirms that the image was successfully uploaded to the registry.
![alt text](<Screenshots/image copy 10.png>)
Step 7: Understand the Dockerfile Structure

A Dockerfile usually follows a simple 5-step skeleton:

1\. FROM

FROM <base image>;

This defines the base image. A base image is the starting point of a Docker image and is also known as the foundation layer or prebuilt image.

Examples:

python:3.10 for Python applications.

node:18 for Node.js applications.

nginx for web server applications.

ubuntu or alpine for general Linux-based images.

2\. WORKDIR

WORKDIR /app

This sets the working directory inside the container. It tells Docker where to perform the following commands.

3\. COPY

COPY . .

This transfers files from the local machine into the container. The first “.” means the current folder on the host machine, and the second “.” means the current folder inside the container.

4\. RUN

RUN npm install

This installs dependencies during the image build process. It is used for execution-time or build-time setup.

5\. EXPOSE

EXPOSE 8080

This documents the port the application uses for network communication.

6\. CMD

CMD \["node", "server.js"\]

This gives the command that runs when the container starts.

Step 8: Example Dockerfile Explanation

For example:

FROM python:3.10-slim

WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 5000

CMD \["python", "app.py"\]

This means:

Start from an existing Python image that already has Python installed.

Use /app as the working directory.

Copy all files into the container.

Install Flask while building the image.

Expose port 5000.

Run app.py when the container starts.

Step 9: Task Example

For the given task:

FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD \["node", "server.js"\]

This Dockerfile is for a Node.js application. It starts from the Node 18 base image, sets /app as the working directory, copies the project files into the image, installs dependencies with npm install, exposes port 8080, and runs the application using server.js.

**Conclusion**

In this practical, I learned how to understand the structure of a Dockerfile and how Docker images are prepared for uploading to Docker Hub. I also understood the importance of tagging images correctly before pushing them to a registry. This process helps in sharing Docker images easily and managing them in a secure and organized way.
