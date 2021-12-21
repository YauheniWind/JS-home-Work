let arr = [1, "str", 24, { name: "Ivan" }, 89, 'undeifined', "10"];

[firstElement, secondElement, , , fifthElement, ...otherElement] = arr;

console.log(firstElement, secondElement, fifthElement, otherElement);