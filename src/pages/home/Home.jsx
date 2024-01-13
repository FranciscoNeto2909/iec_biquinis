    import { useEffect, useState } from "react"
    import Card from "../.././components/card/Card"
    import { bikinis } from "../.././data/bikinis"
    import banner from "../.././assets/banner.png"
    import bannerDesk from "../.././assets/bannerDesk.png"
    import { categoriasMap, categories } from "../.././data/categories"
    import "./home.css"
import BuyInfos from "../../components/buyInfos/BuyInfos"
    
    export default function Home({filteredBikinis,setBikinisCategorie}) {

      const [selectedCat, setSelectedCat] = useState(0)
    
      function handleSetCategorie(text, i) {
        if (selectedCat === i) {
          setSelectedCat(0);
          setBikinisCategorie(bikinis);
        } else {
          setSelectedCat(i);
          if (text.toLowerCase() === "pronta-entrega") {
            window.location.href = "https://wa.me/c/558596585581";
            setSelectedCat(0);
          } else {
            const filteredBikinis = categoriasMap[text.toLowerCase()](bikinis);
            setBikinisCategorie(filteredBikinis);
          }
        }
      }
    
      return (
          <div className="home">
              <div className="home_banner">
                {window.innerWidth < 525 ? 
                  <img src={banner} alt="" className="home_banner_img" /> :
                  <img src={bannerDesk} style={{ height: "auto", width: "100vw" }} alt="" className="home_banner_img" />
                }
              </div>
              <BuyInfos/>
              <div className="home_header_categories">
                {categories.map((cat, i) => (
                  <button className={`home_header_categories_button ${i === selectedCat && "categories_button_selected"}`} onClick={() => handleSetCategorie(cat, i)} key={i}>{cat.toUpperCase()}
                  </button>
                ))}
            </div>
            <section className="home_container">
              {
                filteredBikinis.map((bik, i) => (
                  <Card bik={bik} key={i} />
                ))
              }
            </section>
          </div>
      )
    }