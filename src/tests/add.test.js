const add = (a, b) => { return a + b };
const getgreeting = (name) => { return `Hello ${name}` };

test('should add two numbers', () => {
    const result = add(3, 4);

    // if (result !== 7) {
    //     throw new Error(`expected 7 reult is ${result}`);
    // }

    expect(result).toBe(7);
});

test('welcome message',()=>{
    const name=getgreeting('Bhagi');
    expect(name).toBe('Hello Bhagi');
});