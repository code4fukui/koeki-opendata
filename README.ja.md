# koeki-opendata

日本の公益法人に関するオープンデータです。このプロジェクトは、政府の公式ポータルサイトである[公益法人information](https://www.koeki-info.go.jp/)から法人情報をスクレイピングして処理するための、CSVデータセットとスクリプトを提供します。

## デモアプリケーション

このデータを利用して構築された検索インターフェースです:

- [公益財団法人検索](https://code4fukui.github.io/koeki-search/)

## データセット

- **`koeki-corps-details.csv`**: 情報源からスクレイピングした完全な生データです。すべての法人区分に加え、すでに存在しない法人やテスト用のエントリも含まれます。このファイルは `fetchDetails.js` によって生成されます。
- **`koeki-zaidan.csv`**: 公益財団法人のみを含む、クリーンアップおよびフィルタリング済みのデータセットです。重複を削除し、全角英数字を半角に変換する処理が行われています。このファイルは `filterDetails.js` によって生成されます。

## データ生成手順

このプロジェクトでは、2段階のプロセスでデータセットを生成します。

### 必要な環境

- [Deno](https://deno.land/)

### 手順

1.  **生データの取得**

    `fetchDetails.js` スクリプトは、IDの連番を順に処理することで、公式ウェブサイトから法人の詳細情報をスクレイピングします。

    **注意:** 実行前に `fetchDetails.js` を手動で編集し、取得したい範囲の `start` と `end` のシーケンス番号を設定する必要があります。

    ```bash
    deno run -A fetchDetails.js
    ```

    このコマンドにより `koeki-corps-details.csv` にデータが出力されます。

2.  **データのフィルタリングとクリーンアップ**

    `filterDetails.js` スクリプトは、`koeki-corps-details.csv` の生データを処理します。重複の削除、テスト用エントリの除外、文字の正規化を行い、最終的な `koeki-zaidan.csv` ファイルを生成します。

    ```bash
    deno run -A filterDetails.js
    ```

## ライセンス

MIT License
