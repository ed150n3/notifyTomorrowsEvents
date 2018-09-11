function notifyTomorrowsEvents() {
  
  // ScriptPropertyを取得
  const mail = PropertiesService.getScriptProperties().getProperty('MAIL_ADDRESS');
  
  // カレンダーオブジェクトを取得
  const cal = CalendarApp.getCalendarById(mail);

  // 翌日のイベントリストを取得
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  console.log(tomorrow.getDate());
  const events = cal.getEventsForDay(tomorrow);
  
  // 通知メッセージを初期化
  const message = "";
  // イベントリストをループ
  events.forEach(function(event) {
    // イベント名を取得
    const title = event.getTitle();
    
    // イベント名を結合
    message = message + '\n' + title;
  });

  // Line Notifyに通知
  notifyToLine(message);
}

// Line Notifyに通知
function notifyToLine(message){
  
  // get Line Notify token.
  const token = PropertiesService.getScriptProperties().getProperty('NOTIFY_TOKEN');
  const options =
  {
   "method"  : "post",
   "payload" : "message=" + message,
   "headers" : {"Authorization" : "Bearer "+ token}
  };

   // ライン通知送信
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}