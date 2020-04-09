describe("usoCombobox", function() {
    it("Llegamos a la página de calculadora", function() {
    /*ST.play([
        { type: "tap", target: "@Seleccion", x: 110, y: 10 },
        { type: "tap", target: "@/aside", x: 44, y: 46 }
    ]);*/
       ST.element('select[id="Seleccion"]').click();
       ST.element("@/aside")
       .click()
       .and(function(){
           ST.navigate("http://localhost:11080/EFisica/calculadora.html");
       });
    ST.element('img[id="volver"]')
    .get("id")
    .and(function(){
        expect(this.future.data.id).toBeDefined();
    });
    ST.element('input[id="resultado"]')
    .get("value")
    .and(function(){
        expect(this.future.data.value).toEqual("0");
    });
    });
});