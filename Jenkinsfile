pipeline {
  agent {
    docker {
      image 'mongo'
    }

  }
  stages {
    stage('Print test') {
      steps {
        echo 'test'
      }
    }

    stage('Build app') {
      steps {
        sh 'docker compose up -d --build'
      }
    }

  }
}