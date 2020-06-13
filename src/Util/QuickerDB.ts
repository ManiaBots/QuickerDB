import * as db from "quick.db";
import chalk from "chalk";

const token = "NTkxOTQ4ODIzOTgzNjg1NjMz.XuVjIw.p1ankgLt5VG2Z0ii4MPUVY7hgPs";
// not an actual token just testing discord's supposed github scanning stuffz

class QuickerDB {
    debugMode: Boolean;
    constructor(options:any={}) {
        this.debugMode = options.debug ? true : false;
    }
    debugLog(a:String):void {
        console.log(chalk.red.bold("[QuickerDB]"), chalk.yellow(a))
    }

    add(a:String, b:Number):Number {
        this.debugLog(`Adding ${chalk.blue.bold(b)} to ${chalk.blue.bold(a)}`);
        return db.add(a, b);
    }

    remove(a:String):Boolean {
        this.debugLog(`Deleting ${chalk.blue.bold(a)} from database.`);
        return db.delete(a);
    }
    
    delete(a:String):Boolean {
        return this.remove(a);
    }

    fetch(a:String):any {
        this.debugLog(`Fetching ${chalk.blue.bold(a)} from database.`);
        return db.fetch(a);
    }

    get(a:String):any {
        return this.fetch(a);
    }
}

export = QuickerDB;