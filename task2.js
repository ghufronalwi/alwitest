function cekmethod(ctx, req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    switch(req.method ){
      case 'POST':
        res.write("ini POST " + reverseString(ctx.query.str));
      break;
    }

    res.end();
  }

function reverseString(strinput){
  return strinput.split("").reverse().join("");
}
