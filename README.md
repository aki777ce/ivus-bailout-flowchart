# IVUSカテーテルスタック ベイルアウト・フロー

これは、心血管インターベンション中に発生するIVUSカテーテルのスタック（固着）問題に対応するための、インタラクティブなフローチャート形式のWebアプリケーションです。実際の臨床現場で使用される判断アルゴリズムに基づき、医療従事者が複雑な状況下で最適な手技を選択できるよう支援することを目的としています。

## ✨ 主な機能

- **インタラクティブなフローチャート**: 状況に応じて表示される選択肢をクリックすることで、次のステップに進むことができます。
- **視覚的な処置ガイド**: 特定の処置項目では、「表示」ボタンをクリックすると手技のイラストがモーダルウィンドウで表示され、理解を助けます。
- **レスポンシブデザイン**: デスクトップPCからタブレット、スマートフォンまで、様々なデバイスで快適に利用できます。
- **明確な結果表示**: フローの最後には、「抜去成功」または「外科処置」といった最終的な結果が分かりやすく表示されます。

## 🛠️ 使用技術

- **フロントエンド**: [React](https://react.dev/) (v19) with TypeScript
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) (CDN経由)
- **ビルドツール**: なし (ESMと`importmap`を利用したモダンなビルドレス構成)

このプロジェクトは、`npm install`やビルドプロセスを必要とせず、ブラウザだけで直接動作するように作られています。

## 🚀 ローカルでの実行方法

このアプリケーションを実行するのに複雑な手順は不要です。

1.  **リポジトリをクローンまたはダウンロードします。**
    ```bash
    git clone [リポジトリURL]
    ```
2.  **プロジェクトのルートディレクトリで、ローカルウェブサーバーを起動します。**
    Pythonがインストールされている場合、以下のコマンドが簡単です。
    ```bash
    # Python 3.x
    python -m http.server
    ```
    VS Codeをお使いの場合は、[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)拡張機能を利用して`index.html`を右クリックし、「Open with Live Server」を選択するのが便利です。

3.  **ブラウザで表示されたURL（例: `http://localhost:8000`）にアクセスします。**

以上でアプリケーションが起動します。

## 📂 プロジェクト構造

```
.
├── images/
│   ├── balloon_dilatation_double_gc.png
│   └── image-core-gw-exchange.png
├── components/
│   ├── ActionListItem.tsx       # 各処置項目を表示するコンポーネント
│   ├── DecisionNode.tsx         # 質問と選択肢を表示するノード
│   ├── ImageModal.tsx           # 画像表示用モーダル
│   └── ResultNode.tsx           # 最終結果を表示するノード
├── constants/
│   └── flowchartData.ts         # フローチャートの全データ構造を定義
├── App.tsx                      # アプリケーションのメインコンポーネント
├── index.html                   # エントリーポイントのHTMLファイル
├── index.tsx                    # Reactのルートをマウントするスクリプト
├── metadata.json                # アプリケーションのメタデータ
├── README.md                    # このファイル
└── types.ts                     # プロジェクト全体で使われる型定義
```
