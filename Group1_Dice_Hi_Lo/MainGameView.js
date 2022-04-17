    /**
    * @author Oghenemaro David Oroh 200492343
    */
      
      // loads the document with needed variables
      window.addEventListener('load', () => {
  
      document.getElementById('rounds').innerHTML = totalRounds;

      document.getElementById('playerdisplay').innerHTML = playerName + ' Chip Pool: ' + playerPoolAmount;

      document.getElementById('betdisplay').innerHTML = 100;
      
      });

      // message used for displaying that the game has ended
      let gameFinishedMessage = "";

      // for storing the bet amount
      let betTotal = 0;
      
      // grabbing the variables from previous page and displaying them
      var roomName = sessionStorage.getItem('ROOMNAME');

      document.getElementById('roomname').innerHTML = roomName;

      var playerName = sessionStorage.getItem('PLAYERNAME');

      var diceColor = sessionStorage.getItem('DICE');

      var playerPoolAmount = parseInt(sessionStorage.getItem('POOLAMOUNT'));

      var housePoolAmount = parseInt(sessionStorage.getItem('POOLAMOUNT'));

      document.getElementById('housepoolamount').innerHTML = housePoolAmount;

      var totalRounds = sessionStorage.getItem('ROUNDTOTAL');

      // displaying what dice were chosen on previous page
      let randImgSrc = 'diceimages/' + diceColor + '1' + '.png'; 
      document.querySelectorAll('img')[1].setAttribute('src', randImgSrc);

      let randImgSrc2 = 'diceimages/' + diceColor + '1' + '.png';
      document.querySelectorAll('img')[2].setAttribute('src', randImgSrc2);

      // done by David edited by Nathan to work with variables grabbed from first page
      // checks who won if they bet High
      function HiRoll(){

        // grabs current bet amount
        betTotal = parseInt(document.getElementById('betdisplay').innerHTML);

        // logic for rolling dice
        let randNumber1 = Math.floor(Math.random() * 6) + 1;
        let randNumber2 = Math.floor(Math.random() * 6) + 1;

        // displaying dice based on roll logic
        let randImgSrc = 'diceimages/' + diceColor + randNumber1 + '.png';
        
        document.querySelectorAll('img')[1].setAttribute('src', randImgSrc);
        
        let randImgSrc2 = 'diceimages/' + diceColor + randNumber2 + '.png';
        
        document.querySelectorAll('img')[2].setAttribute('src', randImgSrc2);

        // for checking who won and displaying the information
        if (randNumber1 > randNumber2) { // if player one wins
          document.getElementById("winner").innerHTML = playerName + ' Won';
          document.getElementById("winPlayer").innerHTML = playerName + " Gained: " + betTotal;
          document.getElementById("lossPlayer").innerHTML = 'House' + " Losses: " + betTotal;
          playerPoolAmount += betTotal; // changes pool amount if player won
          document.getElementById('playerdisplay').innerHTML = playerName + ' Chip Pool: ' + playerPoolAmount;
          housePoolAmount -= betTotal; // changes pool amount if house lost
          document.getElementById('housepoolamount').innerHTML = housePoolAmount;
        }
        //if the house wins
        else if (randNumber2 > randNumber1) { // if player one wins
          document.getElementById("winner").innerHTML = 'House Won';
          document.getElementById("winPlayer").innerHTML = 'House' + " Gained: " + betTotal;
          document.getElementById("lossPlayer").innerHTML = playerName + " Losses: " + betTotal;
          playerPoolAmount -= betTotal; // changes pool amount if player lost
          document.getElementById('playerdisplay').innerHTML = playerName + ' Chip Pool: ' + playerPoolAmount;
          housePoolAmount += betTotal; // changes pool amount if house won
          document.getElementById('housepoolamount').innerHTML = housePoolAmount;
        }
        else { // else it is a draw
          document.getElementById("winner").innerHTML = 'Draw';
          document.getElementById("winPlayer").innerHTML = 0;
          document.getElementById("lossPlayer").innerHTML = 0;
        }

        // Done by Nathan
        // changing the amount of rounds left
          totalRounds--;
          document.getElementById("rounds").innerHTML = totalRounds;

          document.getElementById('betdisplay').innerHTML = 0;

          // Displays message if Game is ended by someone lossing all their chips or rounds have ended
          if(playerPoolAmount == 0 || housePoolAmount == 0 || totalRounds == 0){
            if(playerPoolAmount > housePoolAmount){ // if player wins
              document.querySelector('h2').innerHTML = playerName + " Winner!!!";
              gameFinishedMessage = " Winner!!! "
            } else if(housePoolAmount > playerPoolAmount) { // if house wins
              document.querySelector('h2').innerHTML = "House Winner!!!";
              gameFinishedMessage = "House Winner!!! "
            } else { // if it is a draw
              document.querySelector('h2').innerHTML = "Draw!!!";
              gameFinishedMessage = "Draw!!! "
            }
            // exits page if game is over
            setTimeout(function(){ alert( gameFinishedMessage + "Game has ended"); window.location = "CreateGameRoomView.html"; }, 2000);
          }
      };

      // done by David edited by Nathan to work with variables grabbed from first page
      function LowRoll(){

        // grabs current bet amount
        betTotal = parseInt(document.getElementById('betdisplay').innerHTML);

        // logic for rolling dice
        let randNumber1 = Math.floor(Math.random() * 6) + 1;
        let randNumber2 = Math.floor(Math.random() * 6) + 1;

        // displaying dice based on roll logic
        let randImgSrc = 'diceimages/' + diceColor + randNumber1 + '.png';

        document.querySelectorAll('img')[1].setAttribute('src', randImgSrc);

        let randImgSrc2 = 'diceimages/' + diceColor + randNumber2 + '.png';

        document.querySelectorAll('img')[2].setAttribute('src', randImgSrc2);

        // for checking who won and displaying the information
        if (randNumber1 < randNumber2) { // if player one wins
          document.getElementById("winner").innerHTML = playerName + ' Won';
          document.getElementById("winPlayer").innerHTML = playerName + " Gained: " + betTotal;
          document.getElementById("lossPlayer").innerHTML = 'House' + " Losses: " + betTotal;
          playerPoolAmount += betTotal; // changes pool amount if player won
          document.getElementById('playerdisplay').innerHTML = playerName + ' Chip Pool: ' + playerPoolAmount;
          housePoolAmount -= betTotal; // changes pool amount if house lost
          document.getElementById('housepoolamount').innerHTML = housePoolAmount;
        }
        else if (randNumber2 < randNumber1) { //if the house wins
          document.getElementById("winner").innerHTML = 'House Won';
          document.getElementById("winPlayer").innerHTML = 'House' + " Gained: " + betTotal;
          document.getElementById("lossPlayer").innerHTML = playerName + " Losses: " + betTotal;
          playerPoolAmount -= betTotal; // changes pool amount if player lost
          document.getElementById('playerdisplay').innerHTML = playerName + ' Chip Pool: ' + playerPoolAmount;
          housePoolAmount += betTotal; // changes pool amount if house won
          document.getElementById('housepoolamount').innerHTML = housePoolAmount;
        }
        else { // else it is a draw
          document.getElementById("winner").innerHTML = 'Draw';
          document.getElementById("winPlayer").innerHTML = 0;
          document.getElementById("lossPlayer").innerHTML = 0;
        }

        // Done by Nathan
        // changing the amount of rounds left
        totalRounds--;
        document.getElementById("rounds").innerHTML = totalRounds;

        document.getElementById('betdisplay').innerHTML = 0;

        // Displays message if Game is ended by someone lossing all their chips or rounds have ended
        if(playerPoolAmount == 0 || housePoolAmount == 0 || totalRounds == 0){
            if(playerPoolAmount > housePoolAmount){ // if player wins
              document.querySelector('h2').innerHTML = playerName + " Winner!!!";
              gameFinishedMessage = " Winner!!! "
            } else if(housePoolAmount > playerPoolAmount) { // if house wins
              document.querySelector('h2').innerHTML = "House Winner!!!";
              gameFinishedMessage = "House Winner!!! "
            } else { // if it is a draw
              document.querySelector('h2').innerHTML = "Draw!!!";
              gameFinishedMessage = "Draw!!! "
            }

            // exits page if game is over
            setTimeout(function(){ alert(gameFinishedMessage + "Game has ended"); window.location = "CreateGameRoomView.html"; }, 2000);
          }
      };

      // increasing bet to a max equal to the lowest pool amount done by David
      function IncrBet(){

        if(parseInt(document.getElementById('betdisplay').innerHTML) < playerPoolAmount && parseInt(document.getElementById('betdisplay').innerHTML) < housePoolAmount){
          document.getElementById('betdisplay').innerHTML = parseInt(document.getElementById('betdisplay').innerHTML) + 10;
        }
      }

      // decrease bet to a minimum of 0 done by David
      function DecrBet(){
        if(parseInt(document.getElementById('betdisplay').innerHTML) > 0){
        document.getElementById('betdisplay').innerHTML = parseInt(document.getElementById('betdisplay').innerHTML) - 10;
        }
      }

      // Done by Nathan
      // function for exiting the game if player chooses
      function Forfeit(){
        let message = "Are you sure you want to forfiet?";
        
        // asking the user if they are sure they want to quit
        if(confirm(message) == true){
          alert("You have forfeit the game");
          window.location = "CreateGameRoomView.html";
        } else { // else does nothing

        }
      }