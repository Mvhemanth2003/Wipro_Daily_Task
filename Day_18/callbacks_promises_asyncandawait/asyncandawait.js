const welcome = () =>
{
    console.log("welcome");
}

function getData ()
{
    return new Promise((resolve) => {
        setTimeout(()=> {
                console.log("data");
                resolve();
        },1000);
    });
}

async function greetRun ()
{
     await welcome();
     await getData();
    console.log("data recives")
}

greetRun();
