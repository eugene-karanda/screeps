'use strict';

const SpotManager = require('SpotManager');

class SpotManagerMemory {

    /**
     * @param {number} x
     * @param {number} y
     * @param {String} roomName
     */
    constructor(x, y, roomName) {
        /**
         * @type {number}
         */
        this.x = x;

        /**
         * @type {number}
         */
        this.y = y;

        /**
         * @type {String}
         */
        this.roomName = roomName;
    }

    /**
     * @param {SpotManagerMemory} memory
     * @return {SpotManager}
     */
    static restore(memory) {
        const room = Game.rooms[memory.roomName];

        return new SpotManager(
            room.getPositionAt(memory.x, memory.y)
        )
    }

    /**
     * @param {SpotManager} spotManager
     * @return {SpotManagerMemory}
     */
    static store(spotManager) {
        return new SpotManagerMemory(
            spotManager.spot.x,
            spotManager.spot.y,
            spotManager.spot.roomName
        );
    }
}

module.exports = SpotManagerMemory;