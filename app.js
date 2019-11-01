{
    const fs = require('fs');

    let command = process.argv[2];
    let path = __dirname + '/to-do-list.txt';
    let td = 'To-Do';

    let writer = fs.createWriteStream(path);
    //let reader = fs.createReadStream(path);

    switch (command) {
        case 'list':
            // shows to-dos, or appropriate text if there are no to-dos.
            console.log(`${command} executed.`);
            // check file contains a To-Do:
            fs.readFile(path, function(err, content) {
                if (err) {
                    throw err;
                } else if (content.includes(td)) {
                    console.log('Display to-dos: ');
                    // command to display text.
                } else console.log('No to-do\'s to display');
            });
            break;
        case 'add':
            // adds a to-do item, all words behind add are entered as 1 item, for example:
            // node app.js add "Buy groceries"
            break;
        case 'remove':
            // removes a to-do item by it's 1-base index, to remove 2 execute:
            // node app.js remove 2.
            break;
        case 'reset':
            // shows to-dos, or appropriate text if there are no to-dos.
            break;
    }
}