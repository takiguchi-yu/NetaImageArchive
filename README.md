# ネタ画像庫

いろいろなネタ画像を閲覧できるWebサイト。チャットやDMへの返しだったり、プレゼン資料の挿し絵に使われることを想定。

https://netaimagearchive.web.app/

## リポジトリ構成

ブランチ構成は「モノレポ(monorepo)」とする。

# Pull Request命名規則

## タイトル

`[プロジェクト名] XXX`

(例)

`[fc_api] ユーザー退会APIの実装` 

# Branch命名規則

## `feature/[platform名]/*`

機能開発系のブランチ

stagingブランチから切って作業を行う

## `release/[platform名]/staging`

検証環境用ブランチ

プラットフォームごとに分かれている

## `main`

本番環境用ブランチ

## `hotfix/*`

本番環境に対する緊急リリース

mainから切ってmainに対してマージを行う

# リリース手順

1. featureブランチを"release/[platform名]/staging"に対してマージを行う  
この際に必ずsquash mergeを行う
2. release/[platform名]/stagingをmainに対してマージする

# 基本的な心がけ

- コミットメッセージは適当に書かない
- stagingでエラーが発生したら、一度リバートして、修正を行う(コミット履歴を汚さない)
- stagingに混ぜる際は本番と同じ気持ちで(のちに開発環境を作成する)
- PRに情報をしっかりと書く
- マージしたブランチは消す

# 参考

* モノレポにおけるgitブランチ運用との戦い  
https://zenn.dev/solt/articles/5d3e1303c64c2a
* Github actions  
https://docs.github.com/ja/actions/using-workflows/about-workflows
