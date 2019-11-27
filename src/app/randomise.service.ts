export class RandomiseService {
  createNumbers(rangeOfQuestions: number, lengthOfQuestions: number): number[] {
    let numberOfQuestions = rangeOfQuestions;
    const max = lengthOfQuestions; // full number of questions
    const indexesToShow: number[] = [];
    // form quantity random indexes to show
    for (
      let i = 0, currentNum: number, previousNums: number[] = [];
      numberOfQuestions;
      i++
    ) {
      currentNum = Math.round(Math.random() * (max - 1));
      if (i === 0 || previousNums.indexOf(currentNum) < 0) {
        indexesToShow.push(currentNum);
        numberOfQuestions--;
        previousNums.push(currentNum);
      }
    }
    return indexesToShow.sort((a, b) => a - b);
  }
}
