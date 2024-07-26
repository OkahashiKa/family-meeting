# Family-Meeting

両家顔合わせのしおり

## ブランチ運用ルール

- 基本的に Git-Flow のルールを使用する。
- 開発ブランチ develop から`feature/[githubのissue番号]`という名前でブランチを作成する。
- 開発ブランチを develop にマージする際は、レビュワーに[OkahashiKa]()を入れて PR を作成する。

参考[【Git】ブランチ運用ルール「Git-flow」と「GitHub Flow」](https://supersoftware.jp/tech/20221021/17928/)

## 環境構築

https://nextjs.org/

### Next.js

https://nextjs.org/docs/getting-started

1. Next.js アプリケーションの作成

   ```bash
   yarn create next-app --typescript
   ```

   - この後、アプリ名の入力を求められるので入力する。
   - --ts, --typescript オプションで TypeScript で開発を行える。

2. 開発サーバの起動

   ```bash
   yarn dev
   ```

   デフォルトは 3000 番ポートで起動するが、使用済みの場合は 3001, 3002 とインクリメントされていく。

### ディレクトリ構成

```text
family-meeting-app
|-src
| |-pages
| | └-index.tsx
| └-components
└-public
```

#### pages

ルートパス。今回は LP なのでこのページ内にコンポーネントを埋め込んでいくイメージ。

#### components

各コンポーネントを実装する。
コンポーネントが多くなるようであれば、AtomicDesign 等を使用し整理する。

#### public

アイコン等を格納する。基本いじらない。

### Absolute Imports

https://nextjs.org/docs/advanced-features/module-path-aliases

tsconfig.json 内に baseUrl と Path Aliases を設定し、以下の絶対パスの形式で inport を行う。

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}
```

```ts
// importサンプル
import { Button } from "@/components/atoms/button";
```

## ESLint

- Next.js は ESLint がデフォルトでインストールされているため導入不要。

### ESLint の実行

```bash
yarn lint
```
