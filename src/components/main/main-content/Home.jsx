import '../main-css/Home.css'
function Home() {
  return (
    <div className="mt-0 bg-gradient-to-br from-[#F0FDF5] to-[#EFF9FB] pb-6 md:pb-12 pt-4 md:pt-6 flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 gap-8 lg:gap-0">
      {/* Text Content - Visível em todas as telas */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
        <div className="w-full m-0">
          <h1
            className="
            inline-block          
            text-3xl sm:text-4xl lg:text-5xl
            font-bold             
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-[#16A14F]
            to-[#2564E8]
            "
          >
            NeoTrash
          </h1>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Transformando </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Eletrônicos em</h1>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Sustentabilidade</h1>
        <p className="text-sm md:text-base text-[#5F6063] mt-2">
          Conectando pessoas, tecnologia e meio ambiente em um
          ciclo de reciclagem inteligente
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 md:mt-[75px]">
          <button
            id="btn1"
            className="btnEfect w-full sm:w-[192px] h-[51px] flex justify-center items-center flex-col"
          >
            <h2 className="text-sm md:text-[15px]">Participar Agora →</h2>
            <h2 className="text-xs md:text-[12px] text-[#DFDADA]">Login</h2>
          </button>
          <button
            id="btn2"
            className="btnEfect w-full sm:w-[171px] h-[51px] flex justify-center items-center"
          >
            <p className="text-base md:text-[18px] text-[#67C38D]">Como Funciona</p>
          </button>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 md:gap-4 mt-8 md:mt-[58px] text-center">
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-[#3AA34A]">1000+</h2>
            <p className="text-xs md:text-[14px]">Dispositivos Reciclados</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-[#2563EB]">500+</h2>
            <p className="text-xs md:text-[14px]">Participantes Ativos</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-[28px] font-bold text-[#9333EA]">50+</h2>
            <p className="text-xs md:text-[14px]">Pontos de Coleta</p>
          </div>
        </div>
      </div>
      <div
        id="cont2"
        className="nullAll order-2 bg-white mb-6 md:mb-14 md:mr-0 lg:mr-[5px] grid grid-cols-2  gap-2 sm:gap-8 p-3 sm:p-8  place-items-center rounded-lg shadow-md"
      >
        <div className="h-[80px] sm:w-[150px] w-[125px] lg:w-[170px] xl:w-[200px] xl:h-[120px] bloco btnEfect bg-gradient-to-br from-[#BCF7D1] to-[#D9FBE5] flex justify-center items-center p-4 rounded-md">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src="/main-imgs/home-imgs/smartphone.png" alt="Smartphones" className="sm:w-10 w-7" />
            <h3 className="text-sm md:text-base">Smartphones</h3>
          </div>
        </div>
        <div className="h-[80px] sm:w-[150px] w-[125px] lg:w-[170px] xl:w-[200px] xl:h-[120px] bloco btnEfect bg-gradient-to-br from-[#DAE9FE] to-[#C2DDFE] flex justify-center items-center p-4 rounded-md">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src="/main-imgs/home-imgs/laptop.png" alt="Laptops" className="sm:w-10 w-7" />
            <h3 className="text-sm md:text-base">Laptops</h3>
          </div>
        </div>
        <div className="h-[80px] sm:w-[150px] w-[125px] lg:w-[170px] xl:w-[200px] xl:h-[120px] bloco btnEfect bg-gradient-to-br from-[#F2E6FF] to-[#EAD7FF] flex justify-center items-center p-4 rounded-md">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src="/main-imgs/home-imgs/componentes.png" alt="Componentes" className="sm:w-10 w-7" />
            <h3 className="text-sm md:text-base">Componentes</h3>
          </div>
        </div>
        <div className="h-[80px] sm:w-[150px] w-[125px] lg:w-[170px] xl:w-[200px] xl:h-[120px] bloco btnEfect bg-gradient-to-br from-[#FFEBD2] to-[#FEDAAF] flex justify-center items-center p-4 rounded-md">
          <div className=" flex flex-col justify-center items-center gap-2 ">
            <img src="/main-imgs/home-imgs/muitomais.png" alt="Muito mais" className="sm:w-6 w-4" />
            <h4 className="text-sm md:text-base">Muito mais</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
