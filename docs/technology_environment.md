# Technology Environment Guide

## Introduction

This guide describes the technological environment of the project, including the main technologies used, development and production environments, and specific configurations.

## Main Technologies

| Technology  | Version | Description                                   |
| ----------- | ------- | --------------------------------------------- |
| Next.js     | 15.3.5  | React framework for web application           |
| Adonis.js   | 6.18.0  | Node.js framework for backend API             |
| Expo        | 53.0.20 | React Native framework for mobile application |
| Node.js     | 24.4.0  | JavaScript runtime environment                |
| Yarn / PNPM | Latest  | Dependency manager and workspaces             |
| Jest        | Latest  | Unit testing framework                        |
| Cypress     | Latest  | Integration and E2E testing framework         |
| Japa        | Latest  | Testing framework for Adonis.js               |

## Development Environment

- **DevContainer**: We will use a DevContainer to ensure a consistent development environment across all team members. This approach leverages Docker to create a pre-configured development environment that includes all necessary tools, dependencies, and configurations. Using a DevContainer helps to:
    
    - **Standardize the environment**: Ensures that all developers are working with the same setup, reducing "works on my machine" issues.
        
    - **Simplify onboarding**: New team members can quickly set up their development environment without manually installing and configuring each tool.
        
    - **Isolate dependencies**: Keeps project dependencies separate from the host machine, avoiding conflicts with other projects.
        
    - **Improve security**: Isolates the development environment from the host machine, reducing the risk of security vulnerabilities.
        
- **IDE**: Visual Studio Code with dedicated extensions (AdonisJS, Edge, Japa).
    
- **Tools**: ESLint, Prettier for code quality.
    
- **Operating System**: Linux / macOS / Windows according to preferences.
    
- **Configuration of local environments**: To mimic production (environment variables, specific configurations).
## Production Environment

- Epitech servers with fixed IPs and dedicated hosts.
    
- Isolated virtual machines for development and production.
    
- Automation of deployments via Github action & ssh connection.
    
- Continuous monitoring and configuration management to ensure stability and security.