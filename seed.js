require('dotenv').config()
require('./config/database')
const Employee = require('./models/employee');

const data = require('./data');


async function seedAsync() {
    try {
        const eDelete = await Employee.deleteMany({});
        const employees = await Employee.create(data.employees)
        console.log(employees);
        process.exit()
    } catch(err) {
        console.log(err)
        process.exit()
    }
}

seedAsync();
