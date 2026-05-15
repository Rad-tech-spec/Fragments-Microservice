# Maintenance and Contribution Guide

## Project Status
**Last Updated:** May 15, 2026
**Status:** Active & Maintained

This document outlines the maintenance practices and contribution guidelines for the Fragments Microservice.

## About This Project

The Fragments Microservice is a production-grade cloud-based API service that enables storage and retrieval of text and image fragments. It's designed for scalability and integrates seamlessly with AWS services (S3 for storage, DynamoDB for metadata).

### Key Features
- RESTful API for fragment management
- Multi-format support (text, JSON, Markdown, HTML, images)
- Cloud-native architecture with AWS S3 and DynamoDB integration
- Comprehensive test coverage (unit and integration tests)
- JWT-based authentication
- Structured logging with Pino
- Docker containerization support

## Active Maintenance

This project is actively maintained with:
- Regular security updates and dependency management
- Bug fixes and performance improvements
- CI/CD pipeline (GitHub Actions)
- Automated testing and code quality checks
- Integration tests using Hurl

## Development Workflow

### Prerequisites
- Node.js 14+
- AWS CLI configured (for S3/DynamoDB operations)
- Docker and Docker Compose (optional, for local development)

### Running Tests
```bash
npm test                    # Run unit tests
npm run test:watch        # Run tests in watch mode
npm run coverage          # Generate coverage report
npm run test:integration  # Run integration tests
```

### Code Quality
```bash
npm run lint             # Run ESLint
npm run prettier        # Format code
```

### Development Server
```bash
npm run dev             # Start development server with hot reload
npm run debug           # Debug mode with inspector
```

## Architecture

### Technology Stack
- **Framework:** Express.js
- **Runtime:** Node.js
- **Database:** AWS DynamoDB
- **File Storage:** AWS S3
- **Authentication:** JWT (via aws-jwt-verify)
- **Testing:** Jest + Supertest + Hurl
- **Code Quality:** ESLint + Prettier
- **Logging:** Pino

### Project Structure
```
src/
├── index.js           # Application entry point
├── server.js          # Express server configuration
├── routes/           # API route handlers
├── middleware/       # Custom middleware
├── models/          # Data models
└── services/        # Business logic services

tests/
├── unit/           # Unit tests
└── integration/   # Integration tests (Hurl)
```

## Contributing

Contributions are welcome! Please ensure:
1. Code passes all linting checks (`npm run lint`)
2. Tests pass (`npm test`)
3. Integration tests pass (`npm run test:integration`)
4. Code follows the existing style (Prettier formatted)
5. New features include appropriate tests

## Performance Considerations

- API responses are optimized for cloud environments
- DynamoDB query patterns are optimized for scalability
- S3 operations use efficient streaming for large files
- Compression middleware enabled for response optimization
- Request/response logging configured with structured logs

## Security

- Express Helmet integration for HTTP headers security
- JWT authentication for all protected endpoints
- CORS properly configured
- Environment-based configuration for sensitive data

## Dependencies

All dependencies are pinned to specific versions for reproducibility:
- Core: Express, AWS SDK, Helmet, CORS
- Logging: Pino with pretty printing
- Testing: Jest, Supertest, Hurl
- Development: ESLint, Prettier, Nodemon

Regular dependency updates are performed to maintain security and compatibility.

## Support

For issues, questions, or contributions:
- Check existing issues on GitHub
- Review the main README.md for getting started
- Ensure your environment meets the prerequisites

---

**Maintained by:** Rad Eshghi  
**Repository:** https://github.com/Rad-tech-spec/Fragments-Microservice
