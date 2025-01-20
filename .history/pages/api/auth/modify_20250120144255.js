export default function handler(req, res) {

    if (req.method == 'POST') {
        if(req.body.title == '' && req.body.content == ''){
            console.log('제목 혹은 내용을 적어주세요')
        }





    }
}