const Ajolonauta = require('./../app/Ajolonauta')

describe("Esto es una prueba", () =>{
    test('caso deprueba', ()=>{

        const woopa = new Ajolonauta('Woopa')
        expect(woopa.name).toBe('Woopa')
        // const result = 1 + 2
        // expect(result).toBe(10);
    })
})