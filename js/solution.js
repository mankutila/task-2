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
        var checkMatrix = [],
            result = 0,
            i, j;

        for (i = 0; i < map.length; i++) {
            checkMatrix.push([]);
            for (j = 0; j < map[i].length; j++) {
                checkMatrix[i].push(false); // заполняет checkMatrix значениями 'false' - значит, ни одна клетка не проверена
            }
        }

        for (i = 0; i < map.length; i++) {
            for (j = 0; j < map[i].length; j++) {
                if (map[i][j] && !checkMatrix[i][j]) {
                    result++;
                    checkAround(map, i, j);
                }
            }
        }

        /**
         * Функция проверяет и отмечает в проверочной матрице клетки с "сушей" вокруг текущей клетки
         *
         * @param {number[][]} map карта островов представленная двумерной матрицей чисел
         * @param {number} i координата клетки в строке
         * @param {number} j координата клетки в стоблце
         */

        function checkAround(map, i, j) {
            if (i < 0 || j < 0 || i >= map.length || j >= map[i].length || !map[i][j] || checkMatrix[i][j]) {
                return;
            }
            checkMatrix[i][j] = true;
            checkAround(map, i - 1, j);
            checkAround(map, i + 1, j);
            checkAround(map, i, j - 1);
            checkAround(map, i, j + 1);
        }

        return result;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
