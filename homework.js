
    // 检查是否包含对应的字符串的函数
    function checkStr(str, key, val) {
        str = str.toString();
        if (str.indexOf(val) != -1) {
            return key;
        }
        return null;
    }
    /* 
        参数解读：res是记录符合条件的结果，check是检查函数中返回的key值，childKey是如果有子对象的依次记录子对象的key
    */
    var someFunction = function(obj, val) {
        var res = [];
        var check;
        var childKey = "";
        // 遍历对象的一个函数
        function forFun(obj, val) {
            if(obj === undefined || val === undefined)
            {
                throw "参数不全";
            }
            if(typeof(obj) != "object")
            {
                throw "第一个参数不是对象"
            }
            for (let key in obj) {
                if (typeof (obj[key]) == "object") {
                    childKey = childKey +  key+".";
                    forFun(obj[key], val);

                }
                else {
                    check = checkStr(obj[key], key, val);
                    if (check != null) {
                        res.push((childKey + check));
                    }
                }
            }
        }
        forFun(obj, val);
        // console.log(res);
        return res.toString();
    }
    module.exports=someFunction;

