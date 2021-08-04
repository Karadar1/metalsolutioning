const CardAnimations = {
  toggleImgState: function (state, setState) {
    if (state === 'firstPositionForCards') {
      setState('secondPositionForCards');
    } else {
      setState('firstPositionForCards');
    }
  },
  removeImg: function (state, setState) {
    setState('firstPostionForCards');
  },
};

module.exports = CardAnimations;
