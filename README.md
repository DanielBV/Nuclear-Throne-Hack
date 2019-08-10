
# Nuclear Throne Hack

A basic hack for the dailies and weeklies of the game Nuclear Throne. It's a project driven by curiosity rather than the desire to cheat, so its functionalities are limited. I just wanted to challenge myself to discover how the requests worked.

The project is a web application that lets you select the result that you want to get in the leaderboard (I don't recommend using it besides testing purposes).

For more info read the FAQ.

## Getting Started


To run the server you need to install nodejs (https://nodejs.org/en/download/) and Angular CLI.

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
After the last command, you should be able to access the web in http://localhost:9999/ (the port may change, but it should appear in the terminal).

# FAQ
#### Why did you create this hack?
I made it as a challenge to myself; I wanted to see if I could understand how NT send the HTTP requests to send and receive information about the daily and the weekly games.

Two years ago, I created this NT Hack in Python and GTK, but the code was messy (I didn't have too much experience in programming), and the GUI was... ugly. So I never released it.

To learn Angular, I choose to port the project because it was easy and required me to learn Angular Forms.


#### The hack doesn't allow X. Why?
I didn’t create the application to cheat; once I decoded the data, I wanted a simple application to test it. I’ve already added too many options.

### Why don't you allow the user to select everything?
As a part of my learning experience, I wanted to add form validation. Plus I didn't want to allow impossible combinations or people hacking their way to the top of the leaderboard.

#### Should I use this hack?
No. 
1. Don't hack this game; just play it!
2. The hack uses  HTTP requests and isn't 100% integrated with the game, which means you might be caught easily.
3. The hack might be patched, and I'm not going to update it.
4. What's wrong with you? Just play the game, it's fun.
5. I'm sure there are better ways to hack the game. Don't bother with this one.
6. You might be banned.
7. Did I mention that you shouldn't hack the game? With or without this concrete hack
8. Just don't use it.

#### Did you use this hack?
I used it in a secondary account for testing. The results I sent were way lower than my average run (when I played NT). My intention wasn't to cheat.

#### If the game is updated, will you update the hack?
No, I completed my challenge, and I have no intention of maintaining a hack.


#### The hack doesn't work
It worked in version 99r1, tested in April 2019. If it no longer works... well, what a pity.

#### How does it work? Will you document the hack?
I'm not going to document how it works; I've probably already caused enough trouble. If you really want to know, you can do reverse engineering. It's easy.


#### How did you choose the number of kills and mutations that you can select in each level?
The number of mutations and kills is calculated from a (probably) wrong average from several dailies.

It isn't accurate, and it can lead to impossible situations. For example, the hack doesn't take into account the effect of the crown of blood, so if you play a weekly where you start with it, you will have way lower kills than the legit players.

I only made loop 0 because I didn't want to spend time calculating average kills, mutations, enemies that appear in the area.


####  Can I contribute to this hack?
Only if you are going to fix a bug that isn't related to the hack, but to the web app (angular or node). 
I won't merge or allow any commit that adds functionality to the hack or updates it to a newer version of the game.


## Built With

* [nodejs](https://nodejs.org/) - Backend
* [angular](https://angular.io/) - Frontend


