let arr = [1, 2, 3];
let str = 'hello'

let invert = data => {
    if (!data.length || !Array.isArray) {
        return 'not a string or not is array'
    };

    if (Array.isArray) {
        for (let i = 0, j = data.length - 1; i < j; i++, j--) {
            temp = data[i];
            data[i] = data[j];
            data[j] = temp
        }
    };
    if (typeof data == 'string') {
        let word = data.split('');
        let j = word.length - 1;
        for (let i = 0; i < j; i++, j--) {
            temp = word[i];
            word[i] = word[j];
            word[j] = temp
        }
        return word.join('')
    }
    return data
};

console.log(invert(arr), invert(str));
