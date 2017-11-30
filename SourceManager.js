'use strict';

const SpotManager = require('SpotManager');

/**
 * @param {Source} source
 * @return {Array<RoomPosition>}
 */
const findSpots = function(source) {
    const sourcePos = source.pos;
    const room = source.room;

    let spots = [];

    for(const x of [-1, 0, 1]) {
        for(const y of [-1, 0, 1]) {

            if(x === 0 && y === 0) {
                continue;
            }

            const spotPosition = new RoomPosition(sourcePos.x + x, sourcePos.y + y, room.name);

            const terrain = spotPosition.lookFor(LOOK_TERRAIN);

            if(terrain.includes('wall')) {
                continue;
            }

            spots.push(spotPosition);
        }
    }

    return spots;
};

class SourceManager {

    /**
     * @param {Source} source
     * @param {Array<SpotManager>} spotManagers
     */
    constructor(source, spotManagers) {
        /**
         *
         * @type {Source}
         */
        this.source = source;

        /**
         *
         * @type {Array<SpotManager>}
         */
        this.spotManagers = spotManagers;
    }

    /**
     *
     * @param {Source} source
     * @return {SourceManager}
     */
    static of(source) {
        return new SourceManager(
            source,
            findSpots(source)
                .map(spot => SpotManager.of(spot))
        );
    }
}

module.exports = SourceManager;