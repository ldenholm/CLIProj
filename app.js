{
    const fs = require('fs');

    let command = process.argv[2];
    let path = __dirname + '/to-do-.json';
    //console.log(td);

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
            if (fs.existsSync(path)) {
                let todoData = JSON.parse(fs.readFileSync(path));
                console.log(todoData);
            } else console.log('File does not exist yet, use "add" to create a to-do.');
            break;
        case 'add':
                //console.log(process.argv.slice(3).join(' '));
                let input = (process.argv.slice(3).join(' '));
                fs.appendFileSync(path, input, function (err) {
                    if (err) throw err;
                });
            // adds a to-do item, all words behind add are entered as 1 item, for example:
            // node app.js add "Buy groceries"
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