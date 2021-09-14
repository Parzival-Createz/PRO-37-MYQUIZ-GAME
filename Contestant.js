class Contestant {
  constructor() {
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount() {
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value", (data) => {
      contestantCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      contestantCount: count
    });
  }

  update() {
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name: this.name,
      answer: this.answer
    });
  }

  // static variables or functions are the class level variables or functions so we need to call this static function with class name not with the object name because static function will contain detail of all the objects.

  static getPlayerInfo() {
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value", (data) => {
      allContestants = data.val();
    })
  }
}
