export default function(req, res){


    if(req.method == 'POST'){

        req.body = JSON.parse(req.body);
        
        console.log(req.body)








    }







}