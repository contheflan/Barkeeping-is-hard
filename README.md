# Project Overview

## Project Name

Barkeeping is Hard!

## Project Description
You've inherited a famous bar in the heart of the magical city of Brickhold! You're eager to start but you need to clean out the rooms. Oh no! There are monsters hiding inside and worse, THEY AREN'T PAYING RENT! Clean the rooms and try not to get punched!

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

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Pulling in a stat block for a scary monster using the dnd API
- Attaching an image to this monster and some small animations
- Implement a 20 sided-dice comparison combat mechanic.

#### PostMVP  

- Add a title screen
- Add a result screen: for victory or loss
- Add more monster possibilities
- Add different modifiers to the dice roll depending on the monster
- Add different ways to beat up monsters

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Sept 21| Project Approval | Incomplete
|Sept 22| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Sept 23| MVP | Incomplete
|Sept 24| Post MVP/Styling | Incomplete
|Sept 25| Presentations | Incomplete

## Priority Matrix

![Barkeep Matrix](https://i.imgur.com/2NdS2og.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Filling out HTML| H | 3hrs| ?hrs | ?hrs |
| Bring API into JS | H | 1hrs| ?hrs | ?hrs |
| Attaching CSS | M | 6hrs| ?hrs | ?hrs |
| Baseline JS | H | 3hrs| ?hrs | ?hrs |
| Implementing Eventlisteners| H | 3hrs| ?hrs | ?hrs |
| Dice Armor Compare Function | H | 3hrs| ?hrs | ?hrs |
| Troubleshooting HTML | M | 6hrs| ?hrs | ?hrs |
| Troubleshooting CSS | H | 8hrs| ?hrs | ?hrs |
| Troubleshooting JS | H | 7hrs| ?hrs | ?hrs |
| Total | - | 40hrs| ?hrs | ?hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
