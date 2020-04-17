describe("redireccionVerDatos", function() {
    it("Redireccionamos a la página de consultar datos", function() {
        
        ST.element('img[title="Consultar Datos"]').click();
        ST.element('p[id="pHeader"]')
        .get("id,innerHTML")
        .and(function(){
            expect(this.future.data.id).toBeDefined();
            expect(this.future.data.innerHTML).toBe(" Visualización de datos de la base de datos");
        });
    });
});