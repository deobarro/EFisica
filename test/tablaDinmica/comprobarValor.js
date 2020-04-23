describe("comprobarValor", function() {
    it("Comprobar valor de celda", function() {
    
         ST.element('img[id="imagen1"]').click();
        
            ST.element('@cuerpoTabla/tr/td[2]')
            .get("innerHTML")
            .and(function(){
                expect(this.future.data.innerHTML).toBe("20");
         })
    });
});