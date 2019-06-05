
//IMPORTS ⬇︎
const request = require( 'supertest' );
const server = require( '../../api/server' );
const db = require( '../../data/dbConfig' );
const helper = require( './howtoModel' );

//CLEANUP ⬇︎
beforeEach( async () => {

    await db( 'howtos' ).truncate()

});

//CLEARING RESTRICTED MIDDLEWARE ⬇︎
let token;

beforeAll((done) => {

    request(server)
        .post('/login')
        .send({
            username: 'user',
            password: 'pass'
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        })

});

//STEPS TEST ⬇︎

//GET HOW TO ⬇︎
describe( 'GET How To' , () => {

    it( 'Should set the testing env' , () => {

        expect( process.env.DB_ENV ).toBe( 'testing' );

    });

    it( 'Should be in application/json' , async () => {

        const res = await request( server ).get( '/api/steps' )
        expect( res.type ).toBe( 'application/json' );

    });

});

//GET INDIVIDUAL HOW TO ⬇︎
describe( 'GET Individual How To' , () => {

    it('Should return length of 1', async () => {

        const res = await request( server ).get( '/api/howto' )
        expect( res.status ).toBe( 200 );

    });

    it('Should return JSON format', async () => {

        const res = await request( server ).get( '/api/howto' )
        expect( res.type ).toBe( 'application/json' );
        
    });

});

//ADD HOW TO ⬇︎
describe( 'ADD Howto.js' , () => {

    it('Should return the title of the how to that you add in json', async () => {

        await db( 'howtos' ).insert({
            title: "Space Invaders"
        });
        const res = await request( server ).get( '/api/howto/1' )
        expect( res.body.title ).toBe(  "Space Invaders");
        expect( res.type ).toBe( 'application/json' );

    });

});

//UPDATE HOW TO ⬇︎
describe( 'UPDATE Howto.js' , () => {

    it( 'Should return status 200' , async () => {
        
        await db( 'howtos' ).insert({
            title: "Slime",
        })
        const res = await request( server )
            .put( '/api/howto/1' )
            .send({
                title: "Slime2",
            })
        expect( res.status ).toBe( 200 );

    });

});

//DELETE HOW TO ⬇︎
describe( 'DELETE Howto.js' , () => {

    it( 'Should return 200 if deleted successfully' , async () => {

        await db( 'howtos' ).insert({
            title: "Slime"
        })
        const res = await request( server ).del( '/api/howto/1' ) ;
        expect( res.status ).toBe( 200 );

    });

    it( 'Should return 404 of it doesnt exist' , async () => {

        const res = await request( server ).del( '/api/howto/1' ) ;
        expect( res.status ).toBe( 404 );

    });

});