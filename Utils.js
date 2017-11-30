'use strict';

class Utils {

    static creepCost(parts) {
        return parts
            .map(part => BODYPART_COST[part])
            .reduce((sum, c) => sum + c, 0)
    };

    /**
     *
     * @param {Array<string>} parts
     * @returns {number}
     */
    static spawnTime(parts) {
        return CREEP_SPAWN_TIME * parts.length;
    };

    static moveTime() {

    };

    static randomName() {
        return Math.random()
            .toString(36)
            .substring(7);
    };
}

module.exports = Utils;