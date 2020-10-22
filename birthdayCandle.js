let candles = [3, 2, 1, 3];

function birthdayCakeAndCandles(candles) {
    let numberOfTallestCandle = 0;

    let tallestCandle = Math.max(...candles);
    for (let i = 0; i < candles.length; i++) {
        if (tallestCandle === candles[i]) {
            numberOfTallestCandle++;
        }
    }

    // Alternate way of finding max;
    //let tallestCandle = candles[1];
    //     for (let i = 0; i < candles.length; i++) {
    //         if (candles[i] > tallestCandle) {
    //             tallestCandle = candles[i];
    //         }
    //     }

    return numberOfTallestCandle;
}
