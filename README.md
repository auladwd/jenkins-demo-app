# 🚀 Jenkins CI/CD Pipeline & Zabbix Monitoring
### Module 13 Assignment — DevOps Automation & Monitoring

![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red?style=for-the-badge&logo=jenkins)
![Node.js](https://img.shields.io/badge/Node.js-App-green?style=for-the-badge&logo=node.js)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?style=for-the-badge&logo=amazon-aws)
![Zabbix](https://img.shields.io/badge/Zabbix-Monitoring-red?style=for-the-badge&logo=zabbix)

---

## 📋 Assignment Overview

This repository contains the implementation of **Module 13 Assignment**, focusing on:

- ✅ **Part 1** — Automated application deployment using **Jenkins CI/CD Pipeline**
- ✅ **Part 2** — System health monitoring using **Zabbix**

**Student:** Aulad Hossen  
**Submitted:** August 2026

---

## 📁 Project Structure

```
jenkins-demo-app/
│
├── app.js              # Simple Node.js Express application
├── test.js             # Dummy test script
├── package.json        # Node.js dependencies & scripts
├── Jenkinsfile         # Jenkins Pipeline definition (4 stages)
├── Dockerfile          # Docker container configuration
└── README.md           # Project documentation (this file)
```

---

## Part 1: Jenkins CI/CD Pipeline

### 🛠️ What Was Implemented

A complete **4-stage Jenkins Pipeline** was created to automate the deployment of a simple Node.js application:

| Stage | Description |
|-------|-------------|
| **1. Checkout** | Pulls source code from this GitHub repository |
| **2. Install Dependencies** | Runs `npm install` to install Node.js packages |
| **3. Run Tests** | Executes `test.js` — validates basic application logic |
| **4. Deploy** | Deploys the application (local/Docker container) |

### ⚙️ Jenkins Setup

- **Hosted on:** AWS EC2 Instance (Ubuntu)
- **Jenkins Version:** Latest LTS
- **Pipeline type:** Declarative Pipeline (Jenkinsfile)
- **Source Control:** GitHub (SCM integration)

### 📄 Jenkinsfile

```groovy
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
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running test suite...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'echo Deployment successful! App is running.'
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
```

### 🖥️ Jenkins Screenshots

> **Pipeline Stage View — Successful Build**

*(Screenshot: Jenkins Pipeline showing all 4 stages completed successfully)*
<img width="945" height="952" alt="jenkins CICD" src="https://github.com/user-attachments/assets/606177ed-0e09-4d79-94ce-d08ab1006239" />


> **Console Output**

*(Screenshot: Jenkins Console Output showing green build)*

---

## Part 2: Zabbix Monitoring

### 🛠️ What Was Implemented

A complete **Zabbix monitoring setup** was configured to track system health:

| Configuration | Details |
|--------------|---------|
| **Host Added** | Local/AWS EC2 machine |
| **CPU Monitoring** | Real-time CPU utilization tracking |
| **Memory Monitoring** | RAM usage monitoring |
| **Alert Trigger** | CPU > 80% → Warning alert fired |

### ⚙️ Zabbix Setup

- **Zabbix Version:** 6.4 LTS
- **Template Used:** `Linux by Zabbix agent`
- **Agent:** Zabbix Agent installed on monitored host

### 🚨 Alert Trigger Configuration

```
Trigger Name  : CPU Usage High Alert
Severity      : High
Expression    : last(/My-Local-Machine/system.cpu.util) > 80
Action        : Send notification when CPU exceeds 80%
```

### 📊 Zabbix Screenshots

> **Monitoring Dashboard**

*(Screenshot: Zabbix Dashboard showing host status, CPU & Memory graphs)*

> **Trigger Configuration**

*(Screenshot: CPU > 80% trigger setup in Zabbix)*

---

## ⚠️ Challenges Faced & Solutions

| Challenge | Root Cause | Solution |
|-----------|-----------|----------|
| Jenkins Build Failed | Used `bat` command on Linux (AWS) instead of `sh` | Changed all `bat` → `sh` in Jenkinsfile |
| `npm: command not found` | Node.js not installed on AWS instance | Installed Node.js 18.x via NodeSource |
| Git tool warning | Default Git not configured in Jenkins | Ignored (non-breaking warning) |
| Zabbix Agent not connecting | Port 10050 blocked | Opened port in AWS Security Group |

---

## 💡 Key Learnings

1. **CI/CD Concepts** — Understood how code moves automatically from GitHub → Build → Test → Deploy without manual intervention

2. **Jenkinsfile** — Learned to write Declarative Pipeline syntax with multiple stages and post-actions

3. **Linux vs Windows** — Jenkins commands differ by OS: `sh` for Linux/Mac, `bat` for Windows

4. **Infrastructure Monitoring** — Zabbix enables proactive monitoring — alerts trigger *before* system failures occur

5. **AWS EC2** — Deployed Jenkins on a real cloud server, simulating a production DevOps environment

6. **Alert Thresholds** — Configuring smart triggers (CPU > 80%) helps prevent system downtime

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/auladwd/jenkins-demo-app.git
cd jenkins-demo-app

# 2. Install dependencies
npm install

# 3. Run tests
npm test

# 4. Start the application
npm start
# App runs at: http://localhost:3000
```

### Run with Docker

```bash
# Build image
docker build -t jenkins-demo-app .

# Run container
docker run -d -p 3000:3000 jenkins-demo-app
```

---

## 📚 Technologies Used

| Technology | Purpose |
|-----------|---------|
| **Jenkins** | CI/CD Automation Server |
| **Node.js** | Application Runtime |
| **Express.js** | Web Framework |
| **GitHub** | Source Code Repository |
| **AWS EC2** | Cloud Hosting for Jenkins |
| **Zabbix** | System Monitoring |
| **Docker** | Containerization |

---

## 📞 Submission Info

- **Course:** DevOps / Cloud Computing
- **Module:** 13 — Application Deployment & Monitoring
- **GitHub Repo:** https://github.com/auladwd/jenkins-demo-app
- **Submitted by:** Aulad Hossen

---

*This project was completed as part of Module 13 Assignment on Jenkins CI/CD and Zabbix Monitoring.*
<img width="945" height="952" alt="jenkins CICD" src="https://github.com/user-attachments/assets/c5f4fa66-6820-4a18-9f49-e1fb02f7cc89" />
