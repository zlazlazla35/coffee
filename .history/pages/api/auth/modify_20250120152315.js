

export default function handler(req, res) {

    if (req.method == 'POST') {
        if(req.body.title == '' && req.body.content == ''){
            return res.status(500).json('제목 혹은 내용을 입력해주세요.')
        }






    }
}
//빈값인 경우 1. 제목이랑 내용 적으라는 컴포넌트 보여주기? 2. 얼럿 3. 