# MMA DESIGN Portfolio

株式会社 松浪光倫建築計画室のポートフォリオサイト

## 技術スタック

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)
- **Google Fonts** (Noto Serif JP, Inter)

## デザインテーマ

"Architectural Silence" - ミニマリズムを追求した建築写真を際立たせるデザイン

- **配色**: Off White (#F5F5F3) / Dark Grey (#1A1A1A)
- **タイポグラフィ**: 日本語見出しは明朝体（Noto Serif JP）、本文はサンセリフ（Inter）

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## プロジェクト構造

```
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ
│   └── globals.css     # グローバルスタイル
├── components/
│   ├── Header.tsx      # ヘッダーコンポーネント
│   ├── Hero.tsx        # ヒーローセクション（画像スライダー）
│   ├── Concept.tsx     # コンセプトセクション（縦書きテキスト）
│   ├── Works.tsx       # 作品ギャラリー（Masonryレイアウト）
│   └── Footer.tsx      # フッターコンポーネント
└── public/             # 静的ファイル
```

## 主な機能

- **Hero Section**: フルスクリーン画像スライダー（自動切り替え、ズームエフェクト）
- **Concept Section**: 縦書きテキストによる建築哲学の表現
- **Works Gallery**: Masonryレイアウトによる作品展示（ホバーエフェクト付き）
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応

## ビルド

```bash
npm run build
npm start
```
