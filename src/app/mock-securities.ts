import { security } from './security';

var d = new Date();
var d1 = new Date(d.setDate(d.getDate()-1))
var d2 = new Date (d.setDate(d.getDate()-2))
    d = new Date();


export const SECURITIES: security[] = [
{ 
    id: security.getId(),
    name: "APPL", 
    ISIN: "ABCD1234",
    country: "Italy",
    price: [
        {date: d2, endDayPrice: 123},
        {date: d1, endDayPrice: 125},
        {date: d, endDayPrice: 121},
    ]
},

{ 
    id: security.getId(),
    name: "GOOGL", 
    ISIN: "1234ABCD",
    country: "United States of America",
    price: [
        {date: d2, endDayPrice: 453},
        {date: d1, endDayPrice: 432},
        {date: d, endDayPrice: 456},
    ]
},

{ 
    id: security.getId(),
    name: "NFLX", 
    ISIN: "9876ZYXW",
    country: "United States of America",
    price: [
        {date: d2, endDayPrice: 233},
        {date: d1, endDayPrice: 245},
        {date: d, endDayPrice: 222},
    ]
},
  
];