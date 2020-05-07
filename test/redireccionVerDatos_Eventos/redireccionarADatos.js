describe("redireccionarADatos", function() {
    it("should pass", function() {
    ST.play([
        { type: "tap", target: "@imagen2", x: 187, y: 141 },
        { type: "mouseup", target: "@imagen2", x: 187, y: 141, detail: 1 },
        { fn: function(){
            expect(this.future.target.innerHTML).toBe(" Visualización de datos de la base de datos");
            }, target: "@pHeader", x: 87, y: 13 }
    ]);
        
        
        expect(1).toBe(1);
    });
});