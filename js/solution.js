(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте
        let i, j,
            checkMatrix = [],
            result = 0;

        for (i = 0; i < map.length; i++) {
            checkMatrix.push([]);
            for (j = 0; j < map[i].length; j++) {
                checkMatrix[i].push(false); // fill checkMatrix with 'false' - no cell is checked
            }
        }

        for (i = 0; i < map.length; i++) {
            for (j = 0; j < map[i].length; j++) {
                if (map[i][j]) {
                    checkAround(map, i, j);
                    if (!checkMatrix[i][j]) {
                        result++;
                        checkMatrix[i][j] = true;
                    }
                }
            }
        }

        function checkAround(map, i, j) {
            if (i < map.length - 1) {
                if (map[i + 1][j]) { checkMatrix[i + 1][j] = true; }
                if (map[i + 1][j] && map[i + 1][j - 1]) { checkMatrix[i + 1][j - 1] = true; }
            }
            if (map[i][j + 1]) { checkMatrix[i][j + 1] = true }
        }

        return result;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
