var nd = new Date();
var menu = null;
var h = nd.getHours();
var m = nd.getMinutes();
var s = nd.getSeconds()-8;
var klang = readFile(sdcard+"/Woods/ShowTime/Lang/ko");
var vs = readFile(sdcard+"/Woods/ShowTime/Versions/Versions");
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
function cm(msg){clientMessage("[ ShowTime ]"+msg);}
function newLellel(){try{makeFolder(sdcard+"/Woods");java.lang.Thread.sleep(100);makeFolder(sdcard+"/Woods/ShowTime");java.lang.Thread.sleep(100);makeFolder(sdcard+"/Woods/ShowTime/Lang");
	makeFolder(sdcard+"/Woods/ShowTime/Versions");java.lang.Thread.sleep(100);makeFile(sdcard+"/Woods/ShowTime/Lang/ko");makeFile(sdcard+"/Woods/ShowTime/Versions/Versions");}catch(e){print(e);}}
function makeFolder(path){try{var file = new java.io.File(path); if(!file.exists()){file.mkdir(); print(" "+path+" 폴더생성");}else{}}catch(e){clientMessage(e);}}
function makeFile(path){try{var file = new java.io.File(path); if(file.createNewFile()){clientMessage("§6"+path+" §2파일생성");}else{}}catch(e){clientMessage(e);}}
function saveFile(path,content,bool){try{var file = new java.io.File(path); if(!file.exists()){ return null;}var fw = new java.io.FileWriter(file,bool); var bw = new java.io.BufferedWriter(fw); 
    var str = new java.lang.String(content);bw.write(str); bw.close(); fw.close();}catch(e){clientMessage(e);}}
function readFile(path){try{var file = new java.io.File(path); if(!(file.exists())) return null;var fis = new java.io.FileInputStream(file);var isr = new java.io.InputStreamReader(fis);
	var br = new java.io.BufferedReader(isr);var s = br.readLine();var read = "";
	while((read = br.readLine()) !== null) s += "\n" + read;fis.close(); isr.close(); br.close();return s;}catch(error){print("error : " + error);}}
function dip2px(ctx, dips){return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);}
function closeMenu(){ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{if(menu!=null){menu.dismiss(); menu = null}}catch(e){clientMessage(e+", "+e.lineNumber)}}}));}
function clopenMenu(){ctx.runOnUiThread(new java.lang.Runnable({run : function(){try{if(menu!=null){menu.dismiss(); menu = null; openMenu();}}catch(e){clientMessage(e+", "+e.lineNumber)}}}));}
function newLevel(){koLange(); java.lang.Thread.sleep(1000); versions();}
function selectLevelHook(){newLellel();openMenu();}
function versions(){var vs = readFile(sdcard+"/Woods/ShowTime/Versions/Versions"); try{
	if((vs.split("\n")[1])=="1.0"){download(sdcard+"/Woods/ShowTime/Versions/Versions","https://www.dropbox.com/s/p4fsbevhrywf7rb/Versions.txt?dl=1","Woods/ShowTime/Versions","Versions");}else{}}catch(e){}}
function koLange(){try{var klang = readFile(sdcard+"/Woods/ShowTime/Lang/ko"); var vs = readFile(sdcard+"/Woods/ShowTime/Versions/Versions");
	if(getNetwork()=="wifi"){cm((klang.split("ko.lang:")[1]));cm(" 현재버전: 1.0"+(klang.split("ko.lang:")[3])+" /"+(vs.split("\n")[1]))
	}else if(getNetwork()=="mobile"){cm((klang.split("ko.lang:")[2]));cm(" 현재버전: 1.0"+(klang.split("ko.lang:")[3])+" /"+(vs.split("\n")[1]))}else if(getNetwork()=="offline"){
		cm(" 현재버전: 1.0"+(klang.split("ko.lang:")[3])+(klang.split("ko.lang:")[4]));
		/*saveFile(sdcard+"/Woods/ShowTime/Lang/ko","Versions_1.0\nko_KR\nko.lang: Wi-fi가 켜져 있습니다.\nko.lang: 데이터 네트워크가 켜져 있습니다.\nko.lang: 최신버전: \nko.lang: 다운로드에 실패하였습니다.\nko.lang: 다음 업데이트를 기다려 주세요.", false);
		saveFile(sdcard+"/Woods/ShowTime/Versions/Versions", "\n1.0", false);*/
	}}catch(e){
	saveFile(sdcard+"/Woods/ShowTime/Lang/ko","Versions_1.0\nko_KR\nko.lang: Wi-fi가 켜져 있습니다.\nko.lang: 데이터 네트워크가 켜져 있습니다.\nko.lang: 최신버전: \nko.lang: \"최신버전을 보실려면 인터넷 연결후 다시 접속해 주세요.\"\nko.lang: 다음 업데이트를 기다려 주세요.", false);
	saveFile(sdcard+"/Woods/ShowTime/Versions/Versions", "\n1.0", false); koLange2(); cm(" 데이터 생성완료!");}}
function koLange2(){var klang = readFile(sdcard+"/Woods/ShowTime/Lang/ko"); if(getNetwork()=="wifi"){cm((klang.split("ko.lang:")[1]))}else if(getNetwork()=="mobile"){cm((klang.split("ko.lang:")[2]))}else if(getNetwork()=="offline"){
		cm(" 현재버전: 1.0"+(klang.split("ko.lang:")[3])+(klang.split("ko.lang:")[4]));}}
function modTick(){s+=0.05; if(Math.round(s)>=60){m++; s=0; clopenMenu();}if(m==60){m=0; h++; clopenMenu();}}
function leaveGame(){closeMenu();}
function openMenu(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function(){
			try{
				menu = new android.widget.PopupWindow();
				var title = new android.widget.TextView(ctx);
				var layout = new android.widget.LinearLayout(ctx);
				layout.setOrientation(0);
				title.setText(h+"h "+m+"m");
				title.setShadowLayer(5, 4, 4, android.graphics.Color.BLACK);
				title.setTextColor(android.graphics.Color.parseColor('#FFFFFF'));
				title.setTextSize(9);
				title.setGravity(android.view.Gravity.CENTER); 
				layout.addView(title);
				var scroll = new android.widget.HorizontalScrollView(ctx);
				scroll.addView(layout);
				menu.setContentView(scroll);
				menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); //색
				menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*1/16);
				menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight()*1.5/15);
				menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP, 0, 55); //위치
				}catch(e){clientMessage(e+", "+e.lineNumber);
				}
		}
	}));
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
	var klang = readFile(sdcard+"/Woods/ShowTime/Lang/ko");
	ctx.runOnUiThread(new java.lang.Runnable({
		run : function(){
			try{
				var file = new java.io.File(path);
				if(file.exists()) file.delete();
				if(getNetwork()=="mobile"||getNetwork()=="wifi"){var uri = new android.net.Uri.parse(url);
					var dm = new android.app.DownloadManager.Request(uri);
					dm.setDestinationInExternalPublicDir(pathName,fileName);
					dm.setNotificationVisibility(0);
					ctx.getSystemService(android.content.Context.DOWNLOAD_SERVICE).enqueue(dm);
				}else{/*cm((klang.split("ko.lang:")[4]))*/}
			}catch(e){clientMessage(e)}
		}
	}));
}
