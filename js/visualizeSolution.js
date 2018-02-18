(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    /**
     * Создает визуализацию нахождения количества островов
     *
     * @param {number[][]} map карта островов
     */
    function visualizeSolution(map) {
        var checkMatrix = [],
            result = 0;

        for (var i = 0; i < map.length; i++) {
            checkMatrix.push([]);
            for (var j = 0; j < map[i].length; j++) {
                checkMatrix[i].push(false); // заполняет checkMatrix значениями 'false' - значит, пока ни одна клетка не проверена
            }
        }

        var i = -1,
            time = map[0].length * 250;

        document.querySelectorAll('.map .map__res')[0].innerHTML = "Count: 0";

        setTimeout(function visualizeRows() {
            if (i === map.length - 1) {
                return;
            }
            var j = 0;
            setTimeout(function visualizeCells() {
                if (j === map[0].length) {
                    return;
                }
                document.querySelectorAll('.map .map__row')[i].querySelectorAll('.map__cell')[j].style.opacity = '0.5';
                if (map[i][j] && !checkMatrix[i][j]) {
                    result++;
                    checkAroundVisual(map, i, j);
                    document.querySelectorAll('.map .map__res')[0].innerHTML = "Count: " + result;
                }
                j++;
                setTimeout(visualizeCells, 200);
            }, 200);
            i++;
            setTimeout(visualizeRows, time)
        }, time);


        /**
         * Функция проверяет и отмечает в проверочной матрице и визуально клетки с "сушей" вокруг текущей клетки
         *
         * @param {number[][]} map карта островов представленная двумерной матрицей чисел
         * @param {number} i координата клетки в строке
         * @param {number} j координата клетки в стоблце
         */

        function checkAroundVisual(map, i, j) {
            if (i < 0 || j < 0 || i >= map.length || j >= map[i].length || !map[i][j] || checkMatrix[i][j]) {
                return;
            }
            document.querySelectorAll('.map .map__row')[i].querySelectorAll('.map__cell')[j].style.opacity = '0.5';
            checkMatrix[i][j] = true;
            checkAroundVisual(map, i - 1, j);
            checkAroundVisual(map, i + 1, j);
            checkAroundVisual(map, i, j - 1);
            checkAroundVisual(map, i, j + 1);
        }

        return;

    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
