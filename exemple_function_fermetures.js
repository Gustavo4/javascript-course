function timer() {
    let secondes = 0;

    let maClosure = () => {
        return ++secondes; // ++ avant pour retourner la valeur tout suite = pré-incrémentation = 1, 2, 3...
    };
    return maClosure;
}

let monTimer = timer();
console.log(monTimer()); // 1
console.log(monTimer()); // 2
console.log(monTimer()); // 3

let monDeuxiemeTimer = timer();
console.log(monDeuxiemeTimer()); // 1