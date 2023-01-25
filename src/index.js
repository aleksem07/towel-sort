// You should implement your task here.
module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 1 == 0 && i % 2 !== 0) {
                const arrReverse = matrix[i].sort((a, b) => b - a);

                for (let j = 0; j < arrReverse.length; j++) {
                    result.push(arrReverse[j]);
                }
            } else {
                const arrInOrder = matrix[i];

                for (let j = 0; j < arrInOrder.length; j++) {
                    result.push(arrInOrder[j]);
                }
            }
        }

        return result;
    }
};
