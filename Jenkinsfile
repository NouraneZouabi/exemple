pipeline {
    agent any
    stages {
//test
        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests=true'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Deploy to Tomcat') {
            steps {
                deploy adapters: [tomcat9(credentialsId: 'tomcat', path: '', url: 'http://44.204.146.145:8080')], contextPath: null, war: '**/*.war'
            }
        }
    }
}
