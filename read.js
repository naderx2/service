
const pool=require('./db');


exports.getallemployes=async(req,res)=>{
    try {
        const employeedata=await pool.query("SELECT * FROM employe");
        res.json(employeedata.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getallcompagnies=async(req,res)=>{
    try {
        const compagniedata=await pool.query("SELECT * FROM compagnie");
        res.json(compagniedata.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}


exports.getallsocietes=async(req,res)=>{
    try {
        const societedata=await pool.query("SELECT * FROM societe");
        res.json(societedata.rows);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getemploye=async(req,res)=>{
    try {
       const {id}= req.params;
       let data={};
        const employeedata=await pool.query("SELECT * FROM employe where id=$1",[id]);
        const compagnies=await pool.query("SELECT * FROM compagnie where id in (SELECT compagnie_id from societe where employe_id=$1)",[id]);
        data=employeedata.rows[0];
        if(data){
            data.compagnies=compagnies.rows;
        }
        else {
            data={info: "no employe data found for this id "}
        }
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.getcompagnie=async(req,res)=>{
    try {
       const {id}= req.params;
       let data={};
        const compagniesdata=await pool.query("SELECT * FROM compagnie where id=$1",[id]);
        const employes=await pool.query("SELECT * FROM employe where id in (SELECT employe_id from societe where compagnie_id=$1)",[id]);
        data=compagniesdata.rows[0];
        if(data){
            data.employes=employes.rows;
        }
        else{
             data={info: "no compagnie data found for this id "}
            }
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
