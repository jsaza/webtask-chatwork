/**
* @param context {WebtaskContext}
*/
const chatwork = require('chatwork-client');

module.exports = async function (context) {
  // パラメータをセット
  let chatworkParams = {
    chatworkToken: context.secrets.CHATWORK_API_KEY,
    roomId: 999999, 
    msg: "メッセージ本文"
  };

  // initialize.
  chatwork.init(chatworkParams);

  // 指定したチャットルームへメッセージを送信する
  chatwork.postRoomMessages()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("ERROR:");
      console.log(err);
    });

  return { hello: context.query.name || 'Anonymous' };
};
