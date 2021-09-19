const pool=require('./db');

exports.deletemploye=async(req,res)=>{
    try {
       const {id}= req.params;
       let data={};
       const societedata= await pool.query("DELETE FROM SOCIETE where employe_id=$1 returning *",[id]);
       const employedata=await pool.query("DELETE FROM employe where id=$1 returning *",[id]);
       data=employedata.rows[0];
       if(data){
           data.compagnies= societedata.rows[0];
        }
        else {
            data={info:"no employe to delete"}
           }
       res.json(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.deletecompagnie=async(req,res)=>{
    try {
       const {id}= req.params;
       let data={};
       const societedata= await pool.query("DELETE FROM SOCIETE where compagnie_id=$1 returning *",[id]);
       const compagnieedata=await pool.query("DELETE FROM compagnie where id=$1 returning *",[id]);
       data=compagnieedata.rows[0];
       if(data){
           data.compagnies= societedata.rows[0];
        }
        else {
            data={info:"no compagnie to delete"}
           }
       res.json(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
 exports.deletesociete=async(req,res)=>{
    try {
       const {employe_id,compagnie_id}= req.params;
       let data={};
       const societedata= await pool.query("DELETE FROM SOCIETE where employe_id =$1 and compagnie_id=$2 returning *",[employe_id,compagnie_id]);
       
       res.json(societedata.rows[0]);
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}