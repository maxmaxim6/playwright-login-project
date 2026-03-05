pipeline {
  agent any
  options { timestamps() }

  stages {
    stage('Checkout') {
      steps { checkout scm }
    }

    stage('Install deps') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Install browsers') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Run tests') {
      steps {
        bat 'npx playwright test --reporter=junit'
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: '**/test-results/*.xml, **/junit.xml, **/results.xml'
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
    }
    failure {
      echo 'הבדיקות נכשלו!'
    }
  }
}
