//factory function for character
const characterFactory = (name, element) => {
    const sayChoice = () => console.log('You Choose');
    return {name, element, sayChoice}
};

//factory function for weapon
const weaponFactory = (name, damage, element) => {
    const multiplyer = () => {if (element == "Fire") {
        return (damage * 2);
    } else if (element == "Hydro") {
        return (damage * 1.5);
        } else {
            return (damage*1)
        }
    }
    return {name, damage, element, multiplyer};
};


//Maybe need to just create one factory with all of this inside of it?
//Damage calculator factory
// const damageFactory = enemy => {
//     if (lev)
// }



const keqing = characterFactory('Keqing', 'Electro');

console.log(keqing.name);
console.log(keqing.element);

keqing.sayChoice();

const diona = characterFactory('Diona', 'Cryo');
console.log(diona);

const diluc = characterFactory('Diluc', 'Fire');
console.log(diluc);

const childe = characterFactory('Childe', 'Hydro');
console.log(childe);

const battlePassBow = weaponFactory('bp bow', 100, "Fire");
console.log(battlePassBow);
console.log(battlePassBow.multiplyer());

const blacksword = weaponFactory("black sword", 150, "Electro");
console.log(blacksword.name);
console.log(blacksword.multiplyer());


const modulePatternTest = (() => {
const damage = (a, b) => a + b;
const number = () => {
    console.log("Hello module test")
};

return {
    damage, number,
};
})();

modulePatternTest.damage(2,2);
modulePatternTest.number();