'use strict';

const RoomManager = require('RoomManager');
const SourceManagerMemory = require('SourceManagerMemory');

class RoomManagerMemory {

    /**
     * @param {Room} room
     * @param {Array<SourceManagerMemory>} sourceManagersMemories
     */
    constructor(room, sourceManagersMemories) {
        /**
         * @type {Room}
         */
        this.room = room;

        /**
         * @type {Array<SourceManagerMemory>}
         */
        this.sourceManagersMemories = sourceManagersMemories;
    }

    /**
     * @param {RoomManagerMemory} memory
     * @return {RoomManager}
     */
    static restore(memory) {
        return new RoomManager(
            memory.room,
            memory.sourceManagersMemories
                .map(sourceManagerMemory => SourceManagerMemory.restore(sourceManagerMemory))
        )
    }

    /**
     * @param {RoomManager} roomManager
     * @return {RoomManagerMemory}
     */
    static store(roomManager) {
        return new RoomManagerMemory(
            roomManager.room,
            roomManager.sourceManagers
                .map(sourceManager => SourceManagerMemory.store(sourceManager))
        );
    }
}

module.exports = RoomManagerMemory;