const employee = require('../models/employee');
const employeeController = {};

employeeController.getEmployees = async (req,res)=>{
    const employees = await employee.find()
    res.json(employees);    
}


employeeController.createEmployees = async (req,res) =>{
    const emp = new employee(req.body);
    await emp.save();
    res.json({
        'status': 'Employee saved'
    });
}
employeeController.getEmployee = async (req,res) =>{
    //console.log(req.params.id);
    const emp = await employee.findById(req.params.id);
    res.json(emp);
}
employeeController.editEmployee = async (req, res) =>{
    const { id } = req.params;
    const emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await employee.findByIdAndUpdate(id, {$set: emp}, {new: true}) // el new true sirve para que si el id que se busca no existe en la base de datos crea un nuevo registro con dicho id
    res.json({status: 'Employee updated'});
};

employeeController.deleteEmployee = async (req,res) =>{
    await employee.findByIdAndRemove(req.params.id);
    res.json({status: 'EMployee deleted'});
};

employeeController.frontendCount = async (req,res)=>{
    const count = await employee.find({"position": "Frontend Developer"}).count();
    res.json(count);  
}


module.exports = employeeController;