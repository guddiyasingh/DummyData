const employessSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language:String,
    city: String,
    isManager: Boolean
});

const Employess = mongoose.model('Employess', employessSchema);

module.exports = Employess