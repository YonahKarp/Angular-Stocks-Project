import { price } from './price';


export class security {
    id: number = security.getId();
    name: string = "";
    ISIN: string = "";
    country: string = "";
    price: price[] = [];

    static idCounter = 0;

    static getId = function(){
        return security.idCounter++;
    }


}

