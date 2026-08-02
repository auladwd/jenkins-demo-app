pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running test suite...'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'echo Deployment successful! App is running.'
                // For Docker deployment:
                // bat 'docker build -t jenkins-demo-app .'
                // bat 'docker run -d -p 3000:3000 jenkins-demo-app'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs.'
        }
    }
}
