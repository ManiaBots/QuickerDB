const db = require("quick.db"),
  chalk = require("chalk");

class QuickerDB {
  constructor(options) {
    this.debugMode = options.debug ? true : false;
  }

  debugLog(a) {
    if (!this.debugMode) return;
    else console.log(chalk.red.bold("[QuickerDB]"), chalk.yellow(a));
  }

  add(a, b) {
    this.debugLog(`Adding ${chalk.blue.bold(b)} to ${chalk.blue.bold(a)}`);
    return db.add(a, b);
  }

  multiAdd(a) {
    a.forEach((b) => {
      this.debugLog(
        `Adding ${chalk.blue.bold(b[1])} to ${chalk.blue.bold(b[0])}`
      );
    });
  }

  remove(a) {
    this.debugLog(`Deleting ${chalk.blue.bold(a)} from database.`);
    return db.delete(a);
  }

  delete(a) {
    return this.remove(a);
  }

  fetch(a, log) {
    if (!log) this.debugLog(`Fetching ${chalk.blue.bold(a)} from database.`);
    return db.fetch(a);
  }

  get(a) {
    return this.fetch(a);
  }
  push(a, b) {
    this.debugLog(`Pushing ${chalk.blue.bold(b)} to ${chalk.blue.bold(a)}.`);
    return db.push(a, b);
  }
}

module.exports = QuickerDB;
