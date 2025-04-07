describe("Calculadora", () => {

    it("Puede Sumar", () => {
        // Arrange
        const firstAddend: number = 1;
        const secondAddend: number = 2;
        
        // Act
        const result: number = firstAddend + secondAddend; 
        
        // Assert
        expect(result).toEqual(3);
    })

});