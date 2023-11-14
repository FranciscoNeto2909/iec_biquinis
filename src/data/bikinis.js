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
import iracema1 from "../assets/iracema/iracema1.jpg"
import iracema2 from "../assets/iracema/iracema2.jpg"
import iracema3 from "../assets/iracema/iracema3.jpg"
import coqueirinho1 from "../assets/coqueirinho/coqueirinho1.jpg"
import coqueirinho2 from "../assets/coqueirinho/coqueirinho2.jpg"
import pipa1 from "../assets/pipa/pipa1.jpg"
import pipa2 from "../assets/pipa/pipa2.jpg"
import pipa3 from "../assets/pipa/pipa3.jpg"
import flecheiras1 from "../assets/flecheiras/flecheiras1.jpg"
import cauipe1 from "../assets/cauípe/cauipe1.jpg"
import cauipe2 from "../assets/cauípe/cauipe2.jpg"
import cauipe3 from "../assets/cauípe/cauipe3.jpg"
import icarai1 from "../assets/icarai/icarai1.jpg"
import icarai2 from "../assets/icarai/icarai2.jpg"
import icarai3 from "../assets/icarai/icarai3.jpg"
import icarai4 from "../assets/icarai/icarai4.jpg"
import dunas1 from "../assets/dunas/dunas1.jpg"

export const bikinis = [
    {
    name: "Viseira Falésias",
    colors: [{
        name: "Preto",
        inStock: true,
        sizes: [{ name: 'U', price: 42, inStock: false }]
    }, {
        name: "Azul Celeste",
        inStock: false,
        sizes: [{ name: 'U', price: 42, inStock: false }]
    }, {
        name: "Dourada",
        inStock: false,
        sizes: [{ name: 'U', price: 42, inStock: false }]
    }, {
        name: "Branca",
        inStock: false,
        sizes: [{ name: 'U', price: 42, inStock: false }]
    }],
    onSale: false,
    images: [viseira1, viseira2, viseira3, viseira4, viseira5]
},
{
    name: "Viseira Dunas",
    colors: [{
        name: "Preto",
        inStock: true,
        sizes: [{ name: 'U', price: 40, inStock: true }]
    }, {
        name: "Off White",
        inStock: false,
        sizes: [{ name: 'U', price: 40, inStock: true }]
    }, ],
    onSale: false,
    images: [dunas1]
},
{
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
    onSale: false,
    images: [canga1, canga2, canga3, canga4]
}, {
    name: "Maiô Paraíso",
    colors: [{
        name: "Geométrica",
        inStock: false, sizes: [{ name: 'M', price: 130, inStock: false }],
    }, {
        name: "Onça Azul",
        inStock: false, sizes: [{ name: 'M', price: 130, inStock: false }],
    }],
    onSale: false,
    images: [maio1, maio2]
},
{
    name: "Maiô Cauípe",
    colors: [{
        name: "Preto",
        inStock: false,
        sizes: [
            { name: 'P', price: 130, inStock: false },
            { name: 'M', price: 130, inStock: false },
            { name: 'G', price: 130, inStock: false }
        ]
    }, {
        name: "Azul",
        inStock: false,
        sizes: [
            { name: 'P', price: 130, inStock: false },
            { name: 'M', price: 130, inStock: false },
            { name: 'G', price: 130, inStock: false }
        ]
    }],
    onSale: false,
    images: [cauipe1,cauipe2,cauipe3]
},
{
    name: "Maiô Icaraí",
    colors: [{
        name: "Rosa e Preto",
        inStock: true,
        sizes: [{ name: 'M', price: 110, inStock: true }]
    }, {
        name: "Preto e Branco",
        inStock: false,
        sizes: [{ name: 'M', price: 110, inStock: true }]
    }, ],
    onSale: false,
    images: [icarai1, icarai2, icarai3,icarai4]
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
    onSale: false,
    images: [sunga1, sunga2]
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
    onSale: false,
    images: [prainha1, prainha2, prainha3]
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
    onSale: false,
    images: [jeri1, jeri2, jeri3]
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
    onSale: false,
    images: [canoa1, canoa2]
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
    onSale: false,
    images: [maragogi1, maragogi2, maragogi3]
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
    onSale: false,
    images: [noronha1, noronha2, noronha3]
},
{
    name: "Biquíni Uruaú",
    colors: [{
        name: "Preto",
        inStock: true,
        sizes: [
            { name: 'P', price: 80, inStock: true },
            { name: 'M', price: 80, inStock: false }
        ]
    }, {
        name: "Lilás",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: false },
            { name: 'M', price: 80, inStock: false }
        ]
    }, {
        name: "Vermelho",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: false },
            { name: 'M', price: 80, inStock: true }
        ]
    }, {
        name: "Rosa Neon",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: false },
            { name: 'M', price: 80, inStock: false }
        ]
    }, {
        name: "Azul Celeste",
        inStock: false,
        sizes: [
            { name: 'P', price: 80, inStock: false },
            { name: 'M', price: 80, inStock: false }
        ]
    }],
    onSale: false,
    images: [uruau1, uruau2]
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
    onSale: false,
    images: [aguas1, aguas2, aguas3]
},
{
    name: "Biquíni Morro Branco",
    colors: [{
        name: "Vermelho",
        inStock: true,
        sizes: [{ name: 'M', price: 80, inStock: false }]
    }, {
        name: "Preto",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: false }]
    }, {
        name: "Verde Neon",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: false }]
    }, {
        name: "Azul Celeste",
        inStock: false,
        sizes: [{ name: 'M', price: 80, inStock: false }]
    }],
    onSale: false,
    images: [mb1, mb2, mb3, mb4]
},
{
    name: "Biquíni Coqueirinho",
    colors: [{
        name: "Vermelho",
        inStock: true,
        sizes: [{ name: 'P', price: 100, inStock: true }]
    },],
    onSale: true,
    images: [coqueirinho1, coqueirinho2]
},
{
    name: "Biquíni Iracema",
    colors: [{
        name: "Preto",
        inStock: true,
        sizes: [{ name: 'G', price: 110, inStock: true }]
    }, {
        name: "Laranja",
        inStock: false,
        sizes: [{ name: 'M', price: 110, inStock: true }]
    }],
    onSale: false,
    images: [iracema1, iracema2, iracema3]
},
{
    name: "Biquíni Pipa",
    colors: [{
        name: "Branco",
        inStock: true,
        sizes: [{ name: 'P', price: 110, inStock: true }]
    }],
    onSale: true,
    images: [pipa1, pipa2, pipa3]
},
{
    name: "Biquíni Flecheiras",
    colors: [{
        name: "Rosa",
        inStock: true,
        sizes: [
            { name: 'P', price: 93, inStock: false },
            { name: 'M', price: 93, inStock: false },
            { name: 'G', price: 93, inStock: false }
        ]
    }, {
        name: "Amarelo",
        inStock: false,
        sizes: [
            { name: 'P', price: 93, inStock: false },
            { name: 'M', price: 93, inStock: false },
            { name: 'G', price: 93, inStock: false }
        ]
    }],
    onSale: true,
    images: [flecheiras1]
}
]