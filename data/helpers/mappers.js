
//EXPORTS ⬇︎
module.exports = {
    howtoToBody,
    stepsToBody,
    toggleStep
};

//FUNCTIONS ⬇︎
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

function stepsToBody( step ) {
    return {
        ...step
    }
}

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