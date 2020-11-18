//key.js 環境によってエクスポートするキーセットを変更
if (process.env.NODE_ENV === "production") {
  //本番環境の場合、prodキーセットをエクスポート
  module.exports = require("./prod");
} else {
  //開発環境だった場合、devキーセットをエクスポート
  module.exports = require("./dev");
}
