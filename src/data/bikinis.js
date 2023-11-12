import sunga1 from "../assets/sunga/sunga1.jpg"
import sunga2 from "../assets/sunga/sunga2.jpg"
import prainha1 from "../assets/prainha/prainha1.jpg"
import prainha2 from "../assets/prainha/prainha2.jpg"
import prainha3 from "../assets/prainha/prainha3.jpg"
import viseira1 from "../assets/viseira/viseira1.jpg"
import viseira2 from "../assets/viseira/viseira2.jpg"
import viseira3 from "../assets/viseira/viseira3.jpg"
import viseira4 from "../assets/viseira/viseira4.jpg"
import viseira5 from "../assets/viseira/viseira5.jpg"
import jeri1 from "../assets/jeri/jeri1.jpg"
import jeri2 from "../assets/jeri/jeri2.jpg"
import jeri3 from "../assets/jeri/jeri3.jpg"
import canoa1 from "../assets/canoa/canoa1.jpg"
import canoa2 from "../assets/canoa/canoa2.jpg"
import maragogi1 from "../assets/maragogi/maragogi1.jpg"
import maragogi2 from "../assets/maragogi/maragogi2.jpg"
import maragogi3 from "../assets/maragogi/maragogi3.jpg"
import noronha1 from "../assets/noronha/noronha1.jpg"
import noronha2 from "../assets/noronha/noronha2.jpg"
import noronha3 from "../assets/noronha/noronha3.jpg"
import mb1 from "../assets/morro_branco/morro1.jpg"
import mb2 from "../assets/morro_branco/morro2.jpg"
import mb3 from "../assets/morro_branco/morro3.jpg"
import mb4 from "../assets/morro_branco/morro4.jpg"
import maio1 from "../assets/maio/maio1.jpg"
import maio2 from "../assets/maio/maio2.jpg"
import canga1 from "../assets/canga/canga1.jpg"
import canga2 from "../assets/canga/canga2.jpg"
import canga3 from "../assets/canga/canga3.jpg"
import canga4 from "../assets/canga/canga4.jpg"
import aguas1 from "../assets/aguas_belas/aguas1.jpg"
import aguas2 from "../assets/aguas_belas/aguas2.jpg"
import aguas3 from "../assets/aguas_belas/aguas3.jpg"
import uruau1 from "../assets/uruau/uruau1.jpg"
import uruau2 from "../assets/uruau/uruau2.jpg"


export const bikinis = [{
    name: "Viseira Falésias",
    colors: [{
        name: "Preto",
        inStock: true,
        sizes: [{ name: 'U', price: 45, inStock: true }]
    }, {
        name: "Azul Celeste",
        inStock: false,
        sizes: [{ name: 'U', price: 45, inStock: true }]
    }, {
        name: "Dourada",
        inStock: false,
        sizes: [{ name: 'U', price: 45, inStock: true }]
    }, {
        name: "Branca",
        inStock: false,
        sizes: [{ name: 'U', price: 45, inStock: true }]
    }],
    images: [viseira1, viseira2, viseira3, viseira4, viseira5],
}, {
    name: "Canga",
    colors: [{
        name: "Preto Vibrante",
        inStock: true,
        sizes: [{ name: 'U', price: 70, inStock: true }]
    }, {
        name: "Branco Paz e Amor",
        inStock: false,
        sizes: [{ name: 'U', price: 70, inStock: true }]
    }, {
        name: "Branco Listrado",
        inStock: false,
        sizes: [{ name: 'U', price: 70, inStock: true }]
    }, {
        name: "Rosa Onça",
        inStock: false,
        sizes: [{ name: 'U', price: 70, inStock: true }]
    }],
    images: [canga1, canga2, canga3, canga4],
}, {
    name: "Maiô Paraíso",
    colors: [{
        name: "Geométrica",
        inStock: false, sizes: [{ name: 'M', price: 140, inStock: true }],
    }, {
        name: "Onça Azul",
        inStock: false, sizes: [{ name: 'M', price: 140, inStock: true }],
    }],
    images: [maio1, maio2],
},
{
    name: "Sunga Uruaú",
    colors: [{
        name: "Azul Marinho",
        inStock: false,
        sizes: [{ name: 'M', price: 60, inStock: true }]
    }, {
        name: "Azul Claro",
        inStock: false,
        sizes: [{ name: 'M', price: 60, inStock: true }]
    }, {
        name: "Branco",
        inStock: false,
        sizes: [{ name: 'M', price: 60, inStock: true }]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [{ name: 'M', price: 60, inStock: true }]
    }, {
        name: "Preto",
        inStock: false,
        sizes: [{ name: 'M', price: 60, inStock: true }]
    }],
    images: [sunga1, sunga2],
},
{
    name: "Biquíni Prainha",
    colors: [{
        name: "Verde Bebê",
        inStock: true,
        sizes: [{ name: 'M', price: 76, inStock: true }]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [{ name: 'M', price: 76, inStock: true }]
    }, {
        name: "Azul Marinho",
        inStock: false,
        sizes: [{ name: 'M', price: 76, inStock: true }]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [{ name: 'M', price: 76, inStock: true }]
    }],
    images: [prainha1, prainha2, prainha3],
},
{
    name: "Biquíni Jeri",
    colors: [{
        name: "Fucsia e Laranja",
        inStock: true,
        sizes: [{ name: 'P', price: 90, inStock: true }]
    }, {
        name: "Preto com Rosa",
        inStock: false,
        sizes: [{ name: 'P', price: 90, inStock: true }]
    }, {
        name: "Rosa com Verde Bebê",
        inStock: false,
        sizes: [{ name: 'P', price: 90, inStock: true }]
    }, {
        name: "Verde Bebê com Preto",
        inStock: false,
        sizes: [{ name: 'P', price: 90, inStock: true }]
    }],
    images: [jeri1, jeri2, jeri3],
},
{
    name: "Biquíni Canoa",
    colors: [{
        name: "Rosa Neon",
        inStock: true,
        sizes: [{ name: 'G', price: 100, inStock: true }]
    }, {
        name: "Laranja",
        inStock: false,
        sizes: [{ name: 'G', price: 100, inStock: true }]
    }, {
        name: "Preto",
        inStock: false,
        sizes: [{ name: 'G', price: 100, inStock: true }]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [{ name: 'G', price: 100, inStock: true }]
    }],
    images: [canoa1, canoa2],
},
{
    name: "Biquíni maragogi",
    colors: [{
        name: "Azul",
        inStock: false,
        sizes: [{ name: 'P', price: 76, inStock: true }]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [{ name: 'P', price: 76, inStock: true }]
    }, {
        name: "Rosa",
        inStock: false,
        sizes: [{ name: 'P', price: 76, inStock: true }]
    }, {
        name: "Preto",
        inStock: false,
        sizes: [{ name: 'P', price: 76, inStock: true }]
    }, {
        name: "Verde Bandeira",
        inStock: false,
        sizes: [{ name: 'P', price: 76, inStock: true }]
    }, {
        name: "Verde Bebê",
        inStock: false,
        sizes: [{ name: 'P', price: 76, inStock: true }]
    }],
    images: [maragogi1, maragogi2, maragogi3],
},
{
    name: "Biquíni Noronha",
    colors: [{
        name: "Lilás",
        inStock: true,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }, {
        name: "Laranja",
        inStock: false,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }, {
        name: "Rosa Neon",
        inStock: false,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }, {
        name: "Verde Neon",
        inStock: false,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }, {
        name: "Verde Bebê",
        inStock: false,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }, {
        name: "Azul Marinho",
        inStock: false,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }],
    images: [noronha1, noronha2, noronha3],
},
{
    name: "Biquíni Uruaú",
    colors: [{
        name: "Preto",
        inStock: true,
        sizes: [
            { name: 'P', price: 80, inStock: true },
            { name: 'M', price: 80, inStock: true }
        ]
    }, {
        name: "Lilás",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: true },
            { name: 'M', price: 80, inStock: true }
        ]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: true },
            { name: 'M', price: 80, inStock: true }
        ]
    }, {
        name: "Rosa Neon",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: true },
            { name: 'M', price: 80, inStock: true }
        ]
    }, {
        name: "Azul Celeste",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: true },
            { name: 'M', price: 80, inStock: true }
        ]
    }],
    images: [uruau1, uruau2],
},
{
    name: "Biquíni Águas Belas",
    colors: [{
        name: "Lilás",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Azul Celeste",
        inStock: true,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Rosa Neon",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Verde Bebê",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Verde Neon",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }],
    images: [aguas1, aguas2, aguas3],
},
{
    name: "Biquíni Morro Branco",
    colors: [{
        name: "Vermelho",
        inStock: true,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Preto",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Verde Neon",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }, {
        name: "Azul Celeste",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: true }]
    }],
    images: [mb1, mb2, mb3, mb4],
},
]