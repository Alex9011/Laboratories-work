const fn = () => {
    const first = { name: "Nikolai" };
    
    let second = { name: "Aristotle" };
    
    first.name = "Nikolai Aristotle";
    second.name = "Ptolemy Philopator";
    
    second = { name: "Updated Entry" };
    
    return { first, second };
};

const createUser = (fullName, location) => {
    return { fullName, location };
};

const phonebook = [
    { name: "Nikolai Aristotle", phone: "+380991112233" },
    { name: "Ptolemy Philopator", phone: "+380994445566" },
    { name: "Cicero", phone: "+380997778899" },
];

const findPhoneByName = (name) => {
    for (let j = 0; j < phonebook.length; j++) {
        if (phonebook[j].name === name) {
            return phonebook[j].phone;
        }
    }
    return undefined;
};

const phonebookHash = {
    "Marcus Aurelius": "+380445554433",
    "Julius Caesar": "+380445554434",
    "Cicero": "+380445554435",
};

const findPhoneByNameHash = (name) => {
    return phonebookHash[name];
};

console.log(fn());
console.log(createUser("Hanna", "Kyiv"));
console.log(findPhoneByName("Cicero"));
console.log(findPhoneByNameHash("Cicero"));

export { 
    fn, 
    createUser, 
    phonebook, 
    findPhoneByName, 
    phonebookHash, 
    findPhoneByNameHash 
};
