export class Tennis {
  play1Point = 0;
  play2Point = 0;
  pointDictionary = {
    0: "love",
    1: "fifteen",
    2: "thirty",
    3: "forty",
  };

  constructor() {}

  score() {
    if (this.isSamePoint()) {
      return this.play1Point < 3
        ? `${this.pointDictionary[this.play1Point]} all`
        : "deuce";
    }

    const pointDifferent = Math.abs(this.play1Point - this.play2Point);
    if (pointDifferent > 0 && pointDifferent <= 3) {
      if (Math.abs(this.play1Point - this.play2Point) === 1) {
        if (this.play1Point > this.play2Point) {
          return `Peter adv`;
        }
      }

      return `${this.pointDictionary[this.play1Point]} ${
        this.pointDictionary[this.play2Point]
      }`;
    }

    return "love all";
  }
  player1Score = () => this.play1Point++;
  player2Score = () => this.play2Point++;

  private readonly isSamePoint = () => this.play1Point === this.play2Point;
}
