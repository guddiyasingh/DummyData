const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language:String,
    city: String,
    isManager: Boolean
});

const kitten = mongoose.model('Employee', employeeSchema);

export default Employees = mongoose.model('Employess')