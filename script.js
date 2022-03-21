const rock = document.getElementById("rock"),
   paper = document.getElementById("paper"),
   scissor = document.getElementById("scissor"),
   yourMove = document.getElementById("your-move"),
   computerMove = document.getElementById("computer-move"),
   result = document.getElementById("result-panel"),
   header = document.querySelector(".game-panel header"),
   score = document.getElementById("score");

   let scorePlay = 00;

   rock.addEventListener("click", e => {
       const options = ["Rock", "Paper", "Scissor"];
       var choice = options[Math.floor(Math.random() * 3)];

       header.style.display = "none";

       rock.style.opacity = "0.7";
       scissor.style.opacity = "1";
       paper.style.opacity = "1";

      yourMove.innerHTML = "<h1> Your Move: " + rock.value + "</h1>";
      computerMove.innerHTML = "<h1> Computer Move: " + choice + "</h1>";

      if(rock.value == choice)
      {
          result.style.display = "flex";
          result.style.background = "lightgray";
          result.innerHTML = "Draw";
      }
      else if(choice == "Paper")
      {
        result.style.display = "flex";
          result.style.background = "#f55";
          result.innerHTML = "You Lost!";
      }
     else {
        result.style.display = "flex";
        result.style.background = "lightgreen";
        result.innerHTML = "You Win!";
       scorePlay++;
       score.innerHTML = scorePlay;
     }
    });

   paper.addEventListener("click", e => {
       const options = ["Rock", "Paper", "Scissor"];
       var choicee = options[Math.floor(Math.random() * 3)];

       header.style.display = "none";

       paper.style.opacity = "0.7";
       rock.style.opacity = "1";
       scissor.style.opacity = "1";

       yourMove.innerHTML = "<h1> Your Move: " + paper.value + "</h1>";
      computerMove.innerHTML = "<h1> Computer Move: " + choicee + "</h1>";

      if(paper.value == choicee)
      {
          result.style.display = "flex";
          result.style.background = "lightgray";
          result.innerHTML = "Draw";
      }
      else if(choicee == "Scissor")
      {
        result.style.display = "flex";
          result.style.background = "#f55";
          result.innerHTML = "You Lost!";
      }
     else {
        result.style.display = "flex";
        result.style.background = "lightgreen";
        result.innerHTML = "You Win!";
        scorePlay++;
       score.innerHTML = scorePlay;
     }
   });
   scissor.addEventListener("click", e => {
       const options = ["Rock", "Paper", "Scissor"];
       var choiceee = options[Math.floor(Math.random() * 3)];

       header.style.display = "none";

       scissor.style.opacity = "0.7";
       rock.style.opacity = "1";
       paper.style.opacity = "1";
       
       yourMove.innerHTML = "<h1> Your Move: " + scissor.value + "</h1>";
      computerMove.innerHTML = "<h1> Computer Move: " + choiceee + "</h1>";


       if(scissor.value == choiceee)
      {
          result.style.display = "flex";
          result.style.background = "lightgray";
          result.innerHTML = "Draw";
      }
      else if(choiceee == "Rock")
      {
        result.style.display = "flex";
          result.style.background = "#f55";
          result.innerHTML = "You Lost!";
      }
     else {
        result.style.display = "flex";
        result.style.background = "lightgreen";
        result.innerHTML = "You Win!";
        scorePlay++;
       score.innerHTML = scorePlay;
     }
   });