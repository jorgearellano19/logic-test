let number = 4;
let arrayInput = [
    [1,1],
    [1,3],
    [2,1],
    [2,2],
    [3,1],
    [3,3],
    [1,4],
    [4,6],
    [1000,1000]
]

function defineFinalDirection(arrayInput) {
    let array= [];
    for(let pair of arrayInput) {
        const row = pair[0];
        const column = pair[1];

        if(row === column) {
            if(column % 2 === 0) {
                array.push('L');
            }
            else {
                array.push('R');
            }
        } else if(column > row) {
            if(row % 2 === 0) {
                array.push('L');
            }
            else {
                array.push('R');
            }
        } else {
            if(column % 2 === 0) {
                array.push('U');
            }
            else {
                array.push('D');
            }
        }
    }
    return array.join(' ');
}

console.log(defineFinalDirection(arrayInput));