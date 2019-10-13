/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let studyingTime;
      let studyingBasic = 500;
      let studyingMaster = 800;
      if(knowsProgramming==true) {
        studyingTime = studyingMaster;
      } else {
        studyingTime = studyingBasic + studyingMaster;
      }
      let speed = config[focus];
      let numberOfWeeks = Math.ceil(studyingTime/speed);
      return numberOfWeeks;
  };
  