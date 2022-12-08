const TwitterRepository = require('../repositories/twitter.repository');

class TwitterService {

    async createTwitt(body) {
        const tweet = buildTweet(body)
        await new TwitterRepository().createTwitt(tweet)
    }

    async listTwitt() {
         const tweet = await new TwitterRepository().listTwitt()
         return JSON.stringify(tweet)

    }

    async deleteTwitt(param) {
         await new TwitterRepository().deleteTwitt(param)

    }
}

function buildTweet(body) {
    return {
        name: body.name,
        email: body.email,
        tweet: body.tweet
    }
}
module.exports = TwitterService;