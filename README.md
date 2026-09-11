# Calc Engine Web

A client-side arithmetic evaluation tool focused on standard mathematical operations, direct DOM event binding, and input string safety.

## Overview

Most web math utilities suffer from raw string evaluation vulnerabilities or broken UI state when chaining multiple operator keypresses. This project provides a predictable calculator UI that handles backspace tracking, floating-point precision stabilization, operator swapping, and safer string evaluation without third-party runtime bundles.

## How It Works

1. **State Engine:** Tracks current display strings and updates UI state dynamically via vanilla JS functions (`appendValue`, `deleteLast`, `clearDisplay`).
2. **Input Sanitization:** Intercepts consecutive operator inputs (`+`, `-`, `*`, `/`) and overwrites the previous entry rather than appending broken sequences.
3. **Execution Safety:** Evaluates expressions using an anonymous function context (`new Function('return ' + expression)`) instead of standard global `eval()`.
4. **Precision Correction:** Catches output values and caps floating-point precision issues to 8 decimal places using `Number.toFixed(8)`.

## Key Features

* **Operator Swapping:** Prevents accidental dual operators by replacing the current operator if a new one is selected back-to-back.
* **Precision Handling:** Eliminates IEEE 754 precision bugs (e.g., `0.1 + 0.2` yielding long decimal noise) before rendering to UI.
* **Isolated Evaluation:** Bypasses direct scope pollution during expression evaluation.
* **Soft Warm Palette:** Custom styled interface layout designed with CSS Grid and flexbox positioning.

## Tech Stack Breakdown

* **HTML5:** Structural layout and markup structure for input buttons.
* **CSS3:** Custom styles utilizing CSS Grid (`grid-template-columns`, `span`) and soft color palette.
* **Vanilla JavaScript (ES6+):** Core DOM state logic, input sanitization, dynamic string slicing, and arithmetic evaluation.

## Prerequisites & Web-Based Quick Start

You don't need to install node packages or configure complex local tools to work on this repo.

### Option 1: Run directly via GitHub Codespaces (Browser Only)
1. Click the **Code** button at the top of this GitHub repository page.
2. Select the **Codespaces** tab and click **Create codespace on main**.
3. Once the web IDE loads, open `index.html` using a live preview extension (or right-click `index.html` and preview) to interact with the application directly inside your browser tab.

### Option 2: Local Setup
1. Clone or download the repository files (`index.html`, `style.css`, `script.js`).
2. Double-click `index.html` to open it directly in any modern browser.

## Repository Structure

```text
calc-engine-web/
├── .github/
│   └── workflows/
│       └── code-health.yml    # CI check verifying HTML/CSS formatting and JavaScript file sanity
├── .gitignore                  # Git tracking rules for system files and editor configs
├── index.html                  # Calculator DOM structure and button layout definitions
├── style.css                   # Custom Grid and visual design rules
├── script.js                   # State logic, input sanitization, and calculation engine
└── LICENSE                     # MIT License specification
```

## Roadmap

[ ] Keyboard listener integration (KeyDown bindings for numeric keys and Enter/Escape).

[ ] Calculation history log overlay panel.

[ ] Extended math operators (square root, power, modulo).
