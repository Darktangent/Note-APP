console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');
const titleOptions = {
    describe: 'Title of note',
    demand:true,
    alias:'t'
};
const argv = yargs
.command('add', 'Add a new note',{
    title : titleOptions,
    body:{
        describe: 'Body of the note',
        demand:true,
        alias: 'b'
    }
})
.command('list', 'list all nodes')
.command('read', 'read a note',{
    title : {
        describe: 'Title of note',
        demand:true,
        alias:'t'
    },
})
.command('remove','Remove a note',{
    title :titleOptions

})
.help()
.argv;

console.log('Yargs', argv);
//var command = process.argv[2];
var command = argv._[0];
console.log('Command->', command);
if(command==='add'){
    
 var note =    notes.addNote(argv.title,argv.body);
 if (note){
     console.log ("Note Created");
     notes.logNote(note);
 } else {
     console.log ("Note title Already exists");
 }
}else if(command=='list'){

    var allNotes = notes.getAll();
    console.log (`Printing ${allNotes.length} notes(s).`)
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
}else if(command==='read'){

   var note= notes.getNote(argv.title);
   if (note){
    console.log("Note found");
    notes.logNote(note);

   }else{
       console.log ('Note not found')
   }

} else if (command=='remove'){

   var noteRemoved= notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
}

else {
    console.log("Command not recognized");
}

// console.log(_.isString(true));
// console.log(_.isString('Rohan'));

// filteredArray=_.uniq(['Rohan','Esha',1,2,3,2])
// console.log(filteredArray);




// var res = notes.addNote();
// console.log(res);
// var sum = notes.add(1,2);
// console.log(sum);
// var user = os.userInfo();
// console.log(user);

// // fs.appendFile('greetings.txt',`hello ${user.username}! You are ${notes.age}`,
// // function(err){
// //     if (err){
// //         console.log('Unable to write to file');
// //     }

// // }



// // );