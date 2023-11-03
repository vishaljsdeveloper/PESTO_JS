//DYNAMIC CONTEXT : CREATING A DEBOUNCE FUNCTION
// const debounce require('lodash/debounce'); 
function debounce(fn, waitTime) {
    let timeoutID;
    return function (...args) {
        clearTimeout(timeoutID);
        const context = this;
        timeoutID = setTimeout(() => {
            fn.call(context, ...args);
        }, waitTime);
    }
}
let user = {
    name: 'arfat',
    printName(number) {
        console.log(`${number} ${this.name}`);
    },
};
const debounced = debounce(user.printName, 5000);
for (let i = 0; i < 5; i++) {
    debounced.call(user, i);
}