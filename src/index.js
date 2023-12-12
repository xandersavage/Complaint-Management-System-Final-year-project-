// This file starts up our application

const app = require('./app')
const port = process.env.PORT


// const User = require('../model/complaint')
// const main = async () => {
//     const user = await User.findById('65521c584c03dc2c9545cb58')
//     .populate('complaints')
//     .exec()
//     console.log(user.complaints)
// }
// main()

app.listen(port, () => {
    console.log('Hey Alex! Server is running on port ', 3000)
})