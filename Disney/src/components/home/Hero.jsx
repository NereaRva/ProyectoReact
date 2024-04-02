import disneyLogo from "../../assets/disney.png";

function Hero() {
  
  return (
    <div className="container w-100 p-5 shadow mt-5">
      <div className="row">
            <div className="w-100 d-flex gap-3 col-12">
                <div className="col-6 d-flex flex-column justify-content-center gap-2">
                    <h1>Bienvenido a tu mundo disney</h1>
                    <p>Descubre las mejores películas</p>
                </div>
                <div className="col-6">
                    <img src={disneyLogo} className="w-100" alt="Hero img"/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Hero;
