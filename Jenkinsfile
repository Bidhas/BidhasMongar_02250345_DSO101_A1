pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Bidhas/BidhasMongar_02250345_DSO101_A1.git',
                    credentialsId: 'github-creds'
            }
        }

        stage('Install') {
            steps {
                bat 'cd todo-app\\backend && npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'cd todo-app\\backend && npm run build'
            }
        }

        stage('Test') {
            steps {
                bat 'cd todo-app\\backend && npm test'
            }
            post {
                always {
                    junit 'todo-app/backend/junit.xml'
                }
            }
        }

        stage('Deploy') {
            steps {
                bat '"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe" build -t "bidhasmonga/todo-app:latest" todo-app/backend'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat '"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe" login -u "%DOCKER_USER%" -p "%DOCKER_PASS%"'
                    bat '"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe" push "bidhasmonga/todo-app:latest"'
                }
            }
        }

    }
}