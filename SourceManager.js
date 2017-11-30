'use strict';

/**
 * @param {Source} source
 * @return {Array<RoomPosition>}
 */
const findSpots = function(source) {
    console.log('Calculating spot');

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
     * @param {Array<RoomPosition>} spots
     */
    constructor(source, spots) {
        this.source = source;
        this.spots = spots;
    }

    /**
     *
     * @param {Source} source
     * @return {SourceManager}
     */
    static of(source) {
        const spots = findSpots(source);
        return new SourceManager(source, spots);
    }
}

module.exports = SourceManager;