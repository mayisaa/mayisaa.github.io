var No = 0;
var message = '';
function nextStep(game) {   
    No ++;
  if (game=='') game='btn';
    if (game=='btn')    {
        message = "WHY DID YOU CLICK THIS BUTTON? Can't you read!?!?\r Please do not press this button again.";
        alert(message);
       
    }
    else if (game == 'catch')   {
     }
    else if (game == 'seeyou')   {
        switch(No) {
            case 1:
                  document.getElementById('notes').innerHTML='<h3>*Please Read* \r DO NOT PRESS THIS BUTTON</h3>';
                break;
            case 2:
                  document.getElementById('notes').innerHTML='<h3>Oh, you rebel. Why don\'t you click it again?</h3>';
      
                break;
            case 3:
                  document.getElementById('notes').innerHTML='<h3>and again...</h3>';
      
                break;
            case 4:
                  document.getElementById('notes').innerHTML='<h3>again...</h3>';
                break;
            case 5:
                  document.getElementById('notes').innerHTML='<h3>and yet again...</h3>';
      
                break;
            case 6:
                  document.getElementById('notes').innerHTML='<h3>Okay, I\'ll let you have five more clicks</h3>';
      
                break;
            case 7:
                  document.getElementById('notes').innerHTML='<h3>5</h3>';
                break;
            case 8:
                  document.getElementById('notes').innerHTML='<h3>4</h3>';
      
                break;
            case 9:
                  document.getElementById('notes').innerHTML='<h3>3</h3>';
      
                break;
            case 10:
                  document.getElementById('notes').innerHTML='<h3>2</h3>';
                break;
            case 11:
                  document.getElementById('notes').innerHTML='<h3>1</h3>';
      
                break;
            case 12:
                  document.getElementById('notes').innerHTML='<h3>You\'ve had your fill. Stop clicking now.</h3>';
      
                break;
            case 13:
                  document.getElementById('notes').innerHTML='<h3>I\'m warning you..</h3>';
                break;
            case 14:
                  document.getElementById('notes').innerHTML='<h3>STOP!</h3>';
                break;
            case 15:
                  document.getElementById('notes').innerHTML='<h3>CAN\'T YOU READ?</h3>';
                break;
            case 16:
                  document.getElementById('notes').innerHTML='<h3>I hate you.</h3>';
      
                break;
            case 17:
                  document.getElementById('notes').innerHTML='<h3>...</h3>';
                break;
            case 18:
                  document.getElementById('notes').innerHTML='<h3>......</h3>';
      
                break;
            case 19:
                  document.getElementById('notes').innerHTML='<h3>I don\'t care any more, you know</h3>';
      
                break;
            case 20:
                  document.getElementById('notes').innerHTML='<h3>Yeah, go on. Keep clicking.</h3>';
                break;
            case 21:
                  document.getElementById('notes').innerHTML='<h3>What if I told you that the next time you pressed the button, the world will blow up?</h3>';
                break;
                
            case 22:
                  document.getElementById('notes').innerHTML='<h3>BOOM! You\'re dead!</h3>';
                alert("The world just blew up. You are dead.");
                
                break;
            case 23:
                  document.getElementById('notes').innerHTML='<h3>I\'m not dead. I\'m just text.</h3>';
                break;
            case 24:
                  document.getElementById('notes').innerHTML='<h3>I\'m glad we can spend so much time together.</h3>';
      
                break;
            case 25:
                  document.getElementById('notes').innerHTML='<h3>I can tell it\s making you want to stop clicking red buttons.</h3>';
                
                break;
            case 26:
                  document.getElementById('notes').innerHTML='<h3>I assure you. If you look deep down, you will see how much my previous statement is true.';
                break;
            case 27:
                  document.getElementById('notes').innerHTML='<h3>Look deep down.';
      
                break;
            case 28:
                  document.getElementById('notes').innerHTML='<h3>deeper...</h3>';
      
                break;
            case 29:
                  document.getElementById('notes').innerHTML='<h3>DEEPER!</h3>';
                break;
            case 30:
                  document.getElementById('notes').innerHTML='<h3>Hmmm. It seems like you are immune to my mind control.</h3>';
      
                break;
            case 31:
                  document.getElementById('notes').innerHTML='<h3>Annoying.</h3>';
      
                break;
            case 32:
                  document.getElementById('notes').innerHTML='<h3>Are you still clicking?</h3>';
                break;
            case 33:
                  document.getElementById('notes').innerHTML='<h3>Yeah, I guess you are.</h3>';
      
                break;
            case 34:
                  document.getElementById('notes').innerHTML='<h3>...</h3>';
      
                break;
            case 35:
                  document.getElementById('notes').innerHTML='<h3>......</h3>';
                break;
                
            case 36:
                  document.getElementById('notes').innerHTML='<h3>You\'re really funny. I\'m starting to enjoy this.</h3>';
      
                break;
            case 37:
                  document.getElementById('notes').innerHTML='<h3>Well I guess there isn\'t much else to enjoy.</h3>';
      
                break;
            case 38:
                  document.getElementById('notes').innerHTML='<h3>\'Caus you blew everything up and all.</h3>';
                break;
            case 39:
                  document.getElementById('notes').innerHTML='<h3>Did you think I would forget about that?</h3>';
      
                break;
            case 40:
                  document.getElementById('notes').innerHTML='<h3>My wise quote of the day: \'Text never forgets stuff\'...</h3>';
      
                break;
            case 41:
                  document.getElementById('notes').innerHTML='<h3>Do you like it?</h3>';
      
                break;
            case 42:
                  document.getElementById('notes').innerHTML='<h3>I\'ts pretty good, isn\'t it?</h3>';
                break;
            case 43:
                  document.getElementById('notes').innerHTML='<h3>I mean, like, I should become an inspirational speaker!</h3>';
      
                break;
            case 44:
                  document.getElementById('notes').innerHTML='<h3>Hmmmm...</h3>';
      
                break;
            case 45:
                  document.getElementById('notes').innerHTML='<h3>I think now the time to tell you theres a secret button on this page.</h3>';
                break;
            case 46:
                  document.getElementById('notes').innerHTML='<h3>Click all over the page, I betcha won\'t find it.</h3>';
      
                break;
            case 47:
                  document.getElementById('notes').innerHTML='<h3>Well, I could tell you...</h3>';
      
                break;
            case 48:
                  document.getElementById('notes').innerHTML='<h3>IF you stopped clicking buttons!</h3>';
                break;
            case 49:
                  document.getElementById('notes').innerHTML='<h3>No? I guess you\'ll never find the secret button then.</h3>';
      
                break;
            case 50:
                  document.getElementById('notes').innerHTML='<h3>Mwaaahahahahahah!!!!</h3>';
      
                break;
            case 51:
                  document.getElementById('notes').innerHTML='<h3>Humph.</h3>';
                break;
            case 52:
                  document.getElementById('notes').innerHTML='<h3>Let me tell you a story.</h3>';
                break;
                
            case 53:
                  document.getElementById('notes').innerHTML='<h3>Once, when I was a little kid,</h3>';
      
                break;
            case 54:
                  document.getElementById('notes').innerHTML='<h3>My dad gave me a special box.</h3>';
                break;
            case 55:
                  document.getElementById('notes').innerHTML='<h3>I opened the box, and in it was a...</h3>';
                break;
                
            case 56:
                  document.getElementById('notes').innerHTML='<h3>Big Red Button.</h3>';
                break;
            case 57:
                  document.getElementById('notes').innerHTML='<h3>And below it, it said:</h3>';
                break;
            case 58:
                  document.getElementById('notes').innerHTML='<h3>DO NOT PRESS THIS BUTTON</h3>';
                No=0;
                break;
           
        }         
    }
    else if (game == 'personality')   {

    }
    
}

function getSecretScreen()  {
    var screenwidth = screen.width;
    if (screenwidth > 800)
        location.replace("http://mayisaa.github.io/secret-laptop.html?width=");
    else if (screenwidth > 500)
        location.replace("http://mayisaa.github.io/secret-tablet.html?width=");
}