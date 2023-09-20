# check-git

[![npm version](https://badge.fury.io/js/check-git.svg)](https://badge.fury.io/js/check-git.svg)
![npm](https://img.shields.io/npm/dm/check-git.svg)

> Determines if a git repository exists within a directory

## Getting Started

### Prerequisites

For this project you need [__Node__](https://nodejs.org/en/) installed on your machine with [__Npm__](https://www.npmjs.com/) or [__Yarn__](https://yarnpkg.com)

### Installing

Open a terminal and type, inside the directory:
```bash
npm i check-git
# OR
yarn add check-git
```

### Usage

```javascript
if(checkGit(process.cwd())) {
  console.log('Yes dude, there is a git repository')
} else {
  console.log('Sorry dude, there is no git repository is this folder')
}
```

## Built with ❤️ using:

* [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.

## Contributing

Pull Requests for adding features ⇄ and ★ are welcome 😎