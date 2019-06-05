
//EXPORTS ⬇︎
module.exports = {
    howtoToBody,
    stepsToBody,
    toggleStep
};

//MAPPING HOW TO ⬇︎
function howtoToBody( howto ) {
    const result = {
        ...howto
    };

    if ( howto.steps ) {
        result.steps = howto.steps.map( step => ({
            ...step
        }));
    }

    return result;
}

//MAPPING STEPS TO BODY ⬇︎
function stepsToBody( step ) {
    return {
        ...step
    }
}

//TOGGLE STEPS ⬇︎
function toggleStep ( howto ) {
    const result = {
        ...howto
    };

    if ( howto.steps ) {
        result.steps = howto.steps.map( step => ({
            ...step,
        }));
    }

    return result;

};