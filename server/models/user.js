//  Below will be replaced with our MySQL table
// for assignment 6, this is ok. 
const users = [
    {
        username: "Itadori",
        password: "badpassword"
    },
    {
        username: "Satoru",
        password: "icecream"
    },
    {
        username: "Panda",
        password: "patrick"
    }
]

// CRUD Functions
function getAllUsers() {
    return users;
}

module.exports = { getAllUsers }