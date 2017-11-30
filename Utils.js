'use strict';

const utils = {

    creepCost: function(parts) {
        return parts
            .map(part => BODYPART_COST[part])
            .reduce((sum, c) => sum + c, 0);
    },

    /**
     *
     * @param {Array<string>} parts
     * @returns {number}
     */
    spawnTime: function(parts) {
        return CREEP_SPAWN_TIME * parts.length;
    },

    moveTime: function() {

    },

    randomName: function() {
        return Math.random()
            .toString(36)
            .substring(7);
    }
};

module.exports = utils;