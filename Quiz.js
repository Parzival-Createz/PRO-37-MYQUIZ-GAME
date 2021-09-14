class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("cyan");

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    fill("black");
    text(" The result of quiz ", 350, 50);

    //call getContestantInfo( ) here. It's a static function 
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined) {
      console.log("1");
      fill("red");
      textSize(20);
      text(`NOTE: Contestant who answered correct are highlighted in green color!`, 130, 230);
      var y = 220;
      for (var i in allContestants) {
        var ans = "2";
        console.log("2");
        if (allContestants[i].answer === ans) {
          fill("green");
        } else {
          fill("red")
        }
        y += 40;
        text(allContestants[i].name + " : " + allContestants[i].answer, 400, y)
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly

  }

}
