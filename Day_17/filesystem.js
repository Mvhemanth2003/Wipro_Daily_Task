const fs = require('fs');
// To write 
// fs.writeFileSync('./sample.txt','this is sample file created by the file system',(err) =>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("file created successfully");

// });
// To read 
const content = fs.readFileSync('sample.txt','utf-8');
console.log(content);

// to update 
fs.appendFileSync('sample.txt','\n new line added');
// to delete
fs.unlinkSync('file.txt',(err) =>
{
    if(err)
    {
        console.log(err);
    }
    console.log("File unlinked successfully");
});