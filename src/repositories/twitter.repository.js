const TwitterSchema = require('../schemas/twitter.schema');
const serverError = require('server-error')


class TwitterRepository {

    async createTwitt(tweet) {
        try {
            return TwitterSchema.create(tweet)
        }catch (e) {
            console.log(e)

        }
    }

    async listTwitt() {
        try {
            return TwitterSchema.find({})

        }catch (e) {
            console.log(e)
        }
    }


    async deleteTwitt(param) {
        try {
            return TwitterSchema.deleteOne(param)

        }catch (e) {

        }
    }
}

module.exports = TwitterRepository;