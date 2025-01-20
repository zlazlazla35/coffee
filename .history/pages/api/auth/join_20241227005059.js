import { connectDB } from "../../../utill/database";

export default async function handler(req, res) {


    if (req.method == 'POST') {



        function emailCheck(email_address) {
            email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
            if (!email_regex.test(email_address)) {
                return false;
            } else {
                return true;
            }
        }
        function validateEmail() {


            var email = req.body.email;

            if (emailCheck(email)) {
                res.status(500).json('유효')
            } else {
                res.status(500).json('유효하지 않은')
            }
        }






        req.body = JSON.parse(req.body)
        // let db = (await connectDB).db('coffee');
        // await db.collection('user_cred').insertOne(req.body);
        console.log(req.body)
        // res.status(200).json('완료')

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

    }
}