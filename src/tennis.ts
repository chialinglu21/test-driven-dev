export class Tennis {
  play1Point = 0;
  pointDictionary = {
    1: "fifteen",
    2: "thirty",
  };
  constructor() {}

  score() {
    if (this.play1Point === 1 || this.play1Point === 2) {
      return `${this.pointDictionary[this.play1Point]} love`;
    }
    return "love all";
  }
  player1Score = () => this.play1Point++;
}
