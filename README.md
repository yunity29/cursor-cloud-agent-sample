# cursor-cloud-agent-sample

Cursorのクラウドエージェントからスマホで開発する実験用の、**Reactアプリ**サンプルです。

## 概要

主要なマーケット指標を**一覧表示**します。

- 株価指数（例: 日経平均、TOPIX、NYダウ、S&P 500、NASDAQ）
- 金（Gold）
- 為替（例: USD/JPY、EUR/JPY、EUR/USD）

データは**モック**です（サンプル用途）。後からAPIに差し替え可能な形にしてあります。

## 使い方

```bash
npm install
npm run dev
```

ビルド:

```bash
npm run build
```

## 開発メモ

- `src/data/mockMarket.js`: モックデータ生成
- `src/components/MarketTable.jsx`: 一覧テーブル表示
- `src/components/SectionCard.jsx`: セクションカード

## 免責

本サンプルは投資助言ではありません。表示値はモックです。
