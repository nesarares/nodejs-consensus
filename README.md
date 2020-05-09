# NodeJS Consensus

University project - Consensus algorithm in Fail-Noisy model implemented in NodeJS using Protobuf

## Building the project

- Make sure you have NodeJS version >= 12.x installed

```sh
# Install dependencies
npm install

# Build the app
npm run build
```

## Running the app

- For development:

```sh
npm run dev
```

- For release:

```sh
npm start <port1> <port2> ...
# or
node dist/src/index.js <port1> <port2> ...
```