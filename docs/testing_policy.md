# Testing Policy

## Introduction

This document defines the test policies, deployment strategies, test types, and coverage expectations for the project. The goal is to ensure high-quality software through rigorous testing and continuous integration/deployment practices.

## Test Types

### Unit Tests

- Verify the isolated functioning of components and functions (Jest, Japa).
    

### Functional Tests

- Validate business features and interactions between components.
    

### Integration Tests

- Verify the integration of modules and services, especially with Cypress for end-to-end (E2E) tests on Next.js and Expo.
    

### Smoke Tests

- Quick tests to detect major regressions and validate builds.
    

## Deployment Strategy

### Continuous Development

- Continuous integration on the `develop` branch with automatic deployment to the development environment.
    

### Feature Branches

- Each new feature is developed in a dedicated branch, merged into `develop` via pull request.
    

### Production

- Manual deployment triggered by creating a tag on the `main` branch, after rigorous validation and comprehensive testing.
    

### Automation

- Use GitHub Actions to automate builds, tests, and deployments, with control over coverage thresholds and code quality.
    

## Test Coverage

- Target coverage of 80% across all code.
    
- Configure Jest with `coverageThreshold` to fail builds if coverage is insufficient.
    
- Integrate into the CI/CD pipeline to block deployments if the threshold is not met.
    
- Run tests on every commit and pull request to ensure continuous quality.