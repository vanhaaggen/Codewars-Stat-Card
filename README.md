# Codewars Stat Badge/Card (WiP) 
This is not the original Codewars Badge, just a redesign I made for fun. Any suggestions are welcome 😊


### Good to know
1. ⚠ This app is deployed on Heroku and it has a limit of 50 concurrent conections so, If you like it please 🙏 clone the repo and deploy it on your favourite platform.

2. ![Heroku][1] + ☕. This app is [kaffeinated](https://kaffeine.herokuapp.com/). It pings every 30 minutes to keep the dyno awake. Due to Heroku's policies for free dynos to sleep for 6 hours a day, I've set mine to fall asleep😴 from 1:00am to 7:00am GMT.

3. In this 6 hour span the app will take around 7 seconds to start. 

4. Because of the aggressive cache of github camo images I've set the headers to `no-store`, this prevents github from cahcing the image but it also prevents the image from showing when Heroku's dyno are asleep, to fix this just refresh the page. (If you know a solution to this please let me know)


## Options 

The URL has to contain the following queries to function properly:
- **username=**[your codewars username]
- **card** or **badge** (without value, just the key)
- **colormode=**[dark_mode or bright_mode]

- ### Default mode 
   `https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&badge&colormode=dark_mode`
 
    ![](./svg/defaultBadge.svg)
 
- ### bright_mode
   `https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&badge&colormode=bright_mode`
 
    ![](./svg/badgeBrightMode.svg)

- ### name_only
  `https://github-readme-codewars-stats.herokuapp.com/api/?username=[your username]&badge&name_only`

    ![](./svg/badgeNameOnly.svg)

- ### alias_only (combined with bright_mode)
  `https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&badge&alias_only&colormode=bright_mode`

    ![](./svg/badgeCombinedOptions.svg)
 
 - ### Card 
   `https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&card&colormode=dark_mode`
   
   ![](./svg/svgCard.svg)
---
 ## Customize your badge/card
 
`https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&[badge or card]&customcolor=[query-string]`
  The query options are:
  - bg
  - fg
  - text
  - secText (secondary text)
  - stroke (only in badge)
  - logo
  
  The query string is formated the following way:
  `customcolor=bg:[HEX code without #]`
  
  To join different options just:
  `customcolor=bg:[HEX code without #]_fg:[HEX code]_text:[HEX code]`
  
  ### Example Badge
  `https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&badge&customcolor=bg:2a295b_fg:b500ed_text:fc4646_logo:2a295b_stroke:f75402`
  ![](./svg/customBadge.svg)
  
  ### Example Card
  `https://github-readme-codewars-stats.herokuapp.com/api/?username=vanhaaggen&card&customcolor=bg:2a295b_fg:b500ed_text:fc4646_logo:2a295b_stroke:f75402`
  ![](./svg/customCard.svg)
 
--- 
## things to do:
- [x] Choose to display username. Default is both name and username.

- [x] If name return null, display username in big.

- [x] Make colors customizable.

- [x] Create codewars stat Card with more user info.

- [ ] Make a button to automate the deployement on diferent platforms.
...


[1]: https://img.shields.io/static/v1?label=heroku&logo=heroku&labelColor=9e7cc1&style=flat&message=&nbsp;&color=9e7cc1
