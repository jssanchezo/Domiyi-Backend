pipeline {
 agent any

 tools {nodejs "node"}

 stages {
   stage('Install') {
     steps {
       sh 'npm install'
     }
   }
stage('Test') {
     steps {
       sh 'node ./node_modules/mocha/bin/mocha --exit test/test.js'
     }
   }
 }
}
