function postresult(ctx, req, res) {
    // write the header and set the response type as a json
    res.writeHead(200, { 'Content-Type': 'application/json' });

    switch(req.method ){
      case 'POST':
        res.write("Output : " + reverseString(ctx.query.str));
      break;
      default:
        res.write("You are sending '" + req.method + " request' but Server only response to POST request");
      break;
    }

    res.end();
  }

function reverseString(strinput){
  return strinput.split("").reverse().join("");
}

module.exports = postresult;