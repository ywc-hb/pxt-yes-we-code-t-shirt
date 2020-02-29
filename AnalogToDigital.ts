function analog2digital (pin: number): boolean {
    let limit: number = 600;
    if (pin > limit) {
        return (true);
    }
    else {
        return (false);
    }
}