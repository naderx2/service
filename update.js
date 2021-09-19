const pool=require('./db');


exports.updateemploye=async(req,res)=>{
    try {
       const {id}= req.params;
       const{name,imag,cv,dat_rec,email,doc}=req.body;
       const emplyedata= await pool.query("UPDATE employe set name=$1,imag=$2,cv=$3,dat_rec=$4,email=$5,doc=$6 where id=$7 returning *",
                      [name,imag,cv,dat_rec,email,doc,id] )
                      res.json((await emplyedata).rows[0]);
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.updatecompagnie=async(req,res)=>{
    try {
       const {id}= req.params;
       const{name,email,description}=req.body;
       const compagniedata= await pool.query("UPDATE compagnie set name=$1,email=$2,description=$3 where id=$4 returning *",
                      [name,email,description,id] )
                      res.json((await compagniedata).rows[0]);
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

