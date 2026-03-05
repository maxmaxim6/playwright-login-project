pipeline {
  agent any
  options { timestamps() }

  stages {
    stage('Checkout') { steps { checkout scm } }

    stage('Install deps') { steps { bat 'npm ci' } }

    stage('Install browsers') { steps { bat 'npx playwright install' } }

    stage('Run tests') { steps { bat 'npx playwright test' } }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'test-results/results.xml'
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
    }
  }
}
