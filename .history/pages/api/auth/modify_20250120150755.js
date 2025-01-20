export default function handler(req, res) {

    if (req.method == 'POST') {
        if(req.body.title == '' && req.body.content == ''){
            return res.status(500).json({message : '제목 혹은 내용을 입력해주세요'})
        }





    }
}