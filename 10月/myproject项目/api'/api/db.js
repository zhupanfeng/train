let mongoose = require('mongoose');
let { url } = require('./settings');
let conn = mongoose.createConnection(url, { useUnifiedTopology: true, useNewUrlParser: true });
let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    avatar: String,
    phone: String
});
let User = conn.model('User', UserSchema);
let SliderSchema = new mongoose.Schema({
    url: String
});
let Slider = conn.model('Slider', SliderSchema);
let LessonSchema = new mongoose.Schema({
    order: Number,
    title: String,
    video: String,
    poster: String, 
    url: String,
    price: String,
    category: String,
});
let Lesson = conn.model('Lesson', LessonSchema);
module.exports = {
    User,
    Slider,
    Lesson
}