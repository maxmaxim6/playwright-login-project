pipeline {
  agent any

  options { timestamps() }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install deps') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Install browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run tests') {
      steps {
        // ריצה + יצירת דוח JUnit ש-Jenkins יודע להציג
        sh 'npx playwright test --reporter=junit'
      }
    }
  }

  post {
    always {
      // תוצאות טסטים (XML). לפעמים זה נשמר תחת test-results/
      junit allowEmptyResults: true, testResults: '**/test-results/*.xml, **/junit.xml, **/results.xml'

      // שמירת ארטיפקטים: דוח HTML של Playwright + test-results (כולל traces/screenshots אם קיימים)
      archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
    }
    failure {
      echo 'הבדיקות נכשלו!'
    }
  }
}