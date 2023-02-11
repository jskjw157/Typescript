let a = "hello"
let b  = false
let c : number[] = []
c.push(1)

// alias, ? : 없어도 상관없음
type Player = { // 타입의 첫글자는 대문자로
    readonly name:  string,
            age?: number
}

const player : Player = {
    name : "nico"
}

const playerJiwon : Player = {
    name: "jiwon",
    age: 15
}

if(player.age && player.age < 10){

}


const playerMarket = (name : string) : Player =>  ({name})


//readonly 
const number : readonly number[] = [];

//tuple
const palyer1 : [string, number, boolean] = ["hi",2,false]

//any
const any1 : any[] = [1,2,3,4,false]

let func = (name:string) : Player => ({ name: "sdf", age: 12})

//unknown
let w:unknown;

if(typeof a === 'number'){
    let b = a+1
}

if(typeof a === "string"){
    a.toUpperCase();
}

//void
function hellp(){
    console.log('x')
}

//never
function hello2(): never{
    throw new Error("xxx")
}

//call signature
type Add = (a:number, b:number) => number;

const add: Add  = (a,b)=> a+b;


//overloading
type Add2 = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}
const add2: Add2  = (a,b) => {
    if(typeof b === "string") return a
    return a+b
}

const last = (arr) => {
    const length = arr.length;
    return arr[length -1];
}


// overloading 실제 사례 1
type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if(typeof config === 'string'){
        console.log(config);
    } 
    else{
        console.log(config.path);
    }
}

// overloading 실제 사례 2
type Add3 = {
    (a:number, b:number) :number,
    (a:number, b:number, c:number) :number
}

const add3:Add3 = (a, b, c?: number) => {
    if(c) return a+b+c
    return a + b
}

type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["a","b","c"])
