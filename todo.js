const {program} = require('@caporal/core');
const mongoose = require('mongoose');
const prompt = require("prompt");
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const checkConn = () =>{
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("hoorayyy");
});
}


const todoSchema = new mongoose.Schema({
    kegiatan: String,
    cek:{type:Boolean, default:false}
  });
// buat ganti id yg panjang jadi pendek
// https://stackoverflow.com/questions/28357965/mongoose-auto-increment

  autoIncrement.initialize(db);
  todoSchema.plugin(autoIncrement.plugin, {
      model:'todoModel',
      field:'_id',
      startAt:1
  });

  
const todoModel = new mongoose.model('todoModel', todoSchema);

const callback = (error, result)=>{
    console.log(error, result);
}


const showList = async () =>{
    const listTodo = await todoModel.find();
    if(listTodo == ""){
        console.log("[empty : add to do]");
    }
    listTodo.forEach(val=>{
        if(val.cek == true){
            console.log( `${val._id} ${val.kegiatan} (Done)`);
        }
        else{
            console.log(val._id, val.kegiatan);
        }
        
    })
   
    mongoose.disconnect();
}



program
.command("list","show list")
.action(()=>{
    showList();
})


//todo add "kegiatan"

program
.command("add","add todo")
.argument("<add>","add todo")
.action(({args})=>{
    (async()=>{

        const todo = new todoModel ({ kegiatan: args.add },callback);
        await todo.save();
            showList();
        }
        )();
})


//todo update <id> "kegiatan"

program
.command("update","update todo")
.argument("<id>")
.argument("<update>","update todo")
.action(({args})=>{
    (async()=>{
        await todoModel.updateOne(
            {_id:args.id},
            {kegiatan:args.update},
            callback)
            showList();
        })();

});

//todo del <id>

program
.command("del","del todo")
.argument("<id>")
.action(({args})=>{
    (async()=>{
        await todoModel.deleteOne({_id:args.id},callback)
        showList();
    })();
        
});

//todo clear
//hapus semua todo
program
.command("clear","clear todo")
.action(()=>{

    console.log("Are you sure want to delete? [y/N]");
    prompt.get("answer", function(err, res){
    if(res.answer == "y" || res.answer == "Y"){
       (async()=>{
        todoModel.deleteMany({}, callback) 
        showList();
        
       })();
            
    }else if(res.answer == "n" || res.answer == "N"){
    console.log("Clear canceled");
    mongoose.disconnect();
    }else{
        console.log(`Error : ${err}`);
    }
    });
    
});

//todo done <id>
program
.command("done","done todo")
.argument("<id>")
.action(({args})=>{
    (async()=>{
      await todoModel.updateOne(
         {_id:args.id},
         {cek:true},
         callback
         )
         showList();
        })();


});

//todo undone <id>
program
.command("undone","undone todo")
.argument("<id>")
.action(({args})=>{
    (async()=>{
      await todoModel.updateOne(
         {_id:args.id},
         {cek:false},
         callback
         )
         showList();
        })();


});


program.run();