
//IMPORTS ⬇︎
const request = require( 'supertest' );
const Steps = require( './stepModel' );
const db = require( '../../data/dbConfig' );
const server = require( '../../api/server' );

//CLEANUP ⬇︎
beforeEach( async () => {

    await db( 'steps' ).truncate()

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
describe( 'GET Steps.js' , () => {

    it( 'Should set the testing env' , () => {

        expect( process.env.DB_ENV ).toBe( 'testing' );

    });

    it( 'Should be in application/json' , async () => {

        const res = await request( server ).get( '/api/steps' );
        expect( res.type ).toBe( 'application/json' );

    });

});

//GET STEP BY ID ⬇︎
describe( 'GET Steps by id' , () => {

    it( 'Should return status 200' , async () => {

        await Steps.add({
            step: "Space Invaders",
            howtoId: 1
        });
        const res = await request( server ).get( '/api/steps/1' )
        expect( res.status ).toBe( 200 );

    });

    it( 'Should be in application/json' , async () => {

        const res = await request( server ).get( '/api/steps/1' );
        expect( res.type ).toBe( 'application/json' );

    });
    
});

//ADD HOW TO ⬇︎
describe( 'INSERT Steps.js' , () => {

    it('Should return length of 1', async () => {

        const steps = await Steps.add({
            step: "Space Invaders",
            howtoId: 1
        });
        expect( steps.id ).toBe( 1 );

    });

    it('Should return 406 if missing info', async () => {

        const res = await request( server ).post( '/api/steps' , {
            step: "Space Invaders"
        })
        expect( res.status ).toBe( 406 )

    });

});


//UPDATE HOW TO ⬇︎
describe( 'UPDATE Steps.js' , () => {

    it( 'Should return status 200' , async () => {

        await db( 'steps' ).insert({
            step: "Slime",
            howtoId: 1
        })
        const res = await request( server )
            .put( '/api/steps/1' )
            .send({
                step: "Slime2",
                howtoId: 1
            })
        expect( res.status ).toBe( 200 )

    });

    it( 'Should be in application/json' , async () => {

        await db( 'steps' ).insert({
            step: "Slime",
            howtoId: 1
        })
        const res = await request( server )
            .put( '/api/steps/1' )
            .send({
                step: "Slime2",
                howtoId: 1
            })
        expect( res.type ).toBe( 'application/json' );

    });

});

//DELETE STEP ⬇︎
describe( 'DELETE Steps.js' , () => {

    it( 'Should return 200 if deleted successfully' , async () => {

        await db( 'steps' ).insert({
            step: "Slime",
            howtoId: 1
        })
        const res = await request( server ).del( '/api/steps/1' ) ;
        expect( res.status ).toBe( 200 );

    });

    it( 'Should return 404 of it doesnt exist' , async () => {

        await db( 'steps' ).insert({
            step: "Slime",
            howtoId: 1
        })
        const res = await request( server ).del( '/api/steps/2' ) ;
        expect( res.status ).toBe( 404 );

    });

});