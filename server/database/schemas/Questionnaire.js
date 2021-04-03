const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionnaireSchema = new Schema({
    createdBy: { type: Schema.ObjectId, ref: 'User', required: true },
    text: { type: String },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now, immutable: true },
    updated_at: { type: Date },
    questions: [String]
})


const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
module.exports = Questionnaire;