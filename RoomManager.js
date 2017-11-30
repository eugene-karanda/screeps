'use strict';

const SourceManager = require('SourceManager');

/**
 *
 * @param {Room} room
 * @return [Source]
 */
const findSources = function (room) {
    return room.find(FIND_SOURCES);
};

class RoomManager {

    /**
     * @param {Room} room
     * @param {Array<SourceManager>}sourceManagers
     */
    constructor(room, sourceManagers) {
        this.room = room;
        this.sourceManagers = sourceManagers;
    }

    /**
     * @param {Room} room
     * @return {RoomManager}
     */
    static of(room) {
        const sourceManagers = findSources(room)
            .map(source => SourceManager.of(source));

        return new RoomManager(room, sourceManagers);
    }
}

module.exports = RoomManager;