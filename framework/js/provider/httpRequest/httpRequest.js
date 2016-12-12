import 'whatwg-fetch';

let querystring = require('querystring');
class HttpRequest {
    //post方法
    post(url,params,callback,eCallback){
        var option= {
            method: 'POST',
            headers: {
            },
            body: JSON.stringify(params),
            credentials: 'same-origin'
        }
        fetch(url,option)
        .then(res=>res.json())
        .then(res=> {
            if(res.errorCode == 200)
            {
                callback&&callback(res);
            }
            else
            {
                // alert('抱歉！网络故障请重试！');
                eCallback&&eCallback(res);
            }

        })
        .catch(error=>
        {
            // alert('抱歉！网络故障请重试！');
            eCallback&&eCallback(error);
        })
    }

    //get方法
    get(url,params,callback,eCallback){
        //生成带参数的url
        var queryStr = querystring.stringify(params);
        if(queryStr.length>0)
        {
            url = url + '?'+ querystring.stringify(params);
        }
        var option= {
            method: 'GET',
            credentials: 'same-origin'
        }
        fetch(url,option)
        .then(res=>res.json())
        .then(res=>{
            if(res.errorCode == 200)
            {
                callback&&callback(res);
            }
            else
            {
                // alert('抱歉！网络故障请重试！');
                eCallback&&eCallback(res);
            }
        })
        .catch(error=>
        {
            // alert('抱歉！网络故障请重试！');
            eCallback&&eCallback(error);
        })
    }
}

export default HttpRequest;