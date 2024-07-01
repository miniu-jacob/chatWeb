const express = require("express");
const mongoose = require("mongoose");
// .env를 사용하기 위한 설정
require('dotenv').config();
// 테스트 용도 (접근 제한 해제)
const cors = require("cors");
const app = express();
app.use(cors());

// DB 연결
// mongoose.connect("DB 주소", {
// .env를 사용하기 위해서는 .env 환경 설정을 위에 해줘야 한다. 
mongoose.connect(process.env.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(
    ()=> console.log("Connected to database")
);

module.exports = app