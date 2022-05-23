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

    it("should be forty love", () => {
      setPlayer1ScoreTimes(3);
      tobeScore("forty love");
    });
  });

  describe("play2 score", () => {
    it("should be love fifteen", () => {
      setPlayer2ScoreTimes(1);
      tobeScore("love fifteen");
    });

    it("should be love thirty", () => {
      setPlayer2ScoreTimes(2);
      tobeScore("love thirty");
    });

    it("should be love forty", () => {
      setPlayer2ScoreTimes(3);
      tobeScore("love forty");
    });
  });

  describe("is same score", () => {
    it("should be fifteen all", () => {
      setPlayer1ScoreTimes(1);
      setPlayer2ScoreTimes(1);
      tobeScore("fifteen all");
    });

    it("should be thirty all", () => {
      setPlayer1ScoreTimes(2);
      setPlayer2ScoreTimes(2);
      tobeScore("thirty all");
    });

    it("should be deuce (3:3)", () => {
      setPlayer1ScoreTimes(3);
      setPlayer2ScoreTimes(3);
      tobeScore("deuce");
    });

    it("should be deuce (7:7)", () => {
      setPlayer1ScoreTimes(7);
      setPlayer2ScoreTimes(7);
      tobeScore("deuce");
    });
  });

  describe("is adv", () => {
    it("should be Peter adv", () => {
      setPlayer1ScoreTimes(4);
      setPlayer2ScoreTimes(3);
      tobeScore("Peter adv");
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

  function setPlayer2ScoreTimes(times: number) {
    for (let i = 1; i <= times; i++) {
      tennis.player2Score();
    }
  }
});
