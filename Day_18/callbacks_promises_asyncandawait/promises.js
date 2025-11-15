let p = new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        console.log("data");
    },1000);
});

p.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});