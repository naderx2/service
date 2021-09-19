const pool=require('./db');


exports.createemploye=async(req,res)=>{
    try {
        const{name,imag,cv,dat_rec,email,doc}=req.body;
        const employeedata = await pool.query("INSERT INTO employe(name,imag,cv,dat_rec,email,doc) VALUES($1,$2,$3,$4,$5,$6) returning *",
                    [name,imag,cv,dat_rec,email,doc])
        res.json(employeedata.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    
    }
}

exports.createcompagnie=async(req,res)=>{
    try {
        const{name,email,description}=req.body;
        const compangniedata = await pool.query("INSERT INTO compagnie(name,email,description) VALUES($1,$2,$3) returning *",
                    [name,email,description])
        res.json(compangniedata.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    
    }
}

exports.createsociete=async(req,res)=>{
    try {
        const{employe_id,compagnie_id}=req.body;
        const societedata = await pool.query("INSERT INTO societe(employe_id,compagnie_id) VALUES($1,$2) returning *",
                    [employe_id,compagnie_id])
        res.json(societedata.rows[0]);
    } catch (error) {
        console.log(error)
      res.status(500).json(error);
    
    }
}