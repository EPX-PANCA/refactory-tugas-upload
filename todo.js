const {program}   = require("@caporal/core");
const { Todo, sequelize } = require('./models');
const {Op} =  require("sequelize");
const prompt = require("prompt");

//TODO LIST

program
.command("list","show list")
.action(()=>{
    (async()=>{
        const todoList = await Todo.findAll({raw:true});
        for (x in todoList){
        console.log(todoList[x].id, todoList[x].kegiatan, todoList[x].cek); 
        }
        await sequelize.close()
        })();
        
})

//todo add "kegiatan"

program
.command("add","add todo")
.argument("<add>","add todo")
.action(({args})=>{
    (async()=>{
       await Todo.create({kegiatan: args.add, cek:""})
       await sequelize.close()
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
     await Todo.update({kegiatan: args.update},
        {where:{id:args.id}})
        await sequelize.close()
        })();


})

//todo del <id>

program
.command("del","del todo")
.argument("<id>")
.action(({args})=>{
    (async()=>{
       await Todo.destroy({where:{id:args.id}})
       await sequelize.close()
        })();


})

//todo clear
//hapus semua todo
program
.command("clear","clear todo")
.action(()=>{

    console.log("Are you sure want to delete? [y/N]");
    prompt.get("answer", function(err, res){
    if(res.answer == "y" || res.answer == "Y"){
        (async()=>{
            await Todo.destroy({where: {id: {[Op.gt]:0} 
         }, truncate: true})
         await sequelize.close()
             })();
    }else if(res.answer == "n" || res.answer == "N"){
    console.log("Clear canceled");
    }else{
        `Error : ${err}`
    }
    });
    
})


//todo done <id>
program
.command("done","done todo")
.argument("<id>")
.action(({args})=>{
    (async()=>{
        await Todo.update({cek: "(Done)"},
         {where:{id:args.id}})
         await sequelize.close()
         })();

})

//todo undone <id>
program
.command("undone","undone todo")
.argument("<id>")
.action(({args})=>{
    (async()=>{
       await Todo.update({cek: ""},
         {where:{id:args.id}})
         await sequelize.close()
         })();

})


program.run()







