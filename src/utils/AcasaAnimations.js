const AcasaAnimations = {
  toggleImgState: function (state, setState) {
    if (state === 'firstPosition') {
      setState('secondPosition');
    } else {
      setState('firstPosition');
    }
  },
  removeImg: function (state, setState) {
    if (state === 'secondPosition') {
      setState('firstPostion');
    }
  },
};

module.exports = AcasaAnimations;
