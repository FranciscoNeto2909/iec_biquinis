import sunga from "../assets/sunga/sunga.jpeg"
import prainha1 from "../assets/prainha/prainha1.jpeg"
import prainha2 from "../assets/prainha/prainha2.jpeg"
import viseira1 from "../assets/viseira/viseira1.jpeg"
import viseira2 from "../assets/viseira/viseira2.jpeg"
import viseira3 from "../assets/viseira/viseira3.jpeg"
import jeri1 from "../assets/jeri/jeri1.jpeg"
import jeri2 from "../assets/jeri/jeri2.jpeg"
import jeri3 from "../assets/jeri/jeri3.jpeg"
import jeri4 from "../assets/jeri/jeri4.jpeg"
import canoa from "../assets/canoa/canoa.jpeg"
import maragogi1 from "../assets/maragogi/maragogi1.jpeg"
import maragogi2 from "../assets/maragogi/maragogi2.jpeg"
import noronha1 from "../assets/noronha/noronha1.jpeg"
import noronha2 from "../assets/noronha/noronha2.jpeg"
import mb1 from "../assets/morro_branco/morro_branco1.jpg"
import mb2 from "../assets/morro_branco/morro_branco2.jpg"
import mb3 from "../assets/morro_branco/morro_branco3.jpg"
import mb4 from "../assets/morro_branco/morro_branco4.jpg"
import mb5 from "../assets/morro_branco/morro_branco5.jpg"
import maio from "../assets/maio/maio.jpg"
import canga1 from "../assets/canga/canga1.jpg"
import canga2 from "../assets/canga/canga2.jpeg"
import canga3 from "../assets/canga/canga3.jpeg"
import canga4 from "../assets/canga/canga4.jpeg"
import aguas1 from "../assets/aguas_belas/aguas_belas1.jpg"
import aguas2 from "../assets/aguas_belas/aguas_belas2.jpg"
import aguas3 from "../assets/aguas_belas/aguas_belas3.jpg"
import uruau1 from "../assets/uruau/uruau1.jpg"
import uruau2 from "../assets/uruau/uruau2.jpg"
import uruau3 from "../assets/uruau/uruau3.jpg"
import uruau4 from "../assets/uruau/uruau4.jpg"
import uruau5 from "../assets/uruau/uruau5.jpg"
import uruau6 from "../assets/uruau/uruau6.jpg"

export const bikinis = [
    {
        name: "sunga uruaú",
        colors: [{ name: "azul marinho", inStock: false }],
        sizes: [{ name: 'm', price: 60, inStock: true }],
        images: [sunga],
    },
    {
        name: "biquíni prainha",
        colors: [{ name: "verde bebê", inStock: true }],
        sizes: [{ name: 'm', price: 76, inStock: true }],
        images: [prainha1, prainha2],
    },
    {
        name: "viseira falésias",
        colors: [{ name: "preto", inStock: true }, { name: "Azul celeste", inStock: false }],
        sizes: [{ name: 'u', price: 45, inStock: true }],
        images: [viseira1, viseira2, viseira3],
    },
    {
        name: "biquíni jeri",
        colors: [{ name: "fucsia com laranja", inStock: true }],
        sizes: [{ name: 'p', price: 90, inStock: true }],
        images: [jeri1, jeri2, jeri3, jeri4],
    },
    {
        name: "biquíni canoa",
        colors: [{ name: "rosa neon", inStock: true }],
        sizes: [{ name: 'g', price: 100, inStock: true }],
        images: [canoa],
    },
    {
        name: "biquíni maragogi",
        colors: [{ name: "vermelho", inStock: false }],
        sizes: [{ name: 'p', price: 76, inStock: true }],
        images: [maragogi1, maragogi2],
    },
    {
        name: "biquíni noronha",
        colors: [{ name: "lilás", inStock: true }],
        sizes: [{ name: 'g', price: 100, inStock: true }],
        prices: [100],
        images: [noronha1, noronha2],
    },
    {
        name: "maiô paraíso",
        colors: [{ name: "geométrica", inStock: false }],
        sizes: [{ name: 'm', price: 130, inStock: true }],
        images: [maio],
    },
    {
        name: "canga",
        colors: [{ name: "preto", inStock: true }],
        sizes: [{ name: 'u', price: 70, inStock: true }],
        images: [canga1, canga2, canga3, canga4],
    },
    {
        name: "biquíni uruaú",
        colors: [{ name: "preto", inStock: true }, { name: "lavanda", inStock:false }],
        sizes: [{ name: 'p', price: 80, inStock: true }, { name: 'm', price: 80, inStock: true }],
        images: [uruau1, uruau2, uruau3, uruau4, uruau5, uruau6],
    },
    {
        name: "biquíni águas belas",
        colors: [{ name: "azul celete", inStock: true }],
        sizes: [{ name: 'm', price: 80, inStock: true }],
        images: [aguas1, aguas2, aguas3],
    },
    {
        name: "biquíni morro branco",
        colors: [{ name: "vermelho", inStock: true }],
        sizes: [{ name: 'm', price: 80, inStock: true }],
        images: [mb1, mb2, mb3, mb4, mb5],
    },
]