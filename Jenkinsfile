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
                script {
                    docker.build('bidhasmonga/todo-app:latest', 'todo-app/backend')
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-creds') {
                        docker.image('bidhasmonga/todo-app:latest').push()
                    }
                }
            }
        }
    }
}