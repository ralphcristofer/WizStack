import mongoose from 'mongoose';

/**
 * Programs Schema 
 * @description Blueprint for user model.
 * @memberof module:db/models/programs
 */
const programsSchema = new mongoose.Schema({
    // only admin can manipulate programs
    code:{ type: Number, trim: true, required: [true, "Please enter a the course ID. e.g., 3581."] },
    name: { type: String, trim: true, required: [true, "Please enter the name of the program."] },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
    created: { type:Date, default:Date.now },
    updated: { type:Date, default:Date.now }
});

const programs = mongoose.model('programs', programsSchema);

export default programs;