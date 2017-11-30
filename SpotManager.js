'use strict';

class SpotManager {

    /**
     * @param {RoomPosition} spot
     */
    constructor(spot) {

        /**
         *
         * @type {RoomPosition}
         */
        this.spot = spot;
    }

    mark() {
        if (this.spot.lookFor(LOOK_FLAGS).length !== 0) {
            return;
        }

        this.spot.createFlag();
    }

    /**
     * @param {RoomPosition} spot
     */
    static of(spot) {
       return new SpotManager(spot);
    }
}

module.exports = SpotManager;