import { Tennis } from "./tennis";

describe("Tennis", () => {
  let tennis = new Tennis();
  beforeEach(() => {
    tennis = new Tennis();
  });

  it("should be love all", () => {
    tobeScore("love all");
  });

  describe("play1 score", () => {
    it("should be fifteen love", () => {
      setPlayer1ScoreTimes(1);
      tobeScore("fifteen love");
    });

    it("should be thirty love", () => {
      setPlayer1ScoreTimes(2);
      tobeScore("thirty love");
    });
  });

  function tobeScore(expected) {
    expect(tennis.score()).toBe(expected);
  }

  function setPlayer1ScoreTimes(times: number) {
    for (let i = 1; i <= times; i++) {
      tennis.player1Score();
    }
  }
});
