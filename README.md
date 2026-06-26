# Spellcaster

Each character in the string represents a spell.  Taken from [freeCodeCamp Coding Challenge on Spellcaster](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-06-17)

## UX

**Getting Started**

Enter the letters (f, l, i, w, h or s) in upper or lower case.  You will see the total score being calculated, unless you enter a character other than f, l, i, w, h or s.  Click on the `Clear` button to start again.

**User Stories**

- As a user, if I enter a character other than f, l, i, w, h or s in upper or lower case, I expect the error message to be displayed.
- As a user, if I enter `fihwl`, I should get `33`.
- As a user, if I enter `lwswfi`, I should get `45`.
- As a user, if I enter `wislhfl`, I should get `37`.
- As a user, if I enter `sihwlih`, I should get `50`.
- As a user, if I enter `wishlfihwslwifihl`, I should get `101`.
- As a user, if I click on the `Clear` button, I expect the information to be empty.

## Features

Allows the user to enter a string of spell codes that are to be casted.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.2 and jQuery 3.7.1.

## Testing

To preview, use the command `python3 -m http.server` and press `Enter`.  Check that all user stories have been met.

- HTML
    - [W3C]

## Deployment

On [GitHub Pages](https://derektypist.github.io/spellcaster) at the main branch.

## Credits

### Acknowledgements

- [freeCodeCamp](https://www.freecodecamp.org)