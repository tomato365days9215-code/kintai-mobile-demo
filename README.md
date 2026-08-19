# KINTAI PRO Demo UI - Auto Update PWA

製品版とは分離した、モバイルデモ専用PWAの自動更新対応版です。

## 自動更新の改善
- Service Worker の `skipWaiting()` で新バージョンを即時有効化
- `clients.claim()` で開いている画面を新Workerの制御下へ移行
- 起動時に `registration.update()` で必ず更新確認
- `updateViaCache: "none"` で `sw.js` 自体を古いHTTPキャッシュから取得しない
- 新Workerが制御を開始したらアプリを1度だけ自動再読み込み
- 古いバージョンのCache Storageを自動削除
- オンライン時はHTML/CSS/JSをnetwork-firstで取得し、オフライン時だけキャッシュへフォールバック

## GitHub Pagesでの更新方法
既存リポジトリのルートにある以下のファイルを、このZIP内の同名ファイルで置き換えてコミットしてください。

- index.html
- styles.css
- app.js
- manifest.webmanifest
- sw.js
- icon-192.svg
- icon-512.svg

通常は次回のオンライン起動時に新UIへ自動更新されます。

## 重要
PWAの仕様上、端末やOSの状態によってService Workerの更新確認タイミングに多少差があります。ただしこの版では、オンライン起動時にアプリ自身が更新確認を行うため、以前のキャッシュ優先版より大幅に更新が反映されやすくなっています。
