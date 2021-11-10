// /.netlify/functions/yep

exports.handler = (event, context, callback) => {
  // console.log(event);
  callback(null, {
    statusCode: 201,
    body: JSON.stringify({ name: "Geury" }),
  });
};
