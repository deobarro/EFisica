describe("redireccionEliminarDatos", function() {
    it("Redireccionamos a la página de consultar datos", function() {
        
        ST.element('img[title="Eliminar Datos"]').click();
        ST.element('p[id="pHeader"]')
        .get("id,innerHTML")
        .and(function(){
            expect(this.future.data.id).toBeDefined();
            expect(this.future.data.innerHTML).toBe(" Eliminación de datos de la base de datos");
        });
    });
});