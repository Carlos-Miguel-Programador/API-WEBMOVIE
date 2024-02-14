async function Counter(){
    const db = require('./connection');
    const table = require('./table');

    await db.sync();

    const counter = await table.count();
    return(counter);
}

module.exports = Counter();