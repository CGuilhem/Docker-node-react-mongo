pipeline {
  agent any
  stages {
    stage('Print test') {
      steps {
        echo 'test'
      }
    }

    stage('Build DB') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }

  }
}