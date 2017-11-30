'use strict';

const RoomManager = require('RoomManager');

const loop = function () {
    const rooms = Game.rooms;
    for(const roomName in rooms) {
        if(rooms.hasOwnProperty(roomName)) {
            const room = rooms[roomName];
            processRoom(room);
        }
    }
};

/**
 * @param {Room} room
 */
const processRoom = function (room) {
    const roomManager = Memory.roomManager || RoomManager.of(room);

    for (let sourceManager of roomManager.sourceManagers) {
        for (const spot of sourceManager.spots) {
            spot.createFlag();
        }
    }

    Memory.roomManager = roomManager;
};

// noinspection JSUnusedGlobalSymbols
module.exports = {
    loop: loop
};