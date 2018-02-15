console.log('Starting notes.js');


const fs = require('fs');

// module.exports.addNote= ()=>{
// console.log('addNote');
// return 'new notes';

// }

var fetchNotes=()=>{

    try {

        var noteString = fs.readFileSync('note-data.json');
        return JSON.parse(noteString);
    }catch(e){
    
    return [];
    }

};

var saveNotes = (notes) =>{
    fs.writeFileSync('note-data.json',JSON.stringify(notes));


};


var addNote = (title, body)=>{
// console.log('Adding Note', title, body);
var notes = fetchNotes();
var note = {
title,
body
};

// try {

//     var noteString = fs.readFileSync('note-data.json');
//     notes = JSON.parse(noteString);
// }catch(e){


// }

var duplicateNotes = notes.filter((note)=>{
    return note.title===title;
});
if (duplicateNotes.length===0){

    notes.push(note);
    // fs.writeFileSync('note-data.json',JSON.stringify(notes));
    saveNotes(notes);
    return note;
}

};

var getAll = ()=>{
return fetchNotes();
//console.log('getting all notes');

};
var getNote = (title)=>{

//console.log('getting note', title);
var notes = fetchNotes();
var filteredNotes = notes.filter((note)=>{
return note.title===title;


});
return filteredNotes[0];

};
var removeNote = (title)=>{
//fetch note
var notes = fetchNotes();
//filternotes removing the one with title of arg
var filteredNotes = notes.filter((note)=>{
    return note.title!==title;
});
//save new notes aray
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note)=>{
    debugger;
    console.log ('______');
     console.log(`Title: ${note.title}`);
     console.log(`Body: ${note.body}`);

};
module.exports = {

    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}











// module.exports.add=(a,b)=>{

//     return a+b;

// }