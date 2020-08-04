const db = require("quick.db"),
  chalk = require("chalk");

class QuickerDB {
  constructor(options) {
    this.version = require("../../package.json").version;
    this.debugMode = options.debug ? true : false;
  }

  subtract(a, b) {
    this.debugLog(`Subtracting ${chalk.blue.bold(b)} from ${chalk.blue.bold(a)}`);
    return db.subtract(a, b);
  }
  
  debugLog(a) {
    if (!this.debugMode) return;
    else console.log(chalk.red.bold("[QuickerDB]"), chalk.yellow(a));
  }

  set(a, b, c) {
    if (!c)
      this.debugLog(
        `Setting the value of ${chalk.blue.bold(a)} as${chalk.blue.bold(b)}.`
      );
    db.set(a, b);
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
      db.add(b[0], b[1])
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

  all() {
    this.debugLog("Fetching the entire database.");
    return db.all();
  }

  table(a, b) {
    this.debugLog(
      `Creating a table with the name ${chalk.blue.bold(a)}${
        b ? ` with the following options: ${chalk.blue.bold(b)}.` : "."
      }`
    );
    return db.table(a, b || null);
  }
}

module.exports = QuickerDB;
