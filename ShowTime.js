var th;
var nd = new Date();
var window = null;
var l,r,t,lw,rh;
var tr = false;
var h = parseInt(nd.getHours());
var m = parseInt(nd.getMinutes());
var s = parseInt(nd.getSeconds());
//var klang = readFile(sdcard+"/Woods/ShowTime/Lang/ko");
var vs = readFile(sdcard+"/Woods/ShowTime/Versions/Versions");
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var muing = sdcard+"/Woods/ShowTime/Lang/Multilingual";
var optin = sdcard+"/games/com.mojang/minecraftpe/options.txt";
function cm(msg){clientMessage("[ ShowTime ]"+msg);}
function newLellel(){try{makeFolder(sdcard+"/Woods");java.lang.Thread.sleep(100);
	makeFolder(sdcard+"/Woods/ShowTime");java.lang.Thread.sleep(100);
	makeFolder(sdcard+"/Woods/ShowTime/Lang");makeFolder(sdcard+"/Woods/ShowTime/Versions");java.lang.Thread.sleep(300);
	makeFile(sdcard+"/Woods/ShowTime/Lang/Multilingual");makeFile(sdcard+"/Woods/ShowTime/Versions/Versions");}catch(e){print(e);}}
function makeFolder(path){try{var file = new java.io.File(path); if(!file.exists()){file.mkdir(); /*print(" "+path+" 폴더생성");*/}else{}}catch(e){clientMessage(e);}}
function makeFile(path){try{var file = new java.io.File(path); if(file.createNewFile()){/*print("§6"+path+" §2파일생성");*/}else{}}catch(e){clientMessage(e);}}
function saveFile(path,content,bool){try{var file = new java.io.File(path); if(!file.exists()){ return null;}var fw = new java.io.FileWriter(file,bool); var bw = new java.io.BufferedWriter(fw); 
    var str = new java.lang.String(content);bw.write(str); bw.close(); fw.close();}catch(e){clientMessage(e);}}
function readFile(path){try{var file = new java.io.File(path); if(!(file.exists())) return null;var fis = new java.io.FileInputStream(file);var isr = new java.io.InputStreamReader(fis);
	var br = new java.io.BufferedReader(isr);var s = br.readLine();var read = "";
	while((read = br.readLine()) !== null) s += "" + read;fis.close(); isr.close(); br.close();return s;}catch(error){print("error : " + error);}}//contents
function readConts(path,contents) {var file = java.io.File(path);var fis = new java.io.FileInputStream(file);var isr = new java.io.InputStreamReader(fis);
	var br = new java.io.BufferedReader(isr);var string = "";
	while(true) {var str = br.readLine();if(str == null) break;
		str += ""; if(str.split(":")[0] == contents) {string = str.split(":")[1];break;}}
fis.close();isr.close();br.close();return string;}
//function test(){var a = readConts(sdcard+"/games/com.mojang/minecraftpe/options.txt","gfx_guiscale");cm(a)}
function dip2px(ctx, dips){return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);}
function closeWindow(){ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{if(window!=null){window.dismiss(); window = null}}catch(e){clientMessage(e+", "+e.lineNumber)}}}));}
function clopenWindow(){ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{if(window!=null){window.dismiss(); window = null; openWindow();}}catch(e){clientMessage(e+", "+e.lineNumber)}}}));}
function newLevel(){try{java.lang.Thread.sleep(3000);koLange();}catch(e){cm(" 인터넷 연결을 확인해 주세요.")}}
function selectLevelHook(){newLellel(); versions()}
function versions(){var vs = readFile(sdcard+"/Woods/ShowTime/Versions/Versions"); try{download(sdcard+"/Woods/ShowTime/Versions/Versions","https://www.dropbox.com/s/0l86try047gjlc0/Versions.txt?dl=1","Woods/ShowTime/Versions","Versions");}catch(e){}}
function koLange(){try{var vs = readFile(sdcard+"/Woods/ShowTime/Versions/Versions");var klang = readFile(sdcard+"/Woods/ShowTime/Lang/Multilingual");
if(getNetwork()=="wifi"){cm(readConts(muing,"ko_wifi"));cm(" 현재버전: 1.0"+(readConts(muing,"ko_newver"))+": "+(vs.split("\n")[0])+(readConts(muing,"ko_langver"))+": "+(klang.split("|")[1]))
	}else if(getNetwork()=="mobile"){cm(readConts(muing,"ko_mobile"));cm(" 현재버전: 1.0"+(readConts(muing,"ko_newver"))+": "+(vs.split("\n")[0])+(readConts(muing,"ko_langver"))+": "+(klang.split("|")[1]))
	}else if(getNetwork()=="offline"){cm(" 현재버전: 1.0"+(readConts(muing,"ko_langver"))+": "+(klang.split("|")[1])+(readConts(muing,"ko_newver"))+":\n"+(readConts(muing,"ko_notnetworks")))}}catch(e){saveFile(sdcard+"/Woods/ShowTime/Versions/Versions", "1.0", false);
	saveFile(sdcard+"/Woods/ShowTime/Lang/Multilingual","Versions_|1.0|\nko_KR\nko_wifi: Wi-fi가 연결되어 있습니다.\nko_mobile: 데이터 네트워크가 켜져 있습니다.\nko_newver: 최신버전 \nko_notnetworks: \"최신버전을 보시려면 원활한 인터넷 연결 후 다시 접속해 주세요.\"\nko_langver: 언어버전", false); koLange2(); cm(" 데이터 생성완료!");}}
function koLange2(){try{var klang = readFile(sdcard+"/Woods/ShowTime/Lang/Multilingual");
	if(getNetwork()=="wifi"){cm(readConts(muing,"ko_wifi"));
	}else if(getNetwork()=="mobile"){cm(readConts(muing,"ko_mobile"));
	}else if(getNetwork()=="offline"){cm(" 현재버전: 1.0"+(readConts(muing,"ko_langver"))+": "+(klang.split("|")[1])+(readConts(muing,"ko_newver"))+":\n"+(readConts(muing,"ko_notnetworks")));}}catch(e){cm(" 인터넷 연결을 확인해 주세요.")}}
function modTick(){if(tr==true){s+=0.05; if(Math.round(s)>=59){m++; s=0;clopenWindow();}if(m==60){m=0; h++; clopenWindow();}}}
function screenChangeHook(screenName){
	//게임 플레이 화면
if(screenName=="in_game_play_screen"){
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{
		if(readConts(optin,"gfx_guiscale")=="-1"){l = 0;r = 50;t = 7;lw = 30;rh = 9;}
		else if(readConts(optin,"gfx_guiscale")=="0"){l = 0;r = 55;t = 9;lw = 35;rh = 12;}
		else if(readConts(optin,"gfx_guiscale")=="1"){l = 0;r = 60;t = 12;lw = 47;rh = 18;}
		openWindow();
		}catch(e){}}}));
	}
	//GUI 화면
if(screenName=="hud_screen"){
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{
		if(readConts(optin,"gfx_guiscale")=="-1"){l = 0;r = 50;t = 7;lw = 30;rh = 9;}
		else if(readConts(optin,"gfx_guiscale")=="0"){l = 0;r = 55;t = 9;lw = 35;rh = 12;}
		else if(readConts(optin,"gfx_guiscale")=="1"){l = 0;r = 60;t = 12;lw = 47;rh = 18;}clopenWindow();
		}catch(e){clientMessage(e+", "+e.lineNumber);}}}));
	}
	//채팅창
	if(screenName=="chat_screen"){
ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{
		if(readConts(optin,"gfx_guiscale")=="-1"){l = 0;r = 100;}
		else if(readConts(optin,"gfx_guiscale")=="0"){l = 0;r = 150;}
		else if(readConts(optin,"gfx_guiscale")=="1"){l = 0;r = 200;}window.update(l, r, lw*parseInt(2), rh*parseInt(2), false);
}catch(e){}}}));
	}
	//서바이벌 인벤토리 화면
if(screenName=="survival_inventory_screen"){
		ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{
		if(readConts(optin,"gfx_guiscale")=="-1"){l = 1190;r = 690;}
		else if(readConts(optin,"gfx_guiscale")=="0"){l = 1190;r = 100;}
		else if(readConts(optin,"gfx_guiscale")=="1"){l = 0;r = 680;}window.update(l, r, lw*parseInt(2), rh*parseInt(2), false);
		}catch(e){}}}));}}
timeWhile(1000);
function timeWhile(time){
	th=new java.lang.Thread(new java.lang.Runnable({
		run:function(){
			try{
				while(!th.isInterrupted()){
				java.lang.Thread.sleep(time);
				useModTick();}
			}catch(e){}
		}}));
th.start();}
function useModTick(){s+=1; if(Math.round(s)>=59){s=0; m++; clopenWindow();}if(m==59){m=0; h++; clopenWindow();}if(h==24){h=1; clopenWindow();}}
function leaveGame(){closeWindow();tr=false;}
function openWindow(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function(){
			try{
				window = new android.widget.PopupWindow();
				var textv = new android.widget.TextView(ctx);
				var layout = new android.widget.LinearLayout(ctx);
				var scroll = new android.widget.HorizontalScrollView(ctx);
				layout.setOrientation(0);
				setTextv(h+"h "+m+"m",t);
				layout.addView(textv);
				scroll.addView(layout);
				window.setContentView(scroll);
				setWindow(lw, rh, l, r);
				}catch(e){clientMessage(e+", "+e.lineNumber);}
		}}));
}
function setTextv(text, ts){
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){
		try{
				textv.setText(text);
				textv.setShadowLayer(5, 4, 4, android.graphics.Color.BLACK);
				textv.setTextColor(android.graphics.Color.parseColor('#FFFFFF'));
				textv.setTextSize(ts);
				textv.setGravity(android.view.Gravity.CENTER);
}catch(e){clientMessage(e+", "+e.lineNumber);}
		}}));
}
function setWindow(sw, sh, sl, sr){
	ctx.runOnUiThread(new java.lang.Runnable({run : function(){
		try{
				window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); //색 TRANSPARENT DKGRAY
				window.setWidth(dip2px(ctx, sw));
				window.setHeight(dip2px(ctx, sh));
				window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, sl, sr); //위치
			/*if(lrt == "LEFT"){
				window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT|android.view.Gravity.TOP, sl, sr);}*/
}catch(e){clientMessage(e+", "+e.lineNumber);}
		}}));
}
function getNetwork(){
	var manager = ctx.getSystemService(ctx.CONNECTIVITY_SERVICE);
	var mobile = manager.getNetworkInfo(android.net.ConnectivityManager.TYPE_MOBILE).isConnectedOrConnecting();
	var wifi = manager.getNetworkInfo(android.net.ConnectivityManager.TYPE_WIFI).isConnectedOrConnecting();
	if(mobile) return "mobile";
	else if(wifi) return "wifi";
	else return "offline";
}
function download(path,url,pathName,fileName){
	var klang = readFile(sdcard+"/Woods/ShowTime/Lang/Multilingual");
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function(){
			try{
				var file = new java.io.File(path);
				if(getNetwork()=="mobile"||getNetwork()=="wifi"){
					var uri = new android.net.Uri.parse(url);
					var dm = new android.app.DownloadManager.Request(uri);
					dm.setDestinationInExternalPublicDir(pathName,fileName);
					dm.setNotificationVisibility(0);
					ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
					java.lang.Thread.sleep(800);
					if(file.exists()) file.delete();
				}else{/*cm(" 인터넷 연결을 확인해 주세요.")*/}
			}catch(e){cm(" "+e)}
		}
	}));
}
