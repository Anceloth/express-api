module.exports = function(request, response,next){
    var start = +new Date();
    var stream = process.stdout;
    var url = request.url;
    var method = request.method;

    response.on('finish',function(){
        var duration = +new Date() - start;
        var msg = method + ' to ' + url +
        ' took ' + duration + 'ms \n\n';
        stream.write(msg); //Print the log message
    });

    next();
}