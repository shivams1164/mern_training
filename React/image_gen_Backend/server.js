const mongoose = require('mongoose');
const app = require('./app.js');

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.eimdsfm.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0';
const databaseUser = 'shivam8960ss';
const databasePassword = 'abcd1234';
const databaseName = 'KIET_MCA';

let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);

mongoose.connect(dbLink).then(() => {
    console.log('-------- Database Connected --------');
});

app.listen(1400, () => {
    console.log('----------- App Started -----------')
});