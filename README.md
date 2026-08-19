# KINTAI Mobile Demo

製品版とは独立したモバイルデモ専用PWAです。

- FastAPI / DB不要
- iPhone / Android / PC対応
- 公開HTTPS URLなら4G/5G/Wi-Fiを問わず利用可能
- 初回読み込み後は主要画面をオフライン利用可能
- GPS付き出勤/退勤
- 勤務履歴・申請デモ
- データは端末内 localStorage に保存

## 実機デモ
GPSとPWAのため、GitHub Pages / Cloudflare Pages / Netlify / VercelなどHTTPSホスティングへ配置してください。

## GitHub Pages例
1. このフォルダの中身をGitHubリポジトリへアップロード
2. Settings → Pages
3. Deploy from a branch
4. main / root を選択
5. 発行された https URLをスマホで開く

## iPhone
Safari → 共有 → ホーム画面に追加

## Android
Chrome → メニュー → アプリをインストール / ホーム画面に追加

## 製品版との違い
正式なログイン、サーバーDB、管理者承認、社員間データ共有はありません。デモの操作感とGPS打刻確認を目的としています。
