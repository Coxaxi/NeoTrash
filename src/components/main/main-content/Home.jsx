import '../main-css/Home.css'
import Cell from '../main-imgs/home-imgs/smartphone.png'
import Laptop from '../main-imgs/home-imgs/laptop.png'
import Mais from '../main-imgs/home-imgs/muitomais.png'
import Compn from '../main-imgs/home-imgs/componentes.png'

function Home() {
  return (
    <div className="mt-[-25px] principal bg-[linear-gradient(42deg,_#F0FDF5,_#EFF9FB)] pb-12 pt-6 flex items-center justify-between ">
      <div className="ml-16 ">
        <div className="w-full m-0">
          <h1
            className="
              inline-block          
              text-[40px]
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
        <h1 className="text-[40px] font-bold">Transformando </h1>
        <h1 className="text-[40px] font-bold">Eletrônicos em</h1>
        <h1 className="text-[40px] font-bold">Sustentabilidade</h1>
        <p className="text-[16px] text-[#5F6063]">
          Conectando pessoas, tecnologia e meio ambiente em um{' '}
        </p>
        <p className="text-[16px] text-[#5F6063]">
          ciclo de reciclagem inteligente
        </p>

        <div className="flex items-center gap-4 mt-[75px]">
          <div
            id="btn1"
            className="btnEfect w-[192px] h-[51px] flex justify-center items-center flex-col"
          >
            <h2 className="text-[15px]">Participar Agora →</h2>
            <h2 className="text-[12px] text-[#DFDADA]">Login</h2>
          </div>
          <div
            id="btn2"
            className="btnEfect w-[171px] h-[51px] flex justify-center items-center"
          >
            <p className="text-[18px] text-[#67C38D]">Como Funciona</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-[58px] text-center">
          <div>
            <h2 className="text-[28px] font-bold text-[#3AA34A]">1000+</h2>
            <p className="text-[14px]">Dispositivos Reciclados</p>
          </div>
          <div>
            <h2 className="text-[28px] font-bold text-[#2563EB]">500+</h2>
            <p className="text-[14px]">Participantes Ativos</p>
          </div>
          <div>
            <h2 className="text-[28px] font-bold text-[#9333EA]">50+</h2>
            <p className="text-[14px]">Pontos de Coleta</p>
          </div>
        </div>
      </div>

      <div
        id="cont2"
        className="w-548 h-326 bg-white mb-14 mr-[255px] grid grid-cols-2 gap-12 p-[44px]"
      >
        <div className="bloco btnEfect bg-[linear-gradient(126deg,var(--tw-gradient-stops))] from-[#BCF7D1] to-[#D9FBE5] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src={Cell} alt="Smartphones" />
            <h3>Smartphones</h3>
          </div>
        </div>

        <div className="bloco btnEfect bg-[linear-gradient(126deg,var(--tw-gradient-stops))] from-[#DAE9FE] to-[#C2DDFE] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src={Laptop} alt="Laptops" />
            <h3>Laptops</h3>
          </div>
        </div>

        <div className="bloco btnEfect bg-[linear-gradient(126deg,var(--tw-gradient-stops))] from-[#F2E6FF] to-[#EAD7FF] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src={Compn} alt="Componentes" />
            <h3>Componentes</h3>
          </div>
        </div>

        <div className="bloco btnEfect bg-[linear-gradient(126deg,var(--tw-gradient-stops))] from-[#FFEBD2] to-[#FEDAAF] flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <img src={Mais} alt="Muito mais" />
            <h4>Muito mais</h4>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
