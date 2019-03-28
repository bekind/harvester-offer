//->贪婪性:每一次都是按照正则匹配的最长结果进行捕获的,例如:2符合、20符合、201也符合、2016也符合,但是默认捕获的是最长的"2016"
//    var str = "zhufeng2016";
//    var reg = /\d+/g;
//    console.log(reg.exec(str));//->["2016"...]
//->解决贪婪性:在量词元字符的后面加一个?即可
//    var str = "zhufeng2016";
//    var reg = /\d+?/g;
//    //console.log(reg.exec(str));//->["2"...]
//    console.log(str.match(reg));//->["2", "0", "1", "6"]
//->1)关于?的几种情况
//a、放在非量词元字符后面,代表出现0-1次
//b、放在量词元字符后面,代表取消捕获时候的贪婪性
//c、在分组开头加?:,代表当前的分组只是匹配不进行捕获
//d、在分组开头加?=,正向预查
var reg = /^zhufeng(?=1|2)$/;//->只有"zhufeng1"和"zhufeng2"才符合
//e、在分组开头加?!,负向预查,
reg = /^zhufeng(?!1|2)$/; //->除了"zhufeng1"和"zhufeng2"不符合,其他的只要是"zhufeng任何东西"都符合