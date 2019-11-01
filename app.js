{
    const fs = require('fs');

    let command = process.argv[2];
    let path = __dirname + '/to-do-list.txt';
    let td = [];
    //let reader = fs.createReadStream(path);

    switch (command) {
        case 'help':
        case undefined:
            console.log(`List of available commands:
            list <shows list of all to-do's, creates file if it doesnt exist>
            add <adds a to-do, use 'add todo-to-add-here'>
            remove <removes a to-do by it's index, for example 'remove 2'
            removes 2nd to-do>
            reset <clears the to-do-list.txt>`);
            break;
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
            td.push(process.argv.slice(3).join(' '));
            console.log(`array of to-do's:
            ${td}`);
            fs.appendFile(path, td, function (err) {
                if (err) throw err;
                //console.log(`"${chunk}" has been added to ${path}`);
            });
            //console.log(process.argv.slice(3).join(' '));
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