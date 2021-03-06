const { FineChannel } = require(`../model.js`);
/** @typedef {import('../model/Fixture.js').default} Fixture */

module.exports = [
  {
    name: `Fine before coarse`,
    description: `Fine channel used in a mode before its coarse channel`,

    /**
     * @param {Fixture} fixture The Fixture instance
     * @returns {Boolean} true if the fixture uses the feature
     */
    hasFeature: fixture => fixture.modes.some(mode =>
      mode.channelKeys.some((chKey, chPos) => {
        const channel = fixture.getChannelByKey(chKey);
        return channel instanceof FineChannel && chPos < mode.getChannelIndex(channel.coarseChannel.key);
      })
    )
  },

  {
    name: `Fine not-adjacent after coarse`,
    description: `Coarse channel with fine channels are not directly after each other`,

    /**
     * @param {Fixture} fixture The Fixture instance
     * @returns {Boolean} true if the fixture uses the feature
     */
    hasFeature: fixture => fixture.modes.some(mode =>
      mode.channelKeys.some((chKey, chPos) => {
        const channel = fixture.getChannelByKey(chKey);
        return channel instanceof FineChannel && chPos > mode.getChannelIndex(channel.coarserChannel.key) + 1;
      })
    )
  }
];
