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

// 제네릭
type SuperPrint = <T, M>(arr: T[], a:M) => T
// type SuperPrint<T,M> = {
//     (arr: T[], a: M) : T
// }

const superPrint:SuperPrint = (arr, b) => arr[0]

superPrint([1, 2, 3, 4], "x")
superPrint([true, false, true], 1)
superPrint(["a","b","c"], false)
superPrint([1,2,true,false,"a","b","c"], [])


function superPrint2<V>(a: V[]){
    return a[0];
}

type Player3<E> = {
    name:string,
    extrainfo:E
}
type JiwonExtra = {
    favFood:string
}
type JiwonPlayer = Player3<JiwonExtra>

const jiwon: JiwonPlayer = {
    name: "jiwon",
    extrainfo: {
        favFood: "kimchi"
    }
}

const lynn :Player3<null> = {
    name: "lynn",
    extrainfo: null
}

type Last = <T>(arr: T[]) => T

const last2: Last = (arr) => arr[arr.length-1]

type Prepend = <T>(arr: T[], item: T) => T[]

const prepend: Prepend = (arr, item) => [item, ...arr] 

/**
 * 이번 챌린지의 핵심은 다양한 함수를 다형성과 제네릭이라는 개념을 바탕으로 자유롭게 만들어보는 것입니다. 제네릭의 경우 한 번만 선언을 하게 되면 다양한 타입에 재사용이 가능하다는 것이 큰 장점입니다.

last(arr) 함수
last(arr) 함수는 배열 내 마지막 값을 반환해주는 함수입니다. 여기서 파라미터인 arr은 배열이기 때문에 이 부분에 유의해서 타입을 먼저 선언해보겠습니다.
Last라는 이름의 제네릭 타입을 선언하겠습니다. 이 Last라는 타입은 last(arr) 함수에 대한 타입이기 때문에 type 또한 함수형으로 만들었습니다.
여기서 파라미터는 배열입니다. 따라서, items에 해당하는 타입은 T[] 형식의 배열꼴로 만들었습니다. 그리고 반환값은 하나의 값이 되므로 T만 적습니다. 여기서 T의 이름은 Type의 앞 글자만 딴 것이므로 T가 아닌 다른 글자를 넣어도 상관은 없습니다만 모두 통일시켜야 합니다 → 공식 문서 확인
type Last = <T>(items: T[]) => T;
이후 last()라는 익명 함수를 생성하였고, 우리가 만들어준 Last라는 타입을 붙여주었습니다.
자바스크립트에서 배열의 마지막 요소를 알아내기 위해 length라는 프로퍼티를 써서 마지막 값을 알아냅니다. 자바스크립트에서 배열은 맨 첫번째 인덱스가 0에서 시작하므로, 전체 길이에서 1을 뺀 [items.length - 1]이 배열의 마지막 인덱스가 됩니다.

prepend(arr, item) 함수
prepend(arr, item) 함수는 배열 arr에 새로운 아이템(item)을 맨 앞에 넣은 후 그렇게 만들어진 새로운 배열을 반환하는 함수였습니다.
이번에는 Prepend라는 이름의 제네릭 타입을 선언해주겠습니다. 이 또한 함수에 들어가는 타입이므로 함수형 꼴로 만들었습니다.
파라미터는 배열 하나와 값 하나 이렇게 총 2개가 들어갑니다. 따라서, 두개의 파라미터 타입으로 각각 T[]와 T로 부여했습니다. 반환값은 배열이어야 하므로 T[]로 붙여줬습니다.
type Prepend = <T>(items: T[], item: T) => T[];
전개 구문(Spread Operator)을 이용하여 맨 앞의 아이템과 기존 배열에 있던 아이템을 새로운 배열에 담아줍니다.
예를 들어, 만일 기존 배열이 const items = [1, 2, 3, 4, 5]였다면 [...items]는 안에 있는 숫자들만 밖으로 뺀 1, 2, 3, 4, 5가 되고, 이걸 다시 새로 추
 */

/**
 * 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요. Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다.
* add: 단어를 추가함
* get: 단어의 정의를 반환함
* delete: 단어를 삭제함
* update: 단어를 업데이트 함
* showAll: 딕셔너리의 단어를 모두 프린트함
* count: 딕셔너리 단어들의 총 수를 반환함

hint
자바스크립트에서 클래스를 만들기 위해서는 클래스 내부에 반드시 constructor() 생성자 함수를 정의해야 하고 그 내부에 필요한 변수들을 정의해야 합니다. 예제는 다음을 참고해보세요. 또한, 생성자 함수 내부의 변수를 위한 타입도 따로 만들어야 합니다.
변수들은 public, private 혹은 protected로 접근 제한자를 설정할 수 있습니다. 어떻게 사용하는 것이 좋을지 고민을 해보시기 바랍니다.
add 메소드는 먼저 배열 안에 해당 원소가 있는지 먼저 판별 후 없다면 해당 단어와 정의를 함께 추가하는 로직을 세워보세요. 객체 속성에 접근하는 방법도 함께 참조해보세요.
get 메소드는 단어의 정의를 return해야 합니다.
delete 메소드는 단어를 삭제시킵니다. delete 연산자를 이용해세요.
update 메소드는 단어를 업데이트 해야 합니다. 업데이트 하려면 제일 먼저 무엇을 해야 할까요? (add 메소드 참고)
showAll 메소드는 모든 단어들을 프린트하면 됩니다. 단어: 정의 형태로 객체에 담긴다면 단어들을 어떻게 빼올 수 있을까요? 그리고 그 빼온 단어들을 어떻게 하나씩 출력시킬 수 있을까요? Object.keys() 메소드와 forEach() 메소드를 참조해주세요.
count 메소드는 딕셔너리의 총 수를 반환해야 합니다. length를 한 번 이용해보세요.
모든 메소드는 적절하게 파라미터를 집어 넣고 각각의 파라미터에 올바른 타입을 집어넣어야 합니다.
 */
class Dict {
    private words: { [key: string]: string } = {};
    
    constructor() {}
    
    add(key: string, value: string): void {
        if (!this.words.hasOwnProperty(key)) {
            this.words[key] = value;
        }
    }
    
    get(key: string): string | undefined {
        return this.words[key];
    }
    
    delete(key: string): void {
        delete this.words[key];
    }
    
    update(key: string, value: string): void {
        if (this.words.hasOwnProperty(key)) {
            this.words[key] = value;
        }
    }
    
    showAll(): void {
        Object.keys(this.words).forEach((key) => {
            console.log(`${key}: ${this.words[key]}`);
        });
    }
    
    count(): number {
        return Object.keys(this.words).length;
    }
}
    
    
    
    
    