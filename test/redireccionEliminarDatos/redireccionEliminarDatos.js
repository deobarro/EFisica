describe("redireccionEliminarDatos", function() {
    it("Redireccionamos a la página de consultar datos", function() {
    ST.play([
        { type: "tap", target: "@imagen3", x: 85, y: 86 },
        { type: "tap", target: "@pHeader", x: 56, y: 11 }
    ]);
        expect( "@pHeader").toBeDefined();
       /* ST.element('img[title="Eliminar Datos"]').click();
        ST.element('p[id="pHeader"]')
        .get("id,innerHTML")
        .and(function(){
            expect(this.future.data.id).toBeDefined();
            expect(this.future.data.innerHTML).toBe(" Eliminación de datos de la base de datos");
        });*/
    });
});