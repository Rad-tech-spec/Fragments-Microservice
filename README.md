# Details
We were asked to develop a new cloud-based microservice for a fictional Canadian company. This company specializes in producing automotive parts and has been working hard for the past three years to connect, digitize, and automate all of its internal systems.

As the new system has been built, the company has identified a missing capability: many sub-systems need to be able to work with small fragments of text or images. These are smaller than a traditional "document" and use a large number of different formats. For example:

- IoT devices on the manufacturing floor produce a variety of reports (text) that need to be stored and retrieved. Some use plain text, others CSV files, and others JSON. 
- Factory workers use a variety of existing mobile apps to write short status updates and reports, which need to be saved as JSON, Markdown, plain Text, and sometimes HTML.
- Automated cameras on assembly lines take regular images of damaged parts, which need to be stored for audit purposes.

The company invested in a highly scalable service for working with these so-called fragments of text and images. This service needs to connect seamlessly with the rest of the existing systems (e.g., use existing authorization, and work over HTTP). It also needs to be deployed to AWS, which is the cloud provider used for the rest of the company's systems.

## Starting and Debugging tools.

### Using CMD or Ubunto(WSL).

- Makes sure there are no errors in a JavaScript code.

  > `npm run lint`

- Starts the server in port **localhost:8080**.

  > `node src/server.js`

- Used to execute the defined file without typing its execution command.

  > `npm start`

- Used to run the dev script defined in the project package.json file.

  > `npm run dev`

- Used to run the debugging script defined in the project launch.js file for a better debugging run the VS code debug tool at the same time.

  > `npm run debug`

- `Curl` is another tool to run the localhost in WSL, `-s` silences the usual output to CURL and `jq` piped pretty-prints the JSON output.

  > `curl -s localhost:8080 | jq`

## List of installed and in-use packages.

1. **ESLint** - Code analysis tool.
2. **prettier** - Code formatter.
3. **express** - Back-end application framework for Node.js.
4. **npm** - Package manager for JS.
5. **npm intellisense** - Autocomplete npm modules.
6. **pino** - Used for structure logging.
7. **helmet** - Secures express apps by setting various HTTP headers.
8. **compression** - Returns the compression middleware.
9. **stoppable** - Allows the server to exist gracefully.
10. **nodemon** - Automatically reloads the server.


## Fragments-UI 
https://github.com/Rad-tech-spec/fragments-ui

**Arthur:** Rad Eshghi

