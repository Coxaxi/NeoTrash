import pointVerd from '../main-imgs/Coleta-imgs/pointVerd.png'
import Cards from './coleta/cards.jsx'

function Coleta() {
  return (
    <div id='Coleta' className=" coletaresponsividade bg-white pb-8 md:pb-[43px] pt-[150px] flex flex-col items-center px-4 md:px-0">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl md:text-[36px] font-semibold text-black">
          Pontos de Coleta
        </h1>
        <p className="mt-4 md:mt-[34px] max-w-[750px] text-center font-semibold text-base md:text-[20px] text-black">
          Encontre o ponto de coleta mais próximo de você. Nossos parceiros
          estão espalhados pela
          cidade para facilitar sua participação no progama.
        </p>
      </div>

      <div className="flex flex-col items-center mt-12 md:mt-[99px] w-full md:w-[824px] bg-gradient-to-r from-[rgba(47,200,80,0.25)] to-[rgba(9,66,255,0.25)] rounded-[10px] pt-6 md:pt-[26px] pb-6 md:pb-[26px]">
        <div className="flex items-center mb-4 md:mb-[27px]">
          <img src={pointVerd} alt="🚩" className="w-8 md:w-auto" />
          <h2 className="text-xl md:text-[24px] font-semibold text-black ml-2 md:ml-0">
            Localize o ponto mais próximo
          </h2>
        </div>
        <p className="text-base md:text-[20px] font-semibold text-black w-full md:w-[450px] text-center px-4 md:px-0">
          Todos os pontos de coletas são seguros, certificados e preparados
          para receber seus eletrônicos
        </p>
      </div>

      <Cards />

      <div className="pt-8 md:pt-[49px] pb-8 md:pb-[58px] px-8 md:px-[234px] m-auto bg-gradient-to-r from-[#F0FDF5] to-[#EFF6FF] w-full max-w-[1367px] min-h-[auto]  rounded-[10px] mt-8 md:mt-[64px] flex flex-col items-center">
        <h1 className="Nunito text-3xl md:text-[36px] font-bold text-center">
          Quer se tornar um ponto de coleta?
        </h1>
        <p className="text-lg md:text-[24px] text-center mt-4">
          Junte-se à nossa rede de parceiros e ajude a expandir o impacto
          positivo do NeoTrash em sua comunidade.
        </p>

        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-12 md:mt-[20px] w-full md:w-[376px] md:h-[80px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Cadastrar Instituição
        </button>
      </div>
    </div>

  )
}

export default Coleta