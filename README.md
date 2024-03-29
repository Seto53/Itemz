# CSI3140 Project Winter 2022
## ITEMZ

## Student Information
- Rocio Ferreiro Rico - 300271563
- Mohamed Farah - 300147409

## Project outline
### Vision
The purpose of this project is to create a platform that can allow users to collect, buy and
potentially sell collectibles.

### Introduction
This project has been inspired by the growing trend of NFTs. While the digital collectibles in the
app are not real NFTs (not stored on a blockchain), they follow the idea that they are units of
data in a form of digital ledger. The collectibles will be either a picture in PNG format, or a 3D
model.
### Target User
- People that want to buy digital collectibles and collect them.
### Design
This web application will have a total of 4 pages users can use to interact with it.

- First page (Main menu) contains information about upcoming/current drops. Each drop is
a limited amount of digital collectibles that are available to buy at an exact timeframe. A
drop is over when it is sold out. It includes a search bar to find specific drops.
- Second page (Drop) can be accessed when clicking a collectible. It gives specific
information such as the remaining time for the drop, the ability to view the collectible in
high detail, the price in coins, the rarity (common, uncommon, rare, epic, legendary) and the
quantity. There is a Buy Now button that is greyed out until the drop is live. Once bought,
the user will be notified if the purchase is successful or not.
- Third page (Profile) can be opened from the top right corner of any page. The corner has
a slider that has menus such as profile and market. If the user is logged in. It shows
profile information such as the username, email address, and the collectibles owned. If a
user clicks a collectible, they have the option to share it. They have the option to log out
from that page.
**Scope Extension Idea** : Users can add bio information to their profile, and can be viewed
by everyone.
- **Scope Extension Idea**: Fourth page (Market), shows a list of collectibles that are in sale
by users. Once bought by another user, they receive the collectible. A market listing can
be canceled. The market is accessed from the corner of any page. There is a search bar
and a filter to list items from a price range, sort by price, rarity, etc.
### Implementation
In this section some aspects about the implementation are listed.
- The admin running the server has the option to add a drop with the necessary details
from the console.
Scope Extension Idea: Ban a user, increase user coins.
- The Google OAuth 2.0 API will be used to validate user authentication.
- The Wikipedia API will be used to provide information about the collectibles and their
fandom.
- PostgreSQL will be used as a database. The database will collect information about the
users, drops and collectibles.
- The Bootstrap framework will be used for some frontend elements.

The pdf version of this project outline can be found [HERE](https://github.com/professor-forward/project-messiteam/blob/develop/projectOutline/Project%20Outline.pdf)

### Project Structure
```bash
├── docs
│   ├── html files
│   ├── assets
│   │   ├── logo.png
│   │   └── ...
│   └── styles
│   │   ├── header.css
│   │   └── ...
│   └── scripts
│       ├── countdown.js
│       └── ...
└── README.md
```

### Set UP
IT IS ABSOLUTLY NECESSARY TO HAVE ACCESS TO THE .env AND .env.prod FILES TO RUN THE APPLICATION.
#### Development
1) Have Node.js and NPM installed in your system.
2) Run npm install in /backend and in /frontend.
3) Run 'docker-compose up -d'
4) To run the Backend enter the /backend directory and run 'node main.js'.
5) To run the Frontend enter the /frontend directory and run 'npm start'.

#### Production
Run 'docker-compose -f production.yml up'

Accessing http://localhost will show you the latest version of the app.

### Design System

#### Color Palette
The color palette is defined in [/docs/styles/root.css](https://github.com/professor-forward/project-messiteam/blob/deliverable2/docs/styles/root.css)

Including a main color some secondary and text color, as well as the different colors that will be used to identify types of collectibles.

### Fonts & Scales
The font family used throughout the whole project is 'Rubik' sans-serif.

We kept the default font scale, and use rem to change the sizes so that if we want to change the scale it's easy.

### Icons & Images
All our images are located in [/docs/assets](https://github.com/professor-forward/project-messiteam/tree/deliverable2/docs/assets)

There are some default images that would be inputted for particular collectibles as well as official images like the logo.

We are using Font Awesome icon family.

## Deliverable 3
To access every detail on the updates for this deliverable [click here](./Deliverable3.md)
