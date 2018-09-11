# GoogleCalenderから明日の予定をLine通知

Googleカレンダーに登録されている明日の予定をLine Notifyに通知します。

## 使い方
1. LINE Notifyのトークンを取得
2. Apps ScriptのスクリプトプロパティにMAIL_ADDRESSとNOTIFY_TOKENを設定
3. notifyTomorrowsEvents.jsをGoogle Apps Scriptに設定(動作トリガは適宜設定)
4. トリガが起動すればLineに通知が飛ぶ
5. 以上
