export default function(req, res){
    // 각 컨텐츠 내용 빈값인지 확인


    if(req.method == 'POST'){

        req.body = JSON.parse(req.body);

        console.log(req.body)








    }







}