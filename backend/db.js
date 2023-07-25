const mongoose = require('mongoose');


async function connectToMongoDB() {
    try {
        await mongoose.connect('mongodb+srv://tanvishingi:whatislove17@cluster0.cgfmlb2.mongodb.net/gofoodmern?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected');
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const data = fetched_data;

        global.food_items = data;

        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        const catdata = foodCategory;

        global.food_items = data;
        global.foodCategory = catdata;
        
    } catch (error) {
        console.error('Failed', error);
    }

}

module.exports = connectToMongoDB;
