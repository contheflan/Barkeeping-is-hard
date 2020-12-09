# Project Overview

## Project Name

Barkeeping is Hard!
https://contheflan.github.io/Barkeeping-is-hard/

## Project Description
You've inherited a famous bar in the heart of the magical city of Brickhold! You're eager to start but you need to clean out the rooms. Oh no! There are monsters hiding inside and worse... THEY AREN'T PAYING RENT! Clean the rooms and try not to get punched!

## API and Data Sample

https://www.dnd5eapi.co/api/monsters
```
{
    "index": "imp",
    "name": "Imp",
    "size": "Tiny",
    "type": "fiend",
    "subtype": "devil",
    "alignment": "lawful evil",
    "armor_class": 13,
    "hit_points": 10,
    "hit_dice": "3d4",
    "speed": {
        "walk": "20 ft.",
        "fly": "40 ft."
    },
    "strength": 6,
    "dexterity": 17,
    "constitution": 13,
    "intelligence": 11,
    "wisdom": 12,
    "charisma": 14,
    "proficiencies": [
        {
            "index": "skill-deception",
            "name": "Skill: Deception",
            "value": 4,
            "url": "/api/proficiencies/skill-deception"
        },
        {
            "index": "skill-insight",
            "name": "Skill: Insight",
            "value": 3,
            "url": "/api/proficiencies/skill-insight"
        },
        {
            "index": "skill-persuasion",
            "name": "Skill: Persuasion",
            "value": 4,
            "url": "/api/proficiencies/skill-persuasion"
        },
        {
            "index": "skill-stealth",
            "name": "Skill: Stealth",
            "value": 5,
            "url": "/api/proficiencies/skill-stealth"
        }
    ],
    "damage_vulnerabilities": [],
    "damage_resistances": [
        "cold",
        "bludgeoning, piercing, and slashing from nonmagical/nonsilver weapons"
    ],
    "damage_immunities": [
        "fire",
        "poison"
    ],
    "condition_immunities": [
        {
            "index": "poisoned",
            "name": "Poisoned",
            "url": "/api/conditions/poisoned"
        }
    ],
    "senses": {
        "darkvision": "120 ft.",
        "passive_perception": 11
    },
    "languages": "Infernal, Common",
    "challenge_rating": 1,
    }
```

## Wireframes

![Barkeeping-proof-of-concept](https://i.imgur.com/IxnI3lm.png)

- 4 Divs (Top rules/lore text, Lower Third w/ button, Monster Image stats, Dice roll w/ results)
- 1 Button to roll the dice


### MVP/PostMVP

#### MVP 

- Pulling in a stat block for the monster using the dnd API(specifically it's "name" and "armor_class")
- Create a dice rolling array to show what the player rolled(1 thru 20)
- Comparing the armor_class of the monster with the dice result from the attack. Greater than the amount = Win!

#### PostMVP  

- Attaching an image to the monster from an outside API
- Add a title screen
- Add a result screen for victory or loss
- Add a simple dice rolling/spinning animation for attacks
- Add more monster possibilities
- Add different modifiers to the dice roll depending on the monster
- Add different ways to beat up monsters

## Project Schedule

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Initial Project Approval | Complete
|Sept 22| HTML, CSS, JS, APi | Complete
|Sept 23| MVP | Complete
|Sept 24| Post MVP/Styling | Complete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Barkeep Matrix](https://i.imgur.com/2NdS2og.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Filling out HTML| H | 3hrs| 3hrs | 3hrs |
| Implementing the API | H | 1hr| 3hrs | 2hr |
| Writing CSS | M | 6hrs| 6hrs | 4hrs |
| Baseline JS | H | 3hrs| 8hrs | 6hr |
| Implementing Eventlisteners| H | 3hrs| 3hrs | 2hrs |
| Dice Armor Compare Function | H | 3hrs| 3hrs | 3hrs |
| Troubleshooting HTML | M | 6hrs| 4hrs | 4hrs |
| Adding Media Queries for Mobile | H | 2hrs| 8hrs | 6hrs |
| Troubleshooting CSS | H | 6hrs| 8hrs | 8hrs |
| Troubleshooting JS | H | 7hrs| 8hrs | 6hrs |
| Total | - | 40hrs| 54hrs | 44hrs |

## Code Snippet

Had a lot of fun discovering how to add different things ontop of my main dice roll comparison mechanic 

```
function compare(diceRoll) {
  let loser = " \n LOSER \n -10 HP"
  let winner = " \n WINNER \n 10 DMG"
  let health = document.querySelector('#health-bar')
  if (diceRoll >= monsterArmor) {
    document.querySelector('#results').style.color = "limegreen"
    diceResult.innerText += winner
    monsterHealth -= 10;
    monsterApi.innerText = `NAME: ${monsterName} \n \n ARMOR: ${monsterArmor} \n \n HEALTH: ${monsterHealth}`
    if (monsterHealth <= 0) {
      window.location.replace("win.html")
    }
  } else {
    document.querySelector('#results').style.color = "red"
    diceResult.innerText += loser
    health.value -= 10;
    if (health.value == 0) {
      window.location.replace("lose.html")
    }
  }
}
```

## Change Log
-Changed the random number selection method from picking from an array to picking a random number through a Math.random function.

-Added health mechanic for both the player and the monster.
