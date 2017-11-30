const roleHarvester = {

    /**
     * @param {Creep} creep to work
     * @param spawn {StructureSpawn} spawn to use
     * @param source {Source} source to harvest
     */
    run: function (creep, spawn, source) {
        if (creep.carry.energy < creep.carryCapacity) {
            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else if (spawn.energy < spawn.energyCapacity) {
            if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }
    }

};

module.exports = roleHarvester;