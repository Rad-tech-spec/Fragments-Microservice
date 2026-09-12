# Fragments Microservice

A scalable cloud-based microservice for managing and processing text and image fragments for an automotive parts manufacturing company.

## Overview

The Fragments Microservice is a Node.js-based backend service designed to store, retrieve, and manage small fragments of text and images across a distributed system. This service supports multiple data formats and seamlessly integrates with existing enterprise systems.

### Key Capabilities

- **Multi-Format Support**: Store and retrieve text fragments in plain text, CSV, JSON, Markdown, and HTML formats
- **Image Management**: Securely store and manage image fragments from automated quality control systems
- **Scalable Architecture**: Built to handle high-volume requests from IoT devices and mobile applications
- **Audit Trail**: Comprehensive logging for compliance and audit purposes
- **Enterprise Integration**: REST API designed for seamless integration with existing microservices

### Use Cases

- **IoT Manufacturing Reports**: IoT devices on the manufacturing floor produce various text reports (plain text, CSV, JSON) that need secure storage and retrieval
- **Mobile Applications**: Factory workers use mobile apps to create status updates and reports in multiple formats (JSON, Markdown, Plain Text, HTML)
- **Quality Assurance**: Automated assembly line cameras capture images of damaged parts for audit and analysis
- **System Integration**: Connects with other microservices in the enterprise ecosystem

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Running the Server

```bash
# Start the server (runs on localhost:8080)
npm start

# Or run with development auto-reload
npm run dev

# Or run with debugging enabled (use with VS Code debugger)
npm run debug
```

### Testing & Validation

```bash
# Run linter to check code quality
npm run lint

# Format code with prettier
npm run format

# Direct server start
node src/server.js

# Test with curl (requires jq for JSON formatting)
curl -s localhost:8080 | jq
```

## Architecture

### Technology Stack

| Component | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Language | JavaScript (85.9%) |
| Testing | Hurl (9.4%) |
| Scripting | Shell (2.4%) |
| Deployment | Docker (2.3%) |

### Key Dependencies

| Package | Purpose |
|---------|---------|
| **express** | Web application framework for Node.js |
| **helmet** | Security middleware (HTTP headers) |
| **compression** | Response compression middleware |
| **pino** | Structured logging |
| **nodemon** | Development server auto-reload |
| **stoppable** | Graceful server shutdown |
| **ESLint** | Code quality analysis |
| **prettier** | Code formatting |
| **npm-intellisense** | npm module autocomplete (IDE extension) |

## Development

### Code Quality

```bash
# Check for linting errors
npm run lint

# Format code automatically
npm run prettier
```

### Debugging

VS Code debugging is supported through the included launch configuration:

```bash
npm run debug
```

Then attach the VS Code debugger to begin debugging.

## API Documentation

The Fragments Microservice provides a REST API for managing fragment resources. Detailed API documentation is available in the repository.

## Related Projects

- [Fragments UI](https://github.com/Rad-tech-spec/fragments-ui) - Frontend application for the Fragments Microservice

## Contributing

For contribution guidelines and standards, please refer to the project documentation.

## Author

**Rad Eshghi**

## License

Please see the LICENSE file for licensing information.
