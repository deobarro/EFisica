describe("irAInsertarDatos", function() {
    it("Existencia de una tabla es correcto", function() {
    
    ST.element('img[id="imagen1"]').click();
    ST.element('td[name="Flexiones"]')
    .get("innerHTML")
    .and(function(){
        expect(this.future.data.innerHTML).toBe("Flexiones");
        });
    });
});