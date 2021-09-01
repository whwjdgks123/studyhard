let msg_arr  = {};
msg_arr["zzz"] = "good night";
msg_arr["hello"] = "hello world!";
let Run_time = new Date(); 


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    var cmd = msg.split(" ");
    if(msg_arr[msg]){
        replier.reply(msg_arr[msg]);
    }else if(msg == "/현재시간"){                 
        now = new Date();
        replier.reply("현재시간 : " + now.toLocaleString() + "KST");
       // if(){ /*공성전, 결전 알람 수요일,일요일 오후8시 30분, 오후8시 50분 */ 

    }else if(msg =="/악카노렌"){
        replier.reply("악카 노렌카드 정보입니다. 악몽150개 고급130개 중급100개 초급90개, 이상입니다.");

    }else if(msg.trim() == "/무탑"){
        var u = Utils.getWebText("https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1356?fromList=true&menuId=50");
        var a = u.split("<h2 class=\"tit\"><!---->8/30 무탑/케방</h2>")[1].split("<span>8/30 무탑/케방</span>")[0].replace(/(<([^>]+)>)/g, "").trim().split("\n");
         replier.reply("무탑 정보" + a.join("\n"));
   
    

    }else if(msg =="/테스트" ){   
        var u = "";
        var u = Utils.getWebText("https://m.cafe.naver.com/ca-fe/web/cafes/30421739/articles/1356?fromList=true&menuId=50");
        replier.reply(u);
    }

    /*   봇 컴파일   */
    function recompile_bot_func(){
        let compile_result = Api.compile("DOGE_BOT");
        if(compile_result == true){
            return "Compile Complete";
        }
        else{
            return "Compile Failed";
        }
    }


/*
* © 2021 kaan, All rights reserved.
* https://blog.naver.com/junyoungbae02/222081674571
*/

}