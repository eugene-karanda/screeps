let utils = require('utils');
let roleHarvester = require('role.harvester');

let harvestAttributes = [WORK, CARRY, MOVE];
let harvestCost = utils.creepCost(harvestAttributes);

let randomName = function () {
    return Math.random().toString(36).substring(7);
};

let loop = function () {
    const spawn = Game.spawns['Spawn1'];
    const room = spawn.room;
    const creeps = Game.creeps;

    const sources = room.find(FIND_SOURCES);
    if (spawn.energy >= harvestCost) {
        spawn.spawnCreep(harvestAttributes, randomName());

    }

    for (const i in creeps) {
        const creep = creeps[i];
        roleHarvester.run(creep, spawn, sources[0]);
    }

};

// noinspection JSUnusedGlobalSymbols
module.exports = {
    loop: loop
};