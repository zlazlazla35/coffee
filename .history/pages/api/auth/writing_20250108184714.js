export default function(req, res){
    // 각 컨텐츠 내용 빈값인지 확인 후 db에 저장
    // 카테고리 셀렉 선택된게 "카테고리를 선택해주세요." 이면 얼럿으로 카테고리 선택하라고 알림띄우기


    if(req.method == 'POST'){

        req.body = JSON.parse(req.body);

        if(req.body.title == ''){
            res.status(500).json('제목을 입력해주세요.');
        }if(req.body.content == ''){
            res.status(500).json('고민 내용을 적어주세요.');
        }if(req.body.content == ''){
            res.status(500).json('카테고리를 선택해주세요.')
        }

        console.log(req.body)



    }







}