//This demo shows how to export the variable and functions from this module to another


var url="This is  a fake url";

function log(message) 
{
    return message;

}

module.exports.url = url;
module.exports.log = log;
