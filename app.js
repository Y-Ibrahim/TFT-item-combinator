

/* VARIABLES */
const itemRollEl = document.querySelector(".itemroll");
const itemImage1El = document.querySelector(".image1");
const itemImage2El = document.querySelector(".image2");
const itemImage3El = document.querySelector(".image3");
const itemRollBtn = document.querySelector(".roll");
const checkAnsBtn = document.querySelector("check-answer");
const answer = document.querySelector("answer");

const items = {
    "base": {
        "bfsword": { 
            "name": "B. F. Sword", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ab/B._F._Sword_item.png/revision/latest/scale-to-width-down/46?cb=20171221055309" 
        },
        "recurve": { 
            "name": "Recurve Bow", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8e/Recurve_Bow_item.png/revision/latest/scale-to-width-down/46?cb=20171221230740" 
        },
        "largerod": { 
            "name": "Needlessly Large Rod", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/13/Needlessly_Large_Rod_item.png/revision/latest/scale-to-width-down/46?cb=20171221224553" 
        },
        "tear": { 
            "name": "Tear of the Goddess", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/Tear_of_the_Goddess_item.png/revision/latest/scale-to-width-down/46?cb=20171221235705" 
        },
        "chainvest": { 
            "name": "Chain Vest", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/89/Chain_Vest_item.png/revision/latest/scale-to-width-down/46?cb=20171221061215" 
        },
        "negatron": { 
            "name": "Negatron Cloak", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/ff/Negatron_Cloak_item.png/revision/latest/scale-to-width-down/46?cb=20171221224611" 
        },
        "giantsbelt": { 
            "name": "Giant's Belt", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/68/Giant%27s_Belt_item.png/revision/latest/scale-to-width-down/46?cb=20171221184045" 
        },
        "spatula": { 
            "name": "Spatula", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/dc/Spatula_item.png/revision/latest/scale-to-width-down/46?cb=20190618214319" 
        }
    },
    "combination": {
        "ie": { 
            "name": "Infinity Edge",
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/15/Infinity_Edge_item.png/revision/latest/scale-to-width-down/46?cb=20180531105945",
            "items": ["bfsword", "bfsword"]
        },
        "sworddivine": { 
            "name": "Sword of the Divine", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9c/Sword_of_the_Divine_item.png/revision/latest/scale-to-width-down/46?cb=20171223020826",
            "items": ["bfsword", "recurve"]
        },
        "gunblade": { 
            "name": "Hextech Gunblade", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/64/Hextech_Gunblade_item.png/revision/latest/scale-to-width-down/46?cb=20171221185631",
            "items": ["bfsword", "largerod"]
        },
        "shojin": { 
            "name": "Spear of Shojin", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1c/Spear_of_Shojin_item.png/revision/latest/scale-to-width-down/46?cb=20180601205626",
            "items": ["bfsword", "tear"]
        },
        "guardianangel": { 
            "name": "Guardian Angel", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f4/Guardian_Angel_item.png/revision/latest/scale-to-width-down/46?cb=20171221184244",
            "items": ["bfsword", "chainvest"] 
        },
        "bloodthirster": { 
            "name": "Bloodthirster", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8b/Bloodthirster_item.png/revision/latest/scale-to-width-down/46?cb=20171221184244",
            "items": ["bfsword", "negatron"] 
        },
        "zekes": { 
            "name": "Zeke's Herald", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/54/Zeke%27s_Herald_item.png/revision/latest/scale-to-width-down/46?cb=20171223022057",
            "items": ["bfsword", "giantsbelt"] 
        },
        "ghostblade": { 
            "name": "Youmuu's Ghostblade", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/41/Youmuu%27s_Ghostblade_item.png/revision/latest/scale-to-width-down/46?cb=20171222002403",
            "items": ["bfsword", "spatula"] 
        },
        "rapidfirecannon": { 
            "name": "Rapid Firecannon", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/92/Rapid_Firecannon_item.png/revision/latest/scale-to-width-down/46?cb=20171221230310",
            "items": ["recurve", "recurve"] 
        },
        "rageblade": { 
            "name": "Guinsoo's Rageblade", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/95/Guinsoo%27s_Rageblade_item.png/revision/latest/scale-to-width-down/46?cb=20171221184548",
            "items": ["recurve", "largerod"] 
        },
        "statikk": { 
            "name": "Statikk Shiv", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f8/Statikk_Shiv_item.png/revision/latest/scale-to-width-down/46?cb=20171221234015",
            "items": ["recurve", "tear"] 
        },
        "phantom": { 
            "name": "Phantom Dancer", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/ce/Phantom_Dancer_item.png/revision/latest/scale-to-width-down/46?cb=20171221225341",
            "items": ["recurve", "chainvest"] 
        },
        "cursedblade": { 
            "name": "Cursed Blade", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ea/Dervish_Blade_item.png/revision/latest/scale-to-width-down/46?cb=20171222233219",
            "items": ["recurve", "negatron"] 
        },
        "titanic": { 
            "name": "Titanic Hydra", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/22/Titanic_Hydra_item.png/revision/latest/scale-to-width-down/46?cb=20171222000417",
            "items": ["recurve", "giantsbelt"] 
        },
        "bladeruinedking": { 
            "name": "Blade of the Ruined King", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2f/Blade_of_the_Ruined_King_item.png/revision/latest/scale-to-width-down/46?cb=20171221055759",
            "items": ["recurve", "spatula"] 
        },
        "rabadon": { 
            "name": "Rabadon's Deathcap", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Rabadon%27s_Deathcap_item.png/revision/latest/scale-to-width-down/46?cb=20171221230209",
            "items": ["largerod", "largerod"] 
        },
        "ludens": { 
            "name": "Luden's Echo", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7b/Luden%27s_Echo_item.png/revision/latest/scale-to-width-down/46?cb=20171221223026",
            "items": ["largerod", "tear"] 
        },
        "locket": { 
            "name": "Locket of the Iron Solari", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/56/Locket_of_the_Iron_Solari_item.png/revision/latest/scale-to-width-down/46?cb=20171221222514",
            "items": ["largerod", "chainvest"] 
        },
        "ionic": { 
            "name": "Iconic Spark", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9c/Ionic_Spark_item.png/revision/latest/scale-to-width-down/46?cb=20171223001148",
            "items": ["largerod", "negatron"] 
        },
        "morello": { 
            "name": "Morellonomicon", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7b/Morellonomicon_item.png/revision/latest/scale-to-width-down/46?cb=20180220141954",
            "items": ["largerod", "giantsbelt"] 
        },
        "yuumi": { 
            "name": "Yuumi", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/You_and_Me%21.png/revision/latest/scale-to-width-down/46?cb=20190426210438",
            "items": ["largerod", "spatula"] 
        },
        "seraphs": { 
            "name": "Seraph's Embrace", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b9/Seraph%27s_Embrace_item.png/revision/latest/scale-to-width-down/46?cb=20171221232010",
            "items": ["tear", "tear"] 
        },
        "frozenheart": { 
            "name": "Frozen Heart", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/58/Frozen_Heart_item.png/revision/latest/scale-to-width-down/46?cb=20171221183105",
            "items": ["tear", "chainvest"] 
        },
        "hush": { 
            "name": "Hush", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/66/Hush_item.png/revision/latest/scale-to-width-down/46?cb=20190618223755",
            "items": ["tear", "negatron"] 
        },
        "redemption": { 
            "name": "Redemption", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/94/Redemption_item.png/revision/latest/scale-to-width-down/46?cb=20171221230755",
            "items": ["tear", "giantsbelt"] 
        },
        "darkin": { 
            "name": "Darkin", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/de/World_Ender.png/revision/latest/scale-to-width-down/46?cb=20180612213606",
            "items": ["tear", "spatula"] 
        },
        "thornmail": { 
            "name": "Thornmail", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4f/Thornmail_item.png/revision/latest/scale-to-width-down/46?cb=20171222000136",
            "items": ["chainvest", "chainvest"] 
        },
        "swordbreaker": { 
            "name": "Sword Breaker", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e8/Sword_Breaker_item.png/revision/latest/scale-to-width-down/46?cb=20190618223710",
            "items": ["chainvest", "negatron"] 
        },
        "redbuff": { 
            "name": "Red Buff", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e7/Red_BramblebackSquare.png/revision/latest/scale-to-width-down/46?cb=20140620025406",
            "items": ["chainvest", "giantsbelt"] 
        },
        "knightsvow": { 
            "name": "Knight's Vow", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fb/Knight%27s_Vow_item.png/revision/latest/scale-to-width-down/46?cb=20171221222310",
            "items": ["chainvest", "spatula"] 
        },
        "dragonsclaw": { 
            "name": "Dragon's Claw", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fd/Dragon%27s_Claw_item.png/revision/latest/scale-to-width-down/46?cb=20190618223744",
            "items": ["negatron", "negatron"] 
        },
        "zephyr": { 
            "name": "Zephyr", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/11/Zephyr_item.png/revision/latest/scale-to-width-down/46?cb=20171222002733",
            "items": ["negatron", "giantsbelt"] 
        },
        "hurricane": { 
            "name": "Runaan's Hurricane", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f5/Runaan%27s_Hurricane_item.png/revision/latest/scale-to-width-down/46?cb=20171221231511",
            "items": ["negatron", "spatula"] 
        },
        "warmogs": { 
            "name": "Warmog's Armor", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9f/Warmog%27s_Armor_item.png/revision/latest/scale-to-width-down/46?cb=20171222001951",
            "items": ["giantsbelt", "giantsbelt"] 
        },
        "frozenmallet": { 
            "name": "Frozen Mallet", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ac/Frozen_Mallet_item.png/revision/latest/scale-to-width-down/46?cb=20171221183138",
            "items": ["giantsbelt", "spatula"] 
        },
        "forcenature": { 
            "name": "Force of Nature", 
            "image": "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/37/Force_of_Nature_item.png/revision/latest/scale-to-width-down/46?cb=20171222235224",
            "items": ["spatula", "spatula"] 
        }
    }
}

let lastItem, randomItem, item1, item2, html, ItemText, isOpaque = false;


/* FUNCTIONS */
function getRandomItem(obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]]; // Shifting by 0 floors the returned float.
}

function setImageAndTitle(element, itemBase) {
    if (!itemBase.hasOwnProperty("image") && !itemBase.hasProperty("name")) {
        console.error(`${itemBase} does not have the required properties.`);
        return;
    }
    
    element.src = itemBase.image;
    element.title = itemBase.name;
    console.log(`Item is ${itemBase.name}`);
  document.getElementById("sample-text").innerHTML =`<h3 class="sample">Item is ${itemBase.name}<h3>`;
}

console.log(setImageAndTitle);
/* EVENT LISTENERS */
itemRollBtn.addEventListener("click", (e) => {   
    if (!isOpaque) {
        isOpaque = !isOpaque;
        itemImage1El.style.opacity = 1;
        itemImage2El.style.opacity = 1;
    }
    
    itemImage3El.style.opacity = 1;
    
    // Reroll if same item combination is selected
    while (lastItem == randomItem) {
        randomItem = getRandomItem(items.combination);
    }
    console.log(randomItem);
    [item1, item2] = [randomItem.items[0], randomItem.items[1]];
  
    setImageAndTitle(itemImage1El, items.base[item1]);
    setImageAndTitle(itemImage2El, items.base[item2]);
    setImageAndTitle(itemImage3El, randomItem);
    
    lastItem = randomItem; // set the last item to the current random item
});

// event listener for the combination item to be transparent until you click it.
// like a flash card.
itemImage3El.addEventListener("click", e => {
   e.target.style.opacity = 1; 
});






function myFunction() {
    var x = document.getElementById("answer");
    if (x.style.display === "block") {
       
      x.style.display = "none";
    //   document.getElementById("sample-text").innerHTML =`<h3 class="sample">Item is ${itemBase.name}<h3>`;
    } else {
      x.style.display = "block";
    }
  }
  
