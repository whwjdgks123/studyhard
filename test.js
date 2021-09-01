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

    //    }
  //  }else if(msg == "/무탑"){

 //   }else if(msg =="/악카"){

 //   }else if(msg =="/케방"){
    
  //  }else if(mgs =="/파티메이킹"){

    }else if(msg == "/테스트"){
      var html = Utils.getWebText("https://cafe.naver.com/ragmmobile/34935");
       replier.reply(html);
    }else if(msg =="/악카노렌"){
            replier.reply("악카 노렌카드 정보입니다. 악몽150개 고급130개 중급100개 초급90개, 이상입니다.");
    }else if(msg == "/info"){               
        /*   봇 정보   */
        info_msg_sender = "";
        batt_health = "";
        batt_status = "";
       // info_msg_sender += "묘봇 " + 묘봇_ver + " LIVE\n\n";
        info_msg_sender += "마지막 컴파일 : ";
        info_msg_sender += Run_time.toLocaleString() + "\n\n";
        info_msg_sender += Device.getBuild();
        info_msg_sender += "\nAndroid_Ver : " + Utils.getAndroidVersionCode() + ", " + Utils.getAndroidVersionName() + "OS : \n";
        info_msg_sender += (Utils.getPhoneBrand() + "  " + Utils.getPhoneModel() + "\n\n").toUpperCase();
    
        if(Device.isCharging()){
            info_msg_sender += "충전중  ";
        }
        else{
            info_msg_sender += "전원사용중  ";
        }
        info_msg_sender += Device.getBatteryLevel() + "%  " + Device.getBatteryVoltage() + "mV\n";
        info_msg_sender += "현재 온도 : " + Device.getBatteryTemperature()/10 + "\n";
    
        batt_health = ["BATTERY_STATUS_CHARGING",
                        "BATTERY_STATUS_DISCHARGING",
                        "BATTERY_STATUS_FULL",
                        "BATTERY_STATUS_NOT_CHARGING",
                        "BATTERY_STATUS_UNKNOWN"];
    
        batt_status = ["BATTERY_HEALTH_COLD",
                        "BATTERY_HEALTH_DEAD",
                        "BATTERY_HEALTH_GOOD",
                        "BATTERY_HEALTH_OVERHEAT",
                        "BATTERY_HEALTH_OVER_VOLTAGE",
                        "BATTERY_HEALTH_UNKNOWN",
                        "BATTERY_HEALTH_UNSPECIFIED_FAILURE"];
    
        info_msg_sender += batt_status[Device.getBatteryStatus()] + "\n";
        info_msg_sender += batt_health[Device.getBatteryHealth()] + "\n\n";
    
        info_msg_sender += "WIFI STATUS : " + Api.getContext().getSystemService(android.content.Context.WIFI_SERVICE).getConnectionInfo();
    
        replier.reply(info_msg_sender);
    }else if(cmd[0] == "/번역") {
        /*
            구글 번역
            © 2020 Dark Tornado, All rights reserved.
            BSD-3-Clause License
            /번역 [언어1] [언어2] [내용]
            20210825 이슈 - 번역이안되고 내용을 그냥 송출
        */
        var data = org.jsoup.Jsoup.connect("http://translate.googleapis.com/translate_a/single")
            .data("client", "gtx")
            .data("sl", cmd[1])
            .data("tl", cmd[2])
            .data("dt", "t")
            .data("q", cmd.slice(3).join(" "))
            .data("&ie", "UTF-8")
            .data("ie", "UTF-8")
            .data("oe", "UTF-8")
            .ignoreHttpErrors(true).ignoreContentType(true).post().wholeText();
        data = JSON.parse(data);
        var result = data[0][0][0];
        replier.reply("번역 결과 : " + result);
    }
    

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

let data = {};
const time = 5; //딜레이 초.
const roomlist = [
    // 방 1
    {
    'name' : '☆꼬마맹수☆', 
    'in' : '어서오세요 꼬맹입니다~!', 
    'out' :'나갈땐 마음대로 못가는데...퓨형한테 일러야지',
    'link' : 'https://open.kakao.com/o/g93D00hd'
    },


    
    /* 
    * 아래는 예시입니다 
    {
    'name' : '[ 카카오톡 봇 개발하기 ]',
    'in' : '카톡봇방에 오신걸 환영합니다!',
    'out' : '안녕히 가세요..ㅠ',
    'link' : 'https://open.kakao.com/o/gENbu6Nb'   
    }

    아직 개발중
    */
];

const Runnable = java.lang.Runnable;
const Executors = java.util.concurrent.Executors;
const TimeUnit = java.util.concurrent.TimeUnit;
const Context = android.content.Context;
const PowerManager = android.os.PowerManager;
let pm = Api.getContext().getSystemService(Context.POWER_SERVICE);
let wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "ChatBot");
wakeLock.acquire();

var timer = Executors.newSingleThreadScheduledExecutor().scheduleAtFixedRate(new Runnable({
    run: function () {
        for(let i = 0; i < roomlist.length; i++) {
            let site = JSON.parse(org.jsoup.Jsoup.connect('https://open.kakao.com/c/search/unified?q='+roomlist[i]['link']).ignoreContentType(true).get().text());
            if(site['count']!=1) continue;
            if(data[roomlist[i]['name']] == undefined) {
                data[roomlist[i]['name']] = {};
                data[roomlist[i]['name']]['member'] = site['items'][0]['mcnt'];
            }
                                
            if(data[roomlist[i]['name']]['member'] < site['items'][0]['mcnt']) {
                if(!Api.canReply(roomlist[i]['name'])) log.e('방 ['+roomlist[i]['name']+'] 에 메세지를 보낼 수 없습니다');
                else Api.replyRoom(roomlist[i]['name'], roomlist[i]['in']);
            } else if(data[roomlist[i]['name']]['member'] > site['items'][0]['mcnt']) {
                if(!Api.canReply(roomlist[i]['name'])) log.e('방 ['+roomlist[i]['name']+'] 에 메세지를 보낼 수 없습니다');
                else Api.replyRoom(roomlist[i]['name'], roomlist[i]['out']);
            }
            data[roomlist[i]['name']]['member'] = site['items'][0]['mcnt'];
        }
    }
}), 0, time * 333* 3, TimeUnit.MILLISECONDS);

function onStartCompile() {
    timer.cancel(false);
}