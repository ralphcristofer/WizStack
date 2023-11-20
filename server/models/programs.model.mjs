import mongoose from 'mongoose';

/**
 * Programs Schema 
 * @description Blueprint for user model.
 * @memberof module:db/models/programs
 */
const programsSchema = new mongoose.Schema({
    // only admin can manipulate programs
    _id:{ type: String, trim: true, required: [true, "Please enter a the course ID. e.g., COMP229"] },
    name: { type: String, trim: true, required: [true, "Please enter a first name"] },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
    credits: { type:Number, trim: true, required: [true, "Please enter a the credit"] },
    created: { type:Date, default:Date.now },
    updated: { type:Date, default:Date.now }
});

// Pre-save hook to transform _id to uppercase
programsSchema.pre('save', function(next) {
    this._id = this._id.toUpperCase();
    next();
});

const programs = mongoose.model('programs', programsSchema);

export default programs;