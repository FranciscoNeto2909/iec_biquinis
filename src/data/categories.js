export const categories = ["Todos", "Biquínis e sungas", "maiôs", "Plus size", "cangas e roupas de praia", "Acessórios", "Pronta-entrega"]

export const categoriasMap = {
    "todos": (bikinis) => bikinis.filter(bik => bik.name.toLowerCase().includes("")),

    "biquínis e sungas": (bikinis) => bikinis.filter(bik => bik.name.toLowerCase().includes("biquíni") || bik.name.toLowerCase().includes("sunga")),

    "maiôs": (bikinis) => bikinis.filter(bik => bik.name.toLowerCase().includes("maiô")),

    "plus size": (bikinis) => bikinis.filter(bik => bik.colors[0].sizes.some(s => s.name === "GG" || s.name === "XG")),

    "cangas e roupas de praia": (bikinis) => bikinis.filter(bik => bik.name.toLowerCase().includes("canga") || bik.name.toLowerCase().includes("saia")),

    "acessórios": (bikinis) => bikinis.filter(bik => bik.name.toLowerCase().includes("viseira") || bik.name.toLowerCase().includes("bolsa")),
};