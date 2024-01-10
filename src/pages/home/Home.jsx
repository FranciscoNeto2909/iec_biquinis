    import { useEffect, useState } from "react"
    import Card from "../.././components/card/Card"
    import { bikinis } from "../.././data/bikinis"
    import banner from "../.././assets/banner.png"
    import bannerDesk from "../.././assets/bannerDesk.png"
    import { categoriasMap, categories } from "../.././data/categories"
    import "./home.css"
    
    export default function Home({filteredBikinis,setBikinisCategorie}) {
    
      const [msg, setMsg] = useState("")
      const [msgVisib, setMsgVisib] = useState(false)
      const [selectedCat, setSelectedCat] = useState(0)
    
      function handleScrollTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    
      function handleSetCategorie(text, i) {
        handleScrollTop()
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
            handleScrollTop();
          }
        }
      }

      useEffect(() => {
        handleScrollTop()
      },[])
    
      return (
        <div className="home">
          {window.innerWidth < 525 &&
            <>
              <div className="home_banner">
                <img src={banner} alt="" className="home_banner_img" />
              </div>
              <div className="home_header_categories">
                {categories.map((cat, i) => (
                  <button className={`home_header_categories_button ${i === selectedCat && "categories_button_selected"}`} onClick={() => handleSetCategorie(cat, i)} key={i}>{cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </>
          }
          {window.innerWidth > 525 &&
            <>
              <section className="home_banner">
                <img src={bannerDesk} style={{ height: "auto", width: "100vw" }} alt="" className="home_banner_img" />
              </section>
              <section className="home_categories">
                <div className="home_header_categories">
                  {categories.map((cat, i) => (
                    <button className={`home_header_categories_button ${i === selectedCat && "categories_button_selected"}`} onClick={() => handleSetCategorie(cat, i)} key={i}>{cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </section>
            </>
          }
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