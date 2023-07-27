const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    desc: {
        type: String,
        default:''
    },
    skills: {
        type: String,
        required:true
    },
    githubLink: {
        type: String,
        default:""
    },
    synopsis: {
        type: String,
        default: ''
    },
    researchPaper: {
        type: String,
        default:''
    },
    report: {
        type: String,
        default:''
    },
    Reviews:{
        type: Array,
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals:true,
});

module.exports= mongoose.model('Product', productSchema);