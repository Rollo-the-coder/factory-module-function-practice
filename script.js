const characterFactory = (name, element) => {
    const sayChoice = () => console.log('You Choose');
    return {name, element, sayChoice}
};

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

const battlePassBow = weaponFactory('bp bow', 100, "Fire");
console.log(battlePassBow);
console.log(battlePassBow.multiplyer());

const blacksword = weaponFactory("black sword", 150, "Electro");
console.log(blacksword.name);
console.log(blacksword.multiplyer());