Preview
<img src="https://github.com/bellitabellota/TOP-assignment-rock-paper-scissors/blob/master/Rock%20Paper%20Scissors.gif" />

Want to try yourself? Visit this [link](https://bellitabellota.github.io/TOP-assignment-rock-paper-scissors/).

# Rock Paper Scissors

## Assignment instructions from The Odin Project (TOP) - PART 1

**Step 1: Setup the project structure**
  1. Create a new Git repository for your project.
  
  2. Create a blank HTML document with a script tag.
  
  3. Check if JavaScript is linked correctly:
  
      - Write `console.log("Hello World")` in JavaScript.
      - Check if “Hello World” is logged in the browser console once you open your webpage.
      - It’s best practice to link to an external JavaScript file inside this script tag. Using an external JavaScript file keeps your HTML file clean and organized.

You don’t have to write additional code in the HTML file. This game is played entirely via the console.

**Step 2: Write the logic to get the computer choice**


Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

1. Create a new function named `getComputerChoice`.

2. Write the code so that `getComputerChoice` will randomly `return` one of the following string values: “rock”, “paper” or “scissors”.

    - **Hint**: The [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

3. Test that your function returns what you expect using `console.log` or [the browser developer tools](https://www.theodinproject.com/lessons/foundations-javascript-developer-tools) before advancing to the next step.


**Step 3: Write the logic to get the human choice**


Your game will be played by a human player. You will write a function that takes the user choice and returns it.

  1. Create a new function named `getHumanChoice`.
  
  2. Write the code so that `getHumanChoice` will `return` one of the valid choices depending on what the user inputs.
  
      - **Hint**: Use the prompt method to get the user’s input.
  
  3. Test what your function returns by using `console.log`.


**Step 4: Declare the players score variables**


Your game will keep track of the players score. You will write variables to keep track of the players score.

  1. Create two new variables named `humanScore` and `computerScore` in the global scope.
  
  2. Initialize those variables with the value of `0`.


**Step 5: Write the logic to play a single round**

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

1. Create a new function named `playRound`.

2. Define two parameters for `playRound`: `humanChoice` and `computerChoice`. Use these two parameters to take the human and computer choices as arguments.

3. Make your function’s `humanChoice` parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.

4. Write the code for your `playRound` function to `console.log` a string value representing the round winner, such as: “You lose! Paper beats Rock”.

5. Increment the `humanScore` or `computerScore` variable based on the round winner.


Example code:

````
function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
````

**Step 6: Write the logic to play the entire game**

Your game will play 5 rounds. You will write a function named `playGame` that calls `playRound` to play 5 rounds, keeps track of the scores and declares a winner at the end.

1. Create a new function named `playGame`.

2. Move your `playRound` function and score variables so that they’re declared inside of the new `playGame` function

3. Play 5 rounds by calling `playRound` 5 times.

    - **Hint**: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
    
    - Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
    
    - If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.
  
## Assignment instructions from The Odin Project (TOP) - PART 2

1. Set up a new branch on your previous Rock Paper Scissors repo
  
    1. Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command `git checkout -b rps-ui`.
  
    2. You are now working in the `rps-ui branch`, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be `main`. Let’s push this new branch to your remote repo with the command `git push origin rps-ui`. Now, you’ll see two branches in your GitHub repository! You can select the new branch on GitHub using the dropdown branch selector shown in the screenshot below.
  
    ![Dropdown menu of branches on GitHub](https://cdn.statically.io/gh/TheOdinProject/curriculum/46c18d8445051e016b1e415fe0227a0fa33cc825/foundations/javascript_basics/revisiting_rock_paper_scissors/imgs/00.png)
    
    3. Make sure you are on the `rps-ui` branch. You can check this, with the `git branch` command. The branch you are currently on will have an (*)asterisk next to it. If you’re in another branch for some reason, change to `rps-ui` with the command `git checkout rps-ui`. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use `git push origin rps-ui` instead of `git push origin main`, since we’re pushing to our new branch.

2. In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.

    1. For now, remove the logic that plays exactly five rounds.
    
    2. Create three buttons, one for each selection. Add an event listener to the buttons that call your `playRound` function with the correct `playerSelection` every time a button is clicked. (you can keep the `console.logs` for this step)
  
    3. Add a div for displaying results and change all of your console.logs into DOM methods.
  
    4. Display the running score, and announce a winner of the game once one player reaches 5 points.
  
    5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

3. Once you’re all done with your UI and made sure everything’s satisfactory, ensure all of your changes are committed to the `rps-ui` branch with `git status` before continuing.

4. Now let’s take a look at how we can merge the changes from our `rps-ui` branch back to our `main` branch.

    1. Checkout the branch we want to merge INTO i.e. `main` with the command `git checkout main`.
    
    2. Now let’s merge our `rps-ui` branch into `main`, our current branch, with `git merge rps-ui`.
    
    3. If everything goes fine, our `rps-ui` branch is now successfully merged with main! Use `git log` and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
    
    4. Let’s push our `main` branch into our remote repo by running `git push origin main` . Go to your GitHub repo and you’ll see that our `main` branch will have all the changes and commits you made to the `rps-ui` branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
    
    5. Now that we have all our code in the main branch, we don’t really need our `rps-ui` branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with `git branch -d rps-ui` and also delete it from the remote repo on GitHub with `git push origin --delete rps-ui`. Congrats, we’re all done with our cleanup!

