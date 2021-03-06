//Command.js
//--------------------------------------------------
//Copyright 2020 Pascâl Hartmann
//See LICENSE File
//--------------------------------------------------
//Wrapper for easily gernating JSON Commands
//--------------------------------------------------

class Command {

    constructor(inCommand) {
        this.command = inCommand;
        this.sessionID = null;
    }

    toString(inSession) {
        this.sessionID = inSession;
        return JSON.stringify(this);
    }
}

module.exports = Command;