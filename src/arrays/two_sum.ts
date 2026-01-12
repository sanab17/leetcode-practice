function query(arr: number[], i: number, j: number): number {
    let answer = 0;
    for (let k = i; k <= j; k++) {
        answer = answer + arr[k];
    }
    return answer;
}

