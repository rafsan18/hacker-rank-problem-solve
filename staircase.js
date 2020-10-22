function staircase(n) {
    let output = "";

    for (let i = 0; i < n; i++) {
        for (let space = n - 1; space > i; space--) {
            output += " ";
        }

        for (let hash = 0; hash <= i; hash++) {
            output += "#";
        }
        output += "\n";
    }
    return output;
}
