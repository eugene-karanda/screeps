'use strict';

const SourceManager = require('SourceManager');
const SpotManagerMemory = require('SpotManagerMemory');

class SourceManagerMemory {

    /**
     * @param {string} sourceId
     * @param {Array<SpotManagerMemory>} spotManagerMemories
     */
    constructor(sourceId, spotManagerMemories) {
        /**
         *
         * @type {string}
         */
        this.sourceId = sourceId;

        /**
         *
         * @type {Array<SpotManagerMemory>}
         */
        this.spotManagerMemories = spotManagerMemories;
    }

    /**
     * @param {SourceManagerMemory} memory
     * @return {SourceManager}
     */
    static restore(memory) {
        return new SourceManager(
            Game.getObjectById(memory.sourceId),
            memory.spotManagerMemories
                .map(spotManagerMemory => SpotManagerMemory.restore(spotManagerMemory))
        )
    }

    /**
     * @param {SourceManager} sourceManager
     * @return {SourceManagerMemory}
     */
    static store(sourceManager) {
        return new SourceManagerMemory(
            sourceManager.source.id,
            sourceManager.spotManagers
                .map(spotManager => SpotManagerMemory.store(spotManager))
        );
    }
}

module.exports = SourceManagerMemory;