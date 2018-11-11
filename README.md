# webtask-chatwork

webtask.ioのschedulerを使ってchatworkに新しいメッセージを送信する

# 使い方

## ChatWorkの作業

- APIトークン を取得 
→ [ChatWork API Token](https://www.chatwork.com/service/packages/chatwork/subpackages/api/token.php)

- 対象のチャットルームIDを控える
→ [ルームIDの確認方法](https://help.chatwork.com/hc/ja/articles/360000142942-%E3%83%AB%E3%83%BC%E3%83%A0ID%E3%82%92%E7%A2%BA%E8%AA%8D%E3%81%99%E3%82%8B)

## webtask.io の作業

- webtask.io アカウント発行 → [webtask.io](https://webtask.io/)

- `create new`より適当なファイルを作成、ソースを貼り付ける

- ソース内のルームID、メッセージを変更する

- `Secrets` より `Add Secret`、keyに `CHATWORK_API_KEY`、valueに`ChatWork API Token` を入力し `Save`で保存する

