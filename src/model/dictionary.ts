import { Dictionary, NotOkay } from '../interface/dictionary'

export default function showDictionary(dc: Dictionary) { 
    return `类名:${dc.name},默认名字${dc.defualtAnimal[0].name},默认品种${dc.defualtAnimal[0].breed},\n0号品种:${dc[0]}`;
}
