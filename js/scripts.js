


// Declare the Object of Village, with name, 
// number of villagers and array of villager objects 
function Village(villageName, villageCulture, villagersAmount, villagersList, villageSizeDescriptor, villageSizeModifier) {
  this.villageName = villageName;
  this.villageCulture = villageCulture;
  this.villagersAmount = villagersAmount;
  this.villagersList = villagersList;
  this.villageSizeDescriptor = villageSizeDescriptor;
  this.villageSizeModifier = villageSizeModifier;
};

Village.prototype.villageName = function() {
  return this.villageName;
};
Village.prototype.villageCulture = function() {
  return this.villageCulture;
};
Village.prototype.villagersAmount = function() {
  return this.villagersAmount;
};
Village.prototype.villagersList = function() {
  return this.villagersList;
};
Village.prototype.villageSizeDescriptor = function() {
  return this.villageSizeDescriptor;
};
Village.prototype.villageSizeModifier = function() {
  return this.villageSizeModifier;
};
console.log("Village created correctly");


// Declare the Object of Villager with preset first_name
function Villager(firstName) {
  this.firstName = firstName;
};
Villager.prototype.firstName = function() {
  return this.firstName;
};
console.log("Villager created correctly");

// Random Number Generator for incremental village size choices
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
};

function villagersAmountCalculation() {
// Gather input for Village Creation
    var villageSizeInput = parseInt($("#size").val());
    villagersAmount = 0;
    var villageSizeDescriptor = "";
    villageSizeModifier = 0;
// Use manual input for amount of villagers if selected and input is given
// Otherwise take villageSizeInput to switch to right random number range
    if (villageSizeInput == 0 && $("input#amount").val() == "") {
      alert("Please enter a value if you choose manual input!")
    } else if (villageSizeInput == 0 ) {
      villagersAmount = parseInt($("input#amount").val());
    } else if (villageSizeInput == 1){
      villagersAmount = Math.floor(getRandom(0, 50000));
    } else {
      switch (villageSizeInput) {
        case 2:
          villagersAmount = Math.floor(getRandom(0, 100));          
          break;
        case 3:
          villagersAmount = Math.floor(getRandom(100, 500));         
          break;
        case 4:
          villagersAmount = Math.floor(getRandom(500, 1000));          
          break;
        case 5:
          villagersAmount = Math.floor(getRandom(1000, 2000));
          break;
        case 6:
          villagersAmount = Math.floor(getRandom(1000, 5000));
          break;
        case 7:
          villagersAmount = Math.floor(getRandom(5000, 10000));
          break;
        case 8:
          villagersAmount = Math.floor(getRandom(10000, 25000));
          break;
        case 9:
          villagersAmount = Math.floor(getRandom(25000, 50000));          
          break;
      }
    }
    return villagersAmount;
  }

var villagersAmount = villagersAmountCalculation();

$(document).ready(function() {
  $("form#create_village").submit(function(event) {
    event.preventDefault();

// Take villagersAmount to set corresponding verbal size descriptor
    if (villagersAmount < 100)  {
      villageSizeDescriptor = "Thorp";
      villageSizeModifier = -3;
      if (Math.random() > 0.95) {
        villageSizeModifier = 7;
      }
    } else if (villagersAmount < 500) {
      villageSizeDescriptor = "Hamlet";
      villageSizeModifier = -2;
      if (Math.random() > 0.95) {
        villageSizeModifier = 8;
      }
    }else if (villagersAmount < 1000) {
      villageSizeDescriptor = "Village";
      villageSizeModifier = -1;
    }else if (villagersAmount < 2000) {
      villageSizeDescriptor = "Small Town";
      villageSizeModifier = -0;
    }else if (villagersAmount < 5000) {
      villageSizeDescriptor = "Large Town";
      villageSizeModifier = 3;
    }else if (villagersAmount < 10000) {
      villageSizeDescriptor = "Small City";
      villageSizeModifier = 6;
    }else if (villagersAmount < 25000) {
      villageSizeDescriptor = "Large City";
      villageSizeModifier = 9;
    }else {
      villageSizeDescriptor = "Metropolis";
      villageSizeModifier = 12;
    }
//create instance of Village and Villager
    //create random village name and village culture depending on selected town name
var dwarfSyllables = ["dwarf", "dwarf", "dwarf", "dwarf", "dwarf", "dwarf", "dwarf", "dwarf"];
var elfSyllables = ["elf", "elf", "elf", "elf", "elf", "elf", "elf", "elf"];
var gnomeSyllables = ["gnome", "gnome", "gnome", "gnome", "gnome", "gnome", "gnome", "gnome"];
var orcSyllables = ["orc", "orc", "orc", "orc", "orc", "orc", "orc", "orc"];
var halflingSyllables = ["halfling", "halfling", "halfling", "halfling", "halfling", "halfling", "halfling", "halfling"];
var humanSyllables = ["human", "human", "human", "human", "human", "human", "human", "human"];
var otherSyllables = ["other", "other", "other", "other", "other", "other", "other", "other"];
var villageName = "";
var villageCulture = "";

function createVillageName(){
    var syllables = []

    if (parseInt($("#name").val()) == 0)  {
      syllables = otherSyllables;
      villageCulture = "Other";
    } else if (parseInt($("#name").val()) == 1) {
      syllables = dwarfSyllables;
      villageCulture = "Dwarven";
    }else if (parseInt($("#name").val()) == 2) {
      syllables = elfSyllables;
      villageCulture = "Elven";
    }else if (parseInt($("#name").val()) == 3) {
      syllables = gnomeSyllables;
      villageCulture = "Gnomish";
    }else if (parseInt($("#name").val()) == 4) {
      syllables = orcSyllables;
      villageCulture = "Orcish";
    }else if (parseInt($("#name").val()) == 5) {
      syllables = halflingSyllables
      villageCulture = "Halfling";
    }else {
      syllables = humanSyllables;
      villageCulture = "Human";
    }
    //Creates a first name with 1-3 syllables
    var firstName = "";
    var numberOfSyllablesInFirstName = Math.floor(getRandom(2, 5));
    for (var i = 0; i < numberOfSyllablesInFirstName; i++)
    {
        firstName += syllables[Math.floor(getRandom(0, (syllables.length + 1)))]; 
    }
 
    var firstNameLetter = firstName[0];
    firstName = firstName.slice(1);
    firstNameLetter = firstNameLetter.toUpperCase();
    firstName = firstNameLetter + firstName;

    //Creates a second name with 2-4 syllables
    var secondName = "";
    var numberOfSyllablesInSecondName = Math.floor(getRandom(4, 6));
    for (var i = 0; i < numberOfSyllablesInSecondName; i++)
    {
        secondName += syllables[Math.floor(getRandom(0, (syllables.length + 1)))];
    }

    var secondNameLetter = secondName[0];
    secondName = secondName.slice(1);
    secondNameLetter = secondNameLetter.toUpperCase();
    secondName = secondNameLetter + secondName;

    var completeName = firstName + " " + secondName;
    return completeName;
}
    

    newVillage = new Village(villageName, villageCulture, villagersAmount, [], villageSizeDescriptor, villageSizeModifier)
    newVillage.villagersList = createVillagers();
    newVillage.villageName = createVillageName();

// Create output of Village
    $("#villageType").text(newVillage.villageSizeDescriptor);
    $("#villageCulture").text(newVillage.villageCulture);
    $("#villagersAmount").text(newVillage.villagersAmount);
    $("#villageName").text(newVillage.villageName);

// on click of button call functions in:
// racialPercentiles to calculate and insert values for racial makeup of village
// createVillagers to create the Villagers and insert their statblock into page
    document.getElementById("createButton").onclick = percentileCalculation(), percentileOutput();
// Reset manual Input Value
    $("input#amount").val("");
    $("input#name").val("");
  });
});
