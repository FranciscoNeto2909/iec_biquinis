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
import canoa3 from "../assets/canoa/canoa3.jpg"
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
import uruau3 from "../assets/uruau/uruau3.jpg"


export const bikinis = [
    {
        name: "sunga uruaú",
        colors: [{
            name: "azul marinho",
            inStock: false,
            sizes: [{ name: 'm', price: 60, inStock: true }]
        }],
        images: [sunga1, sunga2],
    },
    {
        name: "biquíni prainha",
        colors: [{
            name: "verde bebê",
            inStock: true,
            sizes: [{ name: 'm', price: 76, inStock: true }]
        }],
        images: [prainha1, prainha2, prainha3],
    },
    {
        name: "viseira falésias",
        colors: [{
            name: "preto",
            inStock: true,
            sizes: [{ name: 'u', price: 45, inStock: true }]
        },
        {
            name: "Azul celeste",
            inStock: false,
            sizes: [{ name: 'u', price: 45, inStock: true }]
        }],
        images: [viseira1, viseira2, viseira3, viseira4, viseira5],
    },
    {
        name: "biquíni jeri",
        colors: [{
            name: "fucsia com laranja",
            inStock: true,
            sizes: [{ name: 'p', price: 90, inStock: true }]
        }],
        images: [jeri1, jeri2, jeri3],
    },
    {
        name: "biquíni canoa",
        colors: [{
            name: "rosa neon",
            inStock: true,
            sizes: [{ name: 'g', price: 100, inStock: true }]
        }],
        images: [canoa1, canoa2, canoa3],
    },
    {
        name: "biquíni maragogi",
        colors: [{
            name: "vermelho",
            inStock: false,
            sizes: [{ name: 'p', price: 76, inStock: true }]
        }],
        images: [maragogi1, maragogi2, maragogi3],
    },
    {
        name: "biquíni noronha",
        colors: [{
            name: "lilás",
            inStock: true,
            sizes: [{ name: 'g', price: 110, inStock: true }]
        }],
        images: [noronha1, noronha2, noronha3],
    },
    {
        name: "maiô paraíso",
        colors: [{
            name: "geométrica",
            inStock: false, sizes: [{ name: 'm', price: 130, inStock: true }],
        }],
        images: [maio1, maio2],
    },
    {
        name: "canga",
        colors: [{
            name: "preto",
            inStock: true,
            sizes: [{ name: 'u', price: 70, inStock: true }]
        }],
        images: [canga1, canga2, canga3, canga4],
    },
    {
        name: "biquíni uruaú",
        colors: [{
            name: "preto",
            inStock: true,
            sizes: [
                { name: 'p', price: 80, inStock: true },
                { name: 'm', price: 80, inStock: true }
            ]
        },
        {
            name: "lavanda",
            inStock: false,
            sizes: [
                { name: 'p', price: 80, inStock: true },
                { name: 'm', price: 80, inStock: true }
            ]
        }],
        images: [uruau1, uruau2, uruau3],
    },
    {
        name: "biquíni águas belas",
        colors: [{
            name: "azul celete",
            inStock: true,
            sizes: [{ name: 'm', price: 80, inStock: true }]
        }],
        images: [aguas1, aguas2, aguas3],
    },
    {
        name: "biquíni morro branco",
        colors: [{
            name: "vermelho",
            inStock: true,
            sizes: [{ name: 'm', price: 80, inStock: true }]
        }],
        images: [mb1, mb2, mb3, mb4],
    },
]