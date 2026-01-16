
/**
 * @param values The radioactivity values measured by the sensor
 * @return The total number of top peaks and bottom peaks found in the radioactivity values.
 */
function countPeaks(values: number[]): number {

    let result = 0;

        for (let i = 1; i < values.length - 1; i++) {
           /*
            if (((Math.abs(values[i] - values[i - 1]) > 5) && (Math.abs(values[i] - values[i + 1]) > 5)) || 
                (Math.abs(values[i] - values[i - 1]) < 5) && (Math.abs(values[i] - values[i + 1]) < 5)) {
                    result++
           }
           */

            const isTopPeak =
                values[i] > values[i - 1] &&
                values[i] > values[i + 1] &&
                (Math.abs(values[i] - values[i - 1]) >= 5) && 
                (Math.abs(values[i] - values[i + 1]) >= 5);

           const isBottomPeak =
                values[i] < values[i - 1] &&
                values[i] < values[i + 1] &&
                (Math.abs(values[i] - values[i - 1]) >= 5) && 
                (Math.abs(values[i] - values[i + 1]) >= 5);

           if (isTopPeak || isBottomPeak) {
                result++;
           }
        }

        console.log('result --> ', result);

    return result;
}
countPeaks([8, 10.7, 17.1, 11.2, 13.5, 9.9, 14.9, 9.4, 9.4, 3.1, 12.7]);
