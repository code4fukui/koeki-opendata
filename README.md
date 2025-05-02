# koeki-opendata

公益法人オープンデータ

[国・都道府県公式公益法人行政総合情報サイト　公益法人information](https://www.koeki-info.go.jp/) のデータをCSVとしてまとめました

## opendata

- [koeki-zaidan.csv](koeki-zaidan.csv) - 公益財団データ (廃止された法人を含む、全角アルファベットは半角に変換)
- [koeki-corps-details.csv](koeki-corps-details.csv) - 全件取得 (テストデータ、廃止された法人を含む)

## apps

- [公益財団検索](https://code4fukui.github.io/koeki-search/)

## how to make

```sh
deno -A fetchDetails.js
deno -A filterDetails.js
```
