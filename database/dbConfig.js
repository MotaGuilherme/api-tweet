const mongoose = require('mongoose');
mongoose.set('strictQuery', true)

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@atlascluster.oynbk.mongodb.net/?retryWrites=true&w=majority');
}
