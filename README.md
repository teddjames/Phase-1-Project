#Suit Up - Your Ultimate Suit Selector

**Suit Up** is a single-page application (SPA) that allows users to browse, search, and filter a curated collection of formal clothing suits. Built with HTML, CSS, and JavaScript, this project demonstrates asynchronous data fetching, dynamic DOM manipulation, responsive design, and multiple user interactions like filtering, view toggling, and dark/light mode switching.

##Table of Contents
-[Author](#author)
-[Overview](#overview)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Author
Tedd James

## Overview

**Suit Up – Your Ultimate Suit Selector** is an interactive SPA that lets users explore a collection of suits. Users can filter by style, color, and price, search by keywords, and view detailed suit information in a modal popup. The app also offers layout toggling between grid and list views, as well as dark/light mode for a modern, responsive user experience.

## Features

- **Data Fetching:**
  - Loads suit data asynchronously from a local `suits.json` file.
- **Dynamic Rendering:**
  - Renders suit cards dynamically using JavaScript.
- **Filtering & Searching:**
  - Filter suits by style, color, price, and keyword search.
- **Modal Detail View:**
  - Click on a suit to view more details in a modal popup.
- **Responsive Layout:**
  - Toggle between grid and list views.
- **Theme Toggle:**
  - Switch between dark and light modes.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Run this command in your terminal:**
   json-server --watch suits.json
   
3. **Open the Project:**
   Since this is a frontend-only project, open the index.html file in your web browser.
   
4. **Data Setup:**
   The suit data is stored in suits.json. You can modify or add new suit objects as needed.

## Usage

1. **Filtering:**
You can filter the displayed suits using the dropdown (for style), text input (for color), and number input (for max price).

2. **Search:**
Type keywords in the search input to filter suits by brand or details.

3. **View Details:**
Click on any suit card to open a modal with detailed information.

4. **Toggle Views:**
Use the "Grid View" and "List View" buttons to change how the suits are displayed.

5. **Dark/Light Mode:**
Use the dark mode toggle to switch the theme of the application.

## Folder Structure
PHASE1PROJECT/
├── index.html        # Main HTML file
├── styles.css        # CSS for styling and responsiveness
├── index.js          # JavaScript for data fetching, filtering, and interactivity
├── suits.json        # JSON file with suit data
└── README.md         # This README file

## Technologies Used
HTML5: For semantic structure and layout.

CSS: For modern styling, transitions, and responsive design (Flexbox and Grid).

JavaScript: For asynchronous data fetching, event handling, and DOM manipulation.
