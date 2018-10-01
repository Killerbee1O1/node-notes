var fs = require('fs');

const addNote =(title,body)=>
        {
            console.log("addNote function called !!!!");
            
            var note ={
                        "title"  : title ,
                        "body"   : body
                      };
                     duplicate(note,title);
                    
        }

const listNote=()=>
{
    const notes = fetchNotes();
    notes.map(element => {
        console.log("----");
        console.log(element);
        console.log("----");
        return 0;
    });
}

const readNote =(title)=>{
    const notes = fetchNotes();
    notes.map((note)=>{
        if(note.title===title)
        {
            console.log("----");
            console.log(note);
            console.log("----");
        }
        return 0;
    })
}

const removeNote=(title)=>{
    let notes=fetchNotes();
    console.log(notes);
    const temp = notes.filter((note)=>{return note.title !== title});
    if(temp.length!==notes.length)
    {
        console.log("element removed!!!");
    }
    else
    {
        console.log("element does not exist");
    }
    addToFile(temp);
}

const duplicate=(note,title)=>
{
    var notes=fetchNotes();
    console.log("duplicate function called");
    let temp=notes.filter((note1)=>{
        return note1.title === title;
    });
    console.log("---duplicate note presented below!!!!----");
    console.log(temp);
    if(temp.length===0)
    {
        notes.push(note);
        addToFile(notes);
    }
}

const addToFile=(notes) =>{
    console.log("file received in the function addToFile()");
    console.log(notes);
    var Jnotes = JSON.stringify(notes);
    fs.writeFileSync('notes.json' ,Jnotes);
    console.log("file added to file");
}

const fetchNotes = () => {
    try{
    console.log("fetchnote function");
    var JSONnotes = fs.readFileSync('notes.json');
    return JSON.parse(JSONnotes);
    }
    catch(err)
    {
        console.log("error occured !!!!!");
        return [];
    }
};

module.exports = {
    addNote,
    removeNote,
    listNote,
    readNote
}