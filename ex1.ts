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