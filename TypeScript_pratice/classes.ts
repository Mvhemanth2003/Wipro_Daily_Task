class Animal {
    private id : number;
    public  name : string;
    public  age : number;

    constructor(id : number, name:string,age:number)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public greet () : void
    {
        console.log(`hi my name is ${this.name} welcome` );

    }

    private getName() {

        return this.name;
        
    }

    public getId()
    {
        return this.id;
    }

}

 class dog extends Animal {

    public skills : string[];

    constructor (id : number, name:string,age:number,skills:string[])
    {
        super(id,name,age);
        this.skills = skills;

    }

        
    }


    const p1 = new dog(1,"Dog",22,["bark","snore","eat"]);

    console.log(p1.getId());
