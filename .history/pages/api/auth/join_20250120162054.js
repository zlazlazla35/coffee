import { connectDB } from "../../../utill/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {


    if (req.method == 'POST') {

        req.body = JSON.parse(req.body)


        const client = await connectDB;
        const db = client.db("coffee")

        let resultName = await db.collection('user_cred').findOne({ name: req.body.name });
        let resultEmail = await db.collection('user_cred').findOne({ email: req.body.email });
        let emailTest = false


        function emailCheck(email_address) {
            let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if (!email_regex.test(email_address)) {
                return false;
            } else {
                return true;
            }
        }
        function validateEmail() {
            var email = req.body.email;
            if (emailCheck(email)) {
                emailTest = true
            } else {
                res.status(500).json('유효하지 않은 이메일 주소입니다.');
                emailTest = false;
            }
        }







        if (req.body.name == '') {
            res.status(200).json('이름을 입력하세요')
        }

        if (req.body.email == '') {
            res.status(200).json('이메일을 입력하세요')
        } else {
            validateEmail();
        }

        if (req.body.password == '') {
            res.status(200).json('비밀번호를 입력하세요')
        }

        if (req.body.name !== '' && req.body.email !== '' && req.body.password !== '' && emailTest) {
            //name 중복
            if (resultName !== null) {
                res.status(500).json('이미 가입되어있는 이름입니다.');
            }
            if(resultEmail !== null){
                res.status(500).json('이미 가입되어있는 이메일입니다.');
            }
            else {
                let db = (await connectDB).db('coffee');
                const hash = await bcrypt.hash(req.body.password, 10);
                req.body.password = hash;
                
                await db.collection('user_cred').insertOne(req.body);
                res.status(200).json('가입이 완료되었습니다.');
            }
        }

    }
}