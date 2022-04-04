

# ここまでのまとめ

- Node.jsはjQueryとは根本的に違う

- サーバを立ち上げてみたところ、main.jsの内容はサーバーサイドで動いており、ブラウザからは確認できない
  - サーバーサイドで動くJsと、クライアントサイドで動くJsが混在させられる模様
    - 仮説：
      - クライアントサイドのJsをES6等のモダンな記法で書きたい場合、あらかじめES6以降で書いたJsを実行時にコンパイラするだけで終わり？
    

  - Q.サーバーサイド側にクリックイベント等のイベントは用意できるのか？
  - Q.`node main.js`でサーバーを立ち上げられるが、これをWebpack等と一緒にまとめて、立ち上げつつES5への変換を１コマンドで行うことはできるか？