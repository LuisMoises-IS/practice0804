//const ADMIN =0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Luis',
    age: 28,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobbies of person.hobbies){
    console.log(hobbies);
}

if(person.role === Role.ADMIN){
    console.log('is Admin');
    
}