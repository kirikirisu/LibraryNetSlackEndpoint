# ワークフロー

リポジトリをクローン後以下のコマンドを実行する

- yarn install // 依存関係をインストール
- yarn watch // ts ファイルの変更監視&コンパイル
- yarn dev // コンパイルされたファイルを監視&実行

// devlopment
ngrok により https でこのサーバーを公開する(slack は https で post を投げてくるため)

- ngrok http 8080 // 8080 番の port を公開
- ngrok により公開された https URL を Slack の Interactivity & Shortcuts -> Interactivity -> Request URL に追加する

これで slack のスラッシュコマンドやボタンからのリクエストをこのサーバーで受け取ることができる。

// production
