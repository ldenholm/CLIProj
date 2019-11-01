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
                if (err) throw err;

                console.log(content.indexOf(td) >-1 ? 'has a to-do' : 'does not have a to-do');
            });
            
            
            // fs.lstat(path, (err, stats) => {
            //     if (err) {
            //         return console.log(err);
            //     } else console.log(`file exists? ${stats.isFile()}`);
            // });
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