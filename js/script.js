$('#results').html(``);

// Function to Calculate Total Score
function cast(spells) {
  spells = spells.toLowerCase();
  const lookup = {
    "f": {"name": "Fire", "category": "Destruction", "score": 3},
    "l": {"name": "Lightning", "category": "Destruction", "score": 3},
    "i": {"name": "Ice", "category": "Control", "score": 2},
    "w": {"name": "Wind", "category": "Control", "score": 2},
    "h": {"name": "Heal", "category":"Restoration", "score": 1},
    "s": {"name": "Shield", "category": "Restoration", "score": 1}
  };
  let total = 0;
  let multiplier = 1;
  for (let i=0;i<spells.length;i++) {
    const {category, score} = lookup[spells[i]];
    const {category: prevType} = i > 0 ? lookup[spells[i-1]] ?? {} : {};
    multiplier = prevType && prevType !== category ? multiplier + 1 : 1;
    total += (score * multiplier);
  }
  return total;
}

// Keyup Event for Text Field
$('#mytext').on('keyup', () => {
  $('#results').html(``);
  const str = $('#mytext').val();
  const regex = /^[fhilsw]*$/gi;
  if (!regex.test(str)) {
    $('#results').html(`Invalid input.  Please enter the letters f, h, i, l, s or w (Upper or Lower Case). <br>`);
  } else {
    if (!str) {
      $('#results').html(``);
    } else {
      $('#results').append(`You have entered ${str} <br>`);
    $('#results').append(`${str} is ${cast(str)} <br>`);
    }
    
  }
});

// Click Event for Clear Button
$('#clearBtn').on('click', () => {
  $('#results').html(``);
});