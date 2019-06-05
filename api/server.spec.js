
//IMPORTS ⬇︎
const request = require( 'supertest' );
const server = require( './server' );
const db = require( '../data/dbConfig' );

//CLEANUP ⬇︎
beforeEach( async () => {

    await db( 'howtos' ).truncate();

});

//HOMEPAGE TESTS ⬇︎
describe( 'server.js' , () => {

    it( 'Should set the testing env' , () => {

        expect( process.env.DB_ENV ).toBe( 'testing' );

    });

    it( 'Should return status code 200' , async () => {

        const res = await request( server ).get( '/' )
        expect( res.status ).toBe( 200 );

    });

    it("Should return JSON", async () => {

        const res = await request( server ).get( '/' );
        expect( res.type ).toBe( 'application/json' );

    });

    it( 'Should return { message: "Sup ✌🏼 -Server" }' , async () => {

        const res = await request( server ).get( '/' );
        expect( res.body ).toEqual({ message: 'Sup ✌🏼 -Server' });

    });

});