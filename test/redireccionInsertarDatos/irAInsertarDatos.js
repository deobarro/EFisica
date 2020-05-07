describe("irAInsertarDatos", function() {
    it("Existencia de una tabla es correcto", function() {
    
    /*ST.element('img[id="imagen1"]').click();
    ST.element('td[name="Flexiones"]')
    .get("innerHTML")
    .and(function(){
        expect(this.future.data.innerHTML).toBe("Flexiones");
        });*/
    ST.play([
        { type: "tap", target: "@imagen1", x: 115, y: 91 },
        { type: "tap", target: "//body/section[1]/div[1]/table[1]/thead[1]/tr[1]/td[1]", x: 30, y: 9 }
    ]);
        expect("//body/section[1]/div[1]/table[1]/thead[1]/tr[1]/td[1]").toBeDefined();
    });
});