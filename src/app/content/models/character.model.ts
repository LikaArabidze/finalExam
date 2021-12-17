export interface character{
appearance: number[]
better_call_saul_appearance: number[]
birthday: string
category: string
char_id: number
img: string
name: string
nickname: string
occupation: string[]
portrayed: string,
status: string,
review: string,
rating: number,
uid: string | null | undefined,
}

export interface characterView{
    title : string
    imgUrl:string
    
}

export interface characterWithId{
    id: string;
    appearance: number[]
    better_call_saul_appearance: number[]
    birthday: string
    category: string
    char_id: number
    img: string
    name: string
    nickname: string
    occupation: string[]
    portrayed: string,
    status: string,
    review: string,
    rating: number,
    uid: string | null | undefined,
    }
    

