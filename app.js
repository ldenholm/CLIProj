{
    const fs = require('fs');
    let command = process.argv[2];
    let path = __dirname + '/to-do-.json';
    let currentList;
    let arg;

    if (fs.existsSync(path)) {
        currentList = JSON.parse(fs.readFileSync(path));
    } else currentList = {
        todo: []
    };

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
            if (currentList.todo.length === 0) {
                console.log('There are no items in the to-do list.');
            } else console.log(`The current items on the to-do list are
            ${currentList.todo}`);
            // if (fs.existsSync(path)) {
            //     let todoData = JSON.parse(fs.readFileSync(path));
            //     console.log(todoData);
            // } else console.log('File does not exist yet, use "add" to create a to-do.');
            break;
        case 'add':
            arg = process.argv.slice(3).join(' ');
            currentList.todo.push(arg);
            fs.writeFileSync(path, JSON.stringify(currentList));
            break;
        case 'remove':
            // removes a to-do item by it's 1-base index, to remove 2 execute:
            // node app.js remove 2.
            arg = process.argv[3] - 1;
            currentList.todo.splice(arg, 1);
            fs.writeFileSync(path, JSON.stringify(currentList));
            break;
        case 'reset':
            // shows to-dos, or appropriate text if there are no to-dos.
            currentList.todo = [];
            fs.writeFileSync(path, JSON.stringify(currentList));
            break;
    }
}