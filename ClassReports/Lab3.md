**Title: Introduction to Jenkins Installation and Configuration.**

Aim:

To get to know and utilize Jenkins for the process automation of software applications which involve build, test, deployment by using the CI/CD framework.

Objectives:

- To know what Jenkins is and what CI/CD is.
- To set up and install Jenkins on my own machine.
- To configure and set up an Administrator in Jenkins.
- To get familiar with Jenkins dashboard.

Theory:

Jenkins is an open-source automation server used for CI/CD. Developers can use Jenkins to automate software development processes such as build, test, and deployment of an application.

The working of Jenkins is quite simple, it monitors the source control system (e.g. Gits). When the code in the version control system is updated, Jenkins automatically triggers the build and test job.

The various services Jenkins is capable of interacting with include: DockerTools for building the software e.g. Maven, GradleTesting servicesIntroduction: Jenkins is a popular open-source automation tool that is integral to modern software development environments, particularly in the implementation of Continuous Integration (CI) and Continuous Delivery (CD) pipelines. It enables developers to automate a wide array of routine development tasks, including the building, testing, and deployment of software applications, which significantly enhances efficiency and reduces the likelihood of human errors.

Traditionally, the manual process of integrating code changes and executing tests can be time-consuming and prone to errors. Jenkins addresses this challenge by automatically detecting code modifications in version control systems such as Git and triggering predefined workflows that include compilation, testing, and deployment stages.

Jenkins provides a web-based dashboard interface and boasts an extensive ecosystem of plugins, which allow for seamless integration with a diverse range of tools and technologies, such as Docker. This adaptability makes Jenkins a powerful and scalable solution for automating the entire software development lifecycle.

Procedure:

Step 1: Run the Jenkins Docker image: docker run jenkins/jenkins:latest

Step 2: List the running containers: docker ps

Step 3: List all the containers (including stopped ones): docker ps -a

Step 4: Run a Jenkins container in detached mode using the sleep command: docker run -d jenkins/jenkins sleep 200

Step 5: Inspect the container to get the IP Address and Port Number: docker inspect <container_id>;

Step 6: Copy the IP address and the port number into the browser.

(Note: Make sure to stop the current container for running Jenkins on port 8080.)

Step7: Run the Jenkins container using the 8080 port: docker run -p 8080:8080 jenkins/jenkins:latest

Step 8: Then copy the password obtained from your running container into the browser opened earlier.

**Conclusion**

In this experiment, Jenkins was installed and configured with the use of docker. This experiment proved the importance of Jenkins in software development automation that is continuous integration, continuous delivery. Build, Test and Deploy phase of the development became smooth.

It gave the insight to the dashboard of Jenkins and administrator configurations. Overall, Jenkins is the vital part of modern Devops that enhances reliability and efficiency and time-saving with constant consistency.
