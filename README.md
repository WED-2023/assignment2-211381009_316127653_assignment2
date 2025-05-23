# Galactic Defenders

A browser-based space shooter game where players defend against enemy spaceships missiles.

## Developers

- **Amit Dvash** - ID: 316127653
- **Yali Katz** - ID: 211381009

## Play the Game

🎮 [Play Galactic Defenders Online](https://wed-2023.github.io/assignment2-211381009_316127653_assignment2/)

## Game Overview

Galactic Defenders is a modern take on the classic space shooter genre. Players control a spaceship and must defend against missiles of enemy spaceships before time runs out. The game features customizable controls, multiple background options, and a complete user management system.

## Features

### User Management

- **Registration System**: Create a new account with validation for:
  - Username uniqueness
  - Password complexity (minimum 8 characters with letters and numbers)
  - Valid email format
  - Name validation (no numbers in first/last name)
- **Login System**: Access your account and score history
- **Score History**: Track your performance over time

### Game Configuration

- **Customizable Controls**: Choose your preferred shoot key
- **Adjustable Game Time**: Select game duration from 2-5 minutes
- **Background Selection**: Choose from multiple space backgrounds (Earth, Mars, Moon, Saturn)

### Gameplay

- **Responsive Controls**: Smooth spaceship movement using arrow keys
- **Different Enemy Types**: Various enemy rows worth different point values
- **Progressive Difficulty**: Enemy speed increases over time
- **Lives System**: Three lives per game
- **Game Timer**: Complete the mission before time runs out
- **Sound Effects**: Immersive audio for shooting, explosions, and hits
- **Background Music**: Atmospheric soundtrack during gameplay

### Visual Elements

- **Responsive Design**: Optimized for Chrome with minimum resolution of 1366x768
- **Visual Feedback**: Clear indicators for lives, score, and time remaining
- **Game Over Screens**: Different messages based on performance

## Technical Implementation

- **HTML5 Canvas**: For rendering the game elements
- **CSS3**: Styling with animations and transitions
- **JavaScript**: Game logic, physics, and animations
- **Local Storage**: For saving user accounts and score history
- **Modular Code Structure**: Organized into logical components:
  - Screen management
  - User management
  - Audio system
  - Game logic
  - Rendering

## Browser Compatibility

Optimized for Google Chrome with a minimum screen resolution of 1366x768.

## Installation & Local Setup

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. No additional setup or dependencies required

## 🎮 How to Play Galactic Defenders

Before starting the game, make sure to register and log in with your user account. Once logged in, the game configuration screen will appear:

![Configuration Screen](./assets/images/configuration_screen.png)

### Step 1: Choose Your Game Settings

- **Bullet Style**: Select your preferred shooting style.
- **Game Duration**: Choose how long the game should last (between 2 to 5 minutes).
- **Background Image**: Pick your desired background for the game.

After configuring your settings, click on the **Start Game** button to begin.

### Step 2: Game Screen Overview

Once the game starts, you'll see the following UI elements:

![Game Screen](./assets/images/game_screen.png)

- 🕒 **Timer** (Top Right): Displays how much time is left in the game.
- ❤️ **Lives** (Center Top): Shows how many lives you have remaining.
- ⭐ **Score** (Top Left): Tracks your current score.

### 🎯 Objective

Destroy all enemy spaceships **before the timer runs out** and **without losing all your lives**.  
Avoid enemy fire and aim carefully to survive and score as many points as possible.

Good luck, defender of the galaxy! 🚀
