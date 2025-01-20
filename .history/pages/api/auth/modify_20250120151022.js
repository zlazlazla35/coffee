

export default function handler(req, res) {

    if (req.method == 'POST') {
        if(req.body.title == '' && req.body.content == ''){
            return <div>제목적어라</div>
        }





    }
}
//빈값인 경우 1. 제목이랑 내용 적으라는 컴포넌트 보여주기? 2. 얼럿 3. 