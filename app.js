console.log("starting the app !");

const yargs= require('yargs');
const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
//var argv = yargs.argv;
var argv = yargs
            .command('add','adding new note',
                    {
                        title:{
                                describe:"title of note",
                                demand:true,
                                alias:'t'
                                
                              },
                        
                        body:{
                            describe:"body of note",
                            demand:true,
                            alias:'b'
                                
                              }
                    }).command('remove','removing a note',
                    {
                        title:{
                            describe:"title of note",
                            demand:true,
                            alias:'t'
                            
                          },
                        
                    }).command('read','reading a specific note',
                    {
                        title:{
                            describe:"title of note",
                            demand:true,
                            alias:'t'
                            
                          },
                        
                    }).argv;

var command = argv._[0];
var title = argv.title;
var body = argv.body;

console.log(command);
console.log(`${body} ${title}`);

switch(command)
{
    case 'add' : console.log("add command executed");
                    notes.addNote(title,body);
                 break;
        
    case 'remove' : console.log("remove command executes");
                    notes.removeNote(title);
                    break;

    case 'read'   : console.log("read command executed");
                    notes.readNote(title);
                    break;
                
    case 'list'   : console.log("list command executes");
                    notes.listNote();
                    break;

    default       : console.log("no such command exist");
}

