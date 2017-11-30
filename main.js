'use strict';

const RoomManager = require('RoomManager');
const RoomManagerMemory = require('RoomManagerMemory');

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
    const roomManager = (Memory.roomManagerMemory) ?
        RoomManagerMemory.restore(Memory.roomManagerMemory) :
        RoomManager.of(room);

    for (let sourceManager of roomManager.sourceManagers) {
        for (const spotManager of sourceManager.spotManagers) {
            spotManager.mark();
        }
    }

    Memory.roomManagerMemory = RoomManagerMemory.store(roomManager);
};

// noinspection JSUnusedGlobalSymbols
module.exports = {
    loop: loop
};