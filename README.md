
# Nuclear Throne Hack

A basic hack for the dailies and weeklies of the game Nuclear Throne. It's a project driven by curiosity rather than the desire to cheat, so the functionalities are limited. I just wanted to challenge myself to discover how the requests worked.

The project is a web application that lets you select the result that you want to get in the leaderboard (I don't recommend using it besides testing purposes).

For more info read the FAQ

## Getting Started


To run the server you need to install nodejs (https://nodejs.org/en/download/) and angular cli

```
npm install -g @angular/cli
```

### Installing

Run
```
cd angular
npm install 
ng build
cd ../node/
npm install
npm run
```
After the last command, you should be able to access the web in http://localhost:9999/ (the port may change, but it should be displayed in the terminal).

# FAQ
#### Why did you create this hack?
As I said in the introduction, I made it as a challenge to myself, I wanted to see if I was capable of understanding how NT send the http requests to send and receive information about the daily and the weekly games.

In fact, I made the NT Hack two years ago in python and gtk, but the code was really messy (didn't have too much experience i programming) and the GUI was... lets just say ugly. So I never released it.

When I started learning Angular, I decided to port the hack to check if it still worked and to improve my frontend skills and to learn to use and validate angular forms.

#### The hack doesn't allow X. Why?
X can be winning the game instead of dying, ending in loop 1, selecting the number of kills or mutations you want, etc. 

The answer is the same: I didn't create the application to cheat, once I decoded the data I just wanted a simple application to test it. In my opinion, I've already added too many options.

### Why don't you just allow the user to select everything?
As a part of my learning experience I wanted to create a form validation. Plus I didn't want to let everyone just choose impossible combinations or just add themselves to the top 1.

#### Should I use this hack?
No. 
1. Don't hack this game, just play it!
2. The hack uses http request, and isn't 100% integrated with the game, which means you might be caught easily.
3. The hack might be patched and Im not going to update it.
4. Whats wrong with you? Just play the game, it's fun.
5. I'm sure there are easier ways to hack the game. Don't bother with this one.
6. You can be banned.
7. Did I mentioned that you shouldn't hack the game? With or without this concrete hack
8. Just don't use it.

#### Did you use this hack?
I used it in a secondary account for testing purposes. The results I sent were way lower than my average run (when I played NT). Again, my intention wasn't to cheat.

#### If the game is updated, will you update the hack?
No, my challenge is completed and I have no intentions of mantaining a hack.
Btw, this means that if they update the game, you can be caught easily trying to hack it.

#### Are you going to add X feature?
No, same answer as above.

#### The hack doesn't work
It worked in version 99r1, tested in April 2019. If it not longer works... well, what a pity.

#### How does it work? Will you document the hack?
Im not going to document how it works, I've probably already caused enough trouble. If you really want to know, you can apply reverse engineering to the hack's code. It's easy.


#### Why did you use the specific data? Number of mutations, kills, only loop 0...
The number of mutations and kills is calculated from a probably wrong average from several dailies.

It isn't accurate and it can lead to impossible situations. For example the hack doesn't take into account the effect of the crown of blood, so if you play a weekly where you start with it, you will have way lower kills than the legit players.

I only made loop 0 because I didn't wanted to spend time calculating average kills, mutations, enemies that appear in the area....


####  Can I contribute to this hack?
Only if you are going to fix a bug that isn't related to the hack, but to the web (angular or node). I won't merge or allow any commit that adds functionality to the hack or updates it to a newer version of the game.


## Built With

* [nodejs](https://nodejs.org/) - Backend
* [angular](https://angular.io/) - Frontend


