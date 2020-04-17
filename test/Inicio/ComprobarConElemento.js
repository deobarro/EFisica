describe("ComprobarPáginaUsandoElementos ", function() {
    it("Que se carga la función",function(){

        ST.element('h1')
        .get("innerHTML")
        .and(function(){
            expect(this.future.data.innerHTML).toBe("EFisica");
        });
    });
  
    it("Redireccionamos a la página de insertar datos",function(){
        ST.element('img[title="Insertar Datos"]').click();
        ST.element('p[id="pHeader"]')
        .get("id,innerHTML")
        .and(function(){
            expect(this.future.data.id).toBeDefined();
            expect(this.future.data.innerHTML).toBe(" Introducimos datos para guardar en la BBDD");
        });
    });
});