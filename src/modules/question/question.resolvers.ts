function question(_: any, args: any, context: any) {
    console.log(_, context)
    return { id: '1', content: 'question 1' }
}

function questions() {
    console.log('api hit')
    return [{ id: '1', content: 'question 1' }]
}


export const resolvers = {
    Query: { question, questions }  
}

// module.exports = Object.freeze({ resolvers })