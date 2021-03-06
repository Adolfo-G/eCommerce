const db = require('../config/connection');
const dotenv= require('dotenv')
const pListingData=require('./data.json')
const userData=require('./userData.json')
const { signToken } = require('../utils/auth');
const { User, Listing} = require('../models');

dotenv.config()
db().then(async () => {
  try {
    await User.deleteMany({});
    await Listing.deleteMany({})
    for(let i = 0; i<userData.length;i++){
      let username = userData[i].username;
      let email = userData[i].email;
      let password = userData[i].password;

      const createLoginUser = await User.create({ username, email, password });
      const token = signToken(createLoginUser);
    }
    

    for (let i = 0; i < pListingData.length; i++) {
      const { _id, username } = await Listing.create(pListingData[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            listings: _id,
          },
        }
      );
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
