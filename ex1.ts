let a = "hello"
let b  = false
let c : number[] = []
c.push(1)

type Player = { // 타입의 첫글자는 대문자로
    name: string,
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