# Back-End-Max

SERVER INFO ⬇︎ {

    - ENDPOINTS ⬇︎ {

        - USERS ⬇︎ {

            - REGISTER -
            https://build-week-how-to.herokuapp.com/api/users/register
                [ FORMAT ] => { 'username': ___ , 'password': ___ }

            - LOGIN -
            https://build-week-how-to.herokuapp.com/api/users/login
                [ FORMAT ] => { 'username': ___ , 'password': ___ }
                    ( You recieve a token from Login )
        }

        - HOW TO POSTS ⬇︎ {

            - GET ALL HOW TO POSTS -
            http://localhost:4242/api/howto
                

            - GET INDIVIDUAL HOW TO POSTS -
            https://build-week-how-to.herokuapp.com/api/howto/:id
                ( End of url above is the ID of How To Post you want to see )

            - ADD HOW TO POST -
            https://build-week-how-to.herokuapp.com/api/howto
                [ FORMAT ] => { 'title': ___ , 'url': ( optional for adding thumbnails ) }

            - UPDATE HOW TO POST -
            https://build-week-how-to.herokuapp.com/api/howto/:id
                [ FORMAT ] => { 'title': ___ , 'url': ( optional for adding thumbnails ) }
                ( End of url above is the ID of How To Post you want to update )

            - DELETE HOW TO POST -
            https://build-week-how-to.herokuapp.com/api/howto/:id
                ( End of url above is the ID of How To Post you want to delete )

        }

        - STEPS POSTS ⬇︎ {

            - GET ALL STEPS -
            https://build-week-how-to.herokuapp.com/api/steps

            - GET INDIVIDUAL STEPS -
            https://build-week-how-to.herokuapp.com/api/steps/:id
                ( End of url above is the ID of How To Post you want to see )

            - ADD STEP -
            https://build-week-how-to.herokuapp.com/api/steps

            - UPDATE STEP -
            https://build-week-how-to.herokuapp.com/api/steps/:id
                ( End of url above is the ID of How To Post you want to Update )

            - DELETE STEP -
            https://build-week-how-to.herokuapp.com/api/steps/:id
                ( End of url above is the ID of How To Post you want to delete )

        }

    }

    - TESTS ⬇︎ {

        - SERVER ⬇︎ {
            ●   Should set the testing env 
            ●   Should return JSON
            ●   Should return status code 200
            ●   Should return { message: "Sup ✌🏼 -Server" }
        }

        - USERS ⬇︎ {

            - LOGIN -
            ●   Should return status 404 if user doesnt exist
            ●   Should return OK status code 200
            ●   Should require authorization

            - REGISTER -
            ●   Should return length of 1

        }

        - HOW TO POSTS ⬇︎ {

            - GET ALL HOW TO POSTS -
            ●   Should set the testing env
            ●   Should be in application/json

            - GET INDIVIDUAL HOW TO POST -
            ●   Should return length of 1
            ●   Should return JSON format

            - ADD HOW TO POST -
            ●   Should return the title of the how to that you add
            ●   Should return JSON format

            - UPDATE HOW TO POST -
            ●   Should return status 200

            - DELETE HOW TO POST -
            ●   Should return 200 if deleted successfully
            ●   Should return 404 of it doesnt exist

        }

        - STEPS POSTS ⬇︎ {

            - GET ALL STEP POSTS -
            ●   Should set the testing env
            ●   Should be in application/json

            - GET INDIVIDUAL STEPS BY ID -
            ●   Should return status 200
            ●   Should be in application/json

            - ADD STEP -
            ●   Should return length of 1
            ●   Should return 406 if missing info

            - UPDATE STEP -
            ●   Should be in application/json
            ●   Should return status 200

            - DELETE STEP -
            ●   Should return 200 if deleted successfully
            ●   Should return 404 of it doesnt exist

        }

    }
}
