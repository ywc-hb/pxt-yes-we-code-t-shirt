function analog2digital (pin: number): number {
    let limit: number = 600;
    if (pin > limit) {
        return (1);
    }
    else {
        return (0);
    }
}