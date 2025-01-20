import { connectDB } from "../../../utill/database";

export default async function handler(req, res){

    if(req.method == 'POST'){
        req.body = JSON.parse(req.body)
        // let db = (await connectDB).db('coffee');
        // await db.collection('user_cred').insertOne(req.body);
        console.log(req.body)
        // res.status(200).json('완료')

        if(req.body.name == ''){
            res.status(200).json('이름을 입력하세요')
        }if(req.body.email == ''){
            res.status(200).json('이메일을 입력하세요')
        }if(req.body.password == ''){
            res.status(200).json('비밀번호를 입력하세요')
        }

    }
}