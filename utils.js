let creepCost = function (parts) {
    return parts
        .map(part => BODYPART_COST[part])
        .reduce((sum, c) => sum + c, 0)
};

module.exports = {
    creepCost: creepCost
};