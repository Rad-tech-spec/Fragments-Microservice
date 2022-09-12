# Fragments

**Arthur:** Rad Eshghi\
**Email:** Reshghi@myseneca.ca\
**Student#:** 123348195

## Starting and Debugging tools

### Using CMD or Ubunto(WSL)

- Makes sure there is no errors in a JavaScript code.

  > `npm run lint`

- Starts the server in port **localhost:8080**.

  > `node src/server.js`

- Used to execute the defined file without typing its execution command.

  > `npm start`

- Used to run the dev script defined in the project package.json file.

  > `npm run dev`

- Used to run the debugging script defined in the project launch.js file for a better debugging run the VS code debug tool at the same time.

  > `npm run debug`

- Curl is another tool to run the localhost in WSL, -s silences the usual output to CURL and jq piped pretty-prints the JSON output.

  > `curl -s localhost:8080 | jq`
