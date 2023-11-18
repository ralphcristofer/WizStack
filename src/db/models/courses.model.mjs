import mongoose from 'mongoose';

/**
 * Programs Schema 
 * @description Blueprint for user model.
 * @memberof module:db/models/programs
 */

const coursesSchema = new mongoose.Schema({
    category:{
        type: String,
        enum: ['Math', 'Science', 'Business', 'Computer Science', 'Trade', 'Language', 'History'],
        required: [true, 'Please select a valid category'],
    },
    code:{ type: String, trim: true, required: [true, "Please enter a course code. e.g. COMP229."] },
    name: { type: String, trim: true, required: [true, "Please enter the name of the course."] },
    credits: { type:Number, trim: true, required: [true, "Please enter the credit. e.g., 4."] },
    schedule: [{ // a list of schedule to handle the flexibility of class time
        professor: { type: String }, 
        class_day: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            required: [true, 'Please select a valid class day.']
        },
        start_time: {
            type: String,
            required: [true, 'Please enter the start time.']
        },
        end_time: {
            type: String,
            required: [true, 'Please enter the end time.']
        }
    }],
    created: { type:Date, default:Date.now },
    updated: { type:Date, default:Date.now }
});

coursesSchema.pre('save', function(next) {
    // Pre-save hook to transform _id to uppercase
    this.code = this.code.toUpperCase();
    next();
});


const courses = mongoose.model('courses', coursesSchema);

export default courses;