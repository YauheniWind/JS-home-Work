function CreateUsers(first_name, second_name, age, city) {
    this.first_name = first_name
    this.second_name = second_name;
    this.age = age;
    this.city = city;
};

user_one = new CreateUsers('Ivan', 'Ivanov', 23, 'Bratislava');
user_two = new CreateUsers('Pasha', 'Vanko', 55, 'Minsk');

console.log(user_one, user_two)