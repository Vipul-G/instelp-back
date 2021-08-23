
export const resolvers = {
    Query: { 
        user(_: any, args: any, context: any) {
            console.log(_, context)
            return { name:'test', phoneNumber: '1234567890', email:'test@gmail.com', questions: [{ id: '1', content: 'question 1' }] }
        }, 
        users() {
            console.log('api hit')
            return [{name:'test', phoneNumber: '1234567890', email:'test@gmail.com', questions: [{ id: '1', content: 'question 1' }]}]

        } 
    }  
}
