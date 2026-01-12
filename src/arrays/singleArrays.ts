const arr = () => {
    const arr1 : number[] = [1,2,3,4,5];
    const arr2 : string[] = ['a','b','c','d','e'];
    const arr3 : boolean[] = [true, false, true, false];
    const arr4 : any[] = [1, 'a', true, 2, 'b', false];
    return {arr1, arr2, arr3, arr4};
};

const main = () => {
    let numbers: number[] = [10, 20, 30, 40, 50];

    console.log('1st element: ' + numbers[0]); // 10
    console.log('4th element:' + numbers[3]); // 40

    numbers[2] = 35; // Update 3rd element
    console.log('Updated 3rd element: ' + numbers[2]); // 35

    console.log('Array length: ' + numbers.length); // 5

    for (let i = 0; i < numbers.length; i++){
        console.log('Element at index ' + i + ': ' + numbers[i]);
    }

    numbers.forEach((value, index) => {
        console.log('Element at index ' + index + ': ' + value);
    })
};