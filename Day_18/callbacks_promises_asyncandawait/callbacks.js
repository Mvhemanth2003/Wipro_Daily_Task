function func1()
{
    console.log("Function1");
}

function func2(funcPass)
{
    console.log("This is function 2");
    funcPass();
}

func2(func1);