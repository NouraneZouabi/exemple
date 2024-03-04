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
                deploy adapters: [tomcat9(credentialsId: 'tomcat', path: '', url: 'http://15.237.113.156:8080')], contextPath: null, war: '**/*.war'
            }
        }
    }
}
