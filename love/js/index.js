var clock = document.getElementsByClassName('clock')[0];
var monthContent = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
var dayContent = ["一号", "二号", "三号", "四号", "五号", "六号", "七号", "八号", "九号", "十号", "十一号", "十二号", "十三号", "十四号", "十五号", "十六号", "十七号", "十八号", "十九号", "二十号", "二十一号", "二十二号", "二十三号", "二十四号", "二十五号", "二十六号", "二十七号", "二十八号", "二十九号", "三十号", "三十一号"];
var weekContent = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
var hourContent = ["零点", "一点", "两点", "三点", "四点", "五点", "六点", "七点", "八点", "九点", "十点", "十一点", "十二点", "十三点", "十四点", "十五点", "十六点", "十七点", "十八点", "十九点", "二十点", "二十一点", "二十二点", "二十三点"];
var minuteContent = ["零分","一分", "二分", "三分", "四分", "五分", "六分", "七分", "八分", "九分", "十分",
    "十一分", "十二分", "十三分", "十四分", "十五分", "十六分", "十七分", "十八分", "十九分", "二十分",
    "二十一分", "二十二分", "二十三分", "二十四分", "二十五分", "二十六分", "二十七分", "二十八分", "二十九分", "三十分",
    "三十一分", "三十二分", "三十三分", "三十四分", "三十五分", "三十六分", "三十七分", "三十八分", "三十九分", "四十分",
    "四十一分", "四十二分", "四十三分", "四十四分", "四十五分", "四十六分", "四十七分", "四十八分", "四十九分", "五十分",
    "五十一分", "五十二分", "五十三分", "五十四分", "五十五分", "五十六分", "五十七分", "五十八分", "五十九分"];
var secondsContent = ["我爱你","一秒", "Love", "三秒", "我爱你", "五秒", "Love", "七秒", "我爱你", "九秒", "Love",
    "十一秒", "我爱你", "十三秒", "Love", "十五秒", "我爱你", "十七秒", "Love", "十九秒", "我爱你",
    "二十一秒", "Love", "二十三秒", "我爱你", "二十五秒", "Love", "二十七秒", "我爱你", "二十九秒", "Love",
    "三十一秒", "我爱你", "三十三秒", "Love", "三十五秒", "我爱你", "三十七秒", "Love", "三十九秒", "我爱你",
    "四十一秒", "Love", "四十三秒", "我爱你", "四十五秒", "Love", "四十七秒", "我爱你", "四十九秒", "Love",
    "五十一秒", "我爱你", "五十三秒", "Love", "五十五秒", "我爱你", "五十七秒", "Love", "五十九秒"];
//存放生成dom元素
var monthDom=[];
var dayDom=[];
var weekDom=[];
var hourDom=[];
var minutesDom=[];
var secondsDom=[];
var allSet = [
                [monthContent,monthDom],
                [dayContent,dayDom],
                [weekContent,weekDom],
                [hourContent,hourDom],
                [minuteContent,minutesDom],
                [secondsContent,secondsDom]
            ];



var isChange = false;

function btnClick(){
    isChange = true;
    document.getElementsByClassName("btn")[0].style.display = "none"
    clock.style.transform = "rotate(90deg)"
    setTimeout(() => {
        showText()
    }, 200);
}

window.onload = function(){
    init();
    changePosition();
    setInterval(() => {
        getTime();
    }, 100);
}


//初始化样式
function init(){
    for(var i=0;i<allSet.length;i++){ 2 for(var j="0;j<allSet[i][0].length;j++){" var temp="createLabel(allSet[i][0][j]);" clock.appendchild(temp); allset[i][1].push(temp); } function createlabel(text){ odiv="document.createElement("div");" odiv.innertext="text;" odiv.classlist.add("label"); return odiv; gettime(){ labels="document.getElementsByClassName("label");" i="0;i<labels.length;i++){" labels[i].style.fontweight="normal" labels[i].style.color="#000" ; now="new" date(); month="now.getMonth();" day="now.getDate();" week="now.getDay();" hour="now.getHours();" minute="now.getMinutes();" seconds="now.getSeconds()" nowvalue="[month,day-1,week,hour,minute,seconds];" index="nowValue[i];" allset[i][1][index].style.color="yellow" allset[i][1][index].style.fontweight="bolder" if(ischange){ midx="document.body.clientWidth" 2; midy="document.body.clientHeight" -100; r="(i+1)*25" + i*35; deg="360" allset[i][0].length *(j-nowvalue[i]); x="midX" * math.sin(deg*math.pi 180); y="midY" - math.cos(deg*math.pi allset[i][1][j].style.left="x" "px"; allset[i][1][j].style.top="y" allset[i][1][j].style.transform="rotate(" +(deg-90)+"deg)"; changeposition(){ for(let let settimeout(()> {
                allSet[i][1][j].style.position = "absolute";
                allSet[i][1][j].style.left = x + "px";
                allSet[i][1][j].style.top = y + "px";
            }, 50);
        }
    }
}


function showText(){
    var logo = "我这个人，不太会说话 ,,,,也不太会谈恋爱 ,,,,但是呢，遇到你之后我才发现 ,,,,不是我不会 ,,,,是因为之前 ,,,,我根本没有遇到像你这么对路的人 ,,,,我真的很想跟你在一起 ,,,,我需要的不多 ,,,,我需要的只是在你需要的时候 ,,,,我恰好能在你身边 ,,,,我喜欢你呢 ,,,,并不是因为你漂亮 ,,,,而是因为 ,,,,你能给我一种别人给不了的特殊感觉"
    // var logo = "我是一个俗人 ,,,,看山是山 ,,,,看海是海 ,,,,看花是花 ,,,,唯独见了你 ,,,,心潮开始翻涌 ,,,,山岳百川开始震荡 ,,,,满天星光开始闪烁 ,,,,无需你一声令下 ,,,,我和天地间万物便通通奔向你";
    var ptext = document.getElementsByClassName('text')[0];
    var flag = 0;
    var show = true;
    var mouse = document.createElement("span");
    mouse.style.position='absolute';
    mouse.style.left ='0';
    mouse.style.top ='0';
    mouse.innerText = "__"
    ptext.append(mouse);
    var timer = setInterval(function(){
        if(flag</allSet.length;i++){>