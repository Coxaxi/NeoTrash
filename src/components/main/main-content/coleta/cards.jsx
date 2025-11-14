import point from '../../main-imgs/Coleta-imgs/point.png'
import on from '../../main-imgs/Coleta-imgs/on.png'

import casa from '../../main-imgs/Coleta-imgs/cards/casa.png'
import coracao from '../../main-imgs/Coleta-imgs/cards/coracao.png'
import predio from '../../main-imgs/Coleta-imgs/cards/predio.png'
import profile from '../../main-imgs/Coleta-imgs/cards/profile.png'
import univers from '../../main-imgs/Coleta-imgs/cards/univers.png'
import predioRoxo from '../../main-imgs/Coleta-imgs/cards/predioRoxo.png'

function Cards() {
  return (
    <div className="cardsresponsividade grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-4 lg:gap-8 place-items-center px-4 md:px-8 lg:px-0 mt-8 md:mt-0">
      <div
        className="transition-all duration-500 ease-in-out
  hover:shadow-2xl
  hover:shadow-cyan-500/30 card mt-12 md:mt-[94px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] w-full max-w-[350px] md:max-w-[350px] lg:max-w-[502px] min-h-[auto] md:h-auto lg:h-[377px] rounded-[15px] px-6 md:px-8 lg:pr-[30px] lg:pl-[30px] py-8 md:py-10 lg:pt-[39px] lg:pb-[39px]"
      >
        <div className="ml-0 md:ml-[-15px] flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <img src={casa} alt="🆔" className="w-12 md:w-auto" />
          <div>
            <h1 className="text-xl md:text-[24px] pr-0 md:pr-[17px] text-center md:text-left">Escola Verde Sustentável</h1>
            <h2 className="text-base md:text-[20px] px-4 md:pl-[17px] md:pr-[17px] py-2 md:pt-[14px] md:pb-[14px] bg-[#D9D9D9]  max-w-full md:max-w-[232px] text-center rounded-[20px] mt-1 md:mt-0">
              Instituição de Ensino
            </h2>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div>
            <div className="flex items-center">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={point} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[17px]">À Decidir</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-[31px]">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={on} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[14px]">Seg-Sex: 8h às 17h</h1>
            </div>
          </div>
        </div>

        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-6 md:mt-[35px] w-full md:w-[300px] lg:w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Ver no Mapa
        </button>
      </div>

      <div
        className="transition-all duration-500 ease-in-out
  hover:shadow-2xl
  hover:shadow-cyan-500/30 card mt-12 md:mt-[94px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] w-full max-w-[350px] md:max-w-[350px] lg:max-w-[502px] min-h-[auto] md:h-auto lg:h-[377px] rounded-[15px] px-6 md:px-8 lg:pr-[30px] lg:pl-[30px] py-8 md:py-10 lg:pt-[39px] lg:pb-[39px]"
      >
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-[19px] gap-4 md:gap-0">
          <img src={coracao} alt="🆔" className="w-12 md:w-auto" />
          <div className="ml-0 md:ml-[19px]">
            <h1 className="text-xl md:text-[24px] pr-0 md:pr-[17px] text-center md:text-left">ONG EcoAmigos </h1>
            <h2 className="text-base md:text-[20px] px-4 md:pl-[17px] md:pr-[17px] py-2 md:pt-[14px] md:pb-[14px] bg-[#D9D9D9] max-h-[47px] max-w-full md:max-w-[232px] text-center rounded-[20px] mt-2 md:mt-0">
              Organização Social
            </h2>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div>
            <div className="flex items-center">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={point} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[17px]">À Decidir</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-[31px]">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={on} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[14px]">Seg-Sáb: 9h às 18h</h1>
            </div>
          </div>
        </div>

        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-6 md:mt-[35px] w-full md:w-[300px] lg:w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Ver no Mapa
        </button>
      </div>

      <div
        className="transition-all duration-500 ease-in-out
  hover:shadow-2xl
  hover:shadow-cyan-500/30 card mt-12 md:mt-[94px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] w-full max-w-[350px] md:max-w-[350px] lg:max-w-[502px] min-h-[auto] md:h-auto lg:h-[377px] rounded-[15px] px-6 md:px-8 lg:pr-[30px] lg:pl-[30px] py-8 md:py-10 lg:pt-[39px] lg:pb-[39px]"
      >
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-[19px] gap-4 md:gap-0">
          <img src={predio} alt="🆔" className="w-12 md:w-auto" />
          <div className="ml-0 md:ml-[19px]">
            <h1 className="text-xl md:text-[24px] pr-0 md:pr-[17px] text-center md:text-left">TechCorp Sustentável </h1>
            <h2 className="text-base md:text-[20px] px-4 md:pl-[17px] md:pr-[17px] py-2 md:pt-[14px] md:pb-[14px] bg-[#D9D9D9] max-h-[47px] max-w-full md:max-w-[232px] text-center rounded-[20px] mt-2 md:mt-0">
              Empresa Parceira
            </h2>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div>
            <div className="flex items-center">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={point} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[17px]">À Decidir</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-[31px]">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={on} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[14px]">Seg-Sex: 8h às 18h</h1>
            </div>
          </div>
        </div>


        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-6 md:mt-[35px] w-full md:w-[300px] lg:w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Ver no Mapa
        </button>
      </div>

      <div
        className="transition-all duration-500 ease-in-out
  hover:shadow-2xl
  hover:shadow-cyan-500/30 card mt-12 md:mt-[94px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] w-full max-w-[350px] md:max-w-[350px] lg:max-w-[502px] min-h-[auto] md:h-auto lg:h-[377px] rounded-[15px] px-6 md:px-8 lg:pr-[30px] lg:pl-[30px] py-8 md:py-10 lg:pt-[39px] lg:pb-[39px]"
      >
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-[19px] gap-4 md:gap-0">
          <img src={profile} alt="🆔" className="w-12 md:w-auto" />
          <div className="ml-0 md:ml-[19px]">
            <h1 className="text-xl md:text-[24px] pr-0 md:pr-[17px] text-center md:text-left">Centro Comunitário</h1>
            <h2 className="text-base md:text-[20px] px-4 md:pl-[17px] md:pr-[17px] py-2 md:pt-[14px] md:pb-[14px] bg-[#D9D9D9] max-w-full md:max-w-[232px] text-center rounded-[20px] mt-2 md:mt-0">
              Espaço Comunitário
            </h2>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div>
            <div className="flex items-center">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={point} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[17px]">À Decidir</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-[31px]">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={on} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[14px]">
                Todos os Dias: 8h às 20h
              </h1>
            </div>
          </div>
        </div>


        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-6 md:mt-[35px] w-full md:w-[300px] lg:w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Ver no Mapa
        </button>
      </div>

      <div
        className="transition-all duration-500 ease-in-out
  hover:shadow-2xl
  hover:shadow-cyan-500/30 card mt-12 md:mt-[94px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] w-full max-w-[350px] md:max-w-[350px] lg:max-w-[502px] min-h-[auto] md:h-auto lg:h-[377px] rounded-[15px] px-6 md:px-8 lg:pr-[30px] lg:pl-[30px] py-8 md:py-10 lg:pt-[39px] lg:pb-[39px]"
      >
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-[19px] gap-4 md:gap-0">
          <img src={univers} alt="🆔" className="w-12 md:w-auto" />
          <div className="ml-0 md:ml-[19px]">
            <h1 className="text-xl md:text-[24px] pr-0 md:pr-[17px] text-center md:text-left">Universidade EcoTech</h1>
            <h2 className="text-base md:text-[20px] px-4 md:pl-[17px] md:pr-[17px] py-2 md:pt-[14px] md:pb-[14px] bg-[#D9D9D9] max-h-[47px] max-w-full md:max-w-[232px] text-center rounded-[20px] mt-2 md:mt-0">
              Universidade
            </h2>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div>
            <div className="flex items-center">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={point} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[17px]">À Decidir</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-[31px]">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={on} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[14px]">Seg-Sex: 7h às 22h</h1>
            </div>
          </div>
        </div>


        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-6 md:mt-[35px] w-full md:w-[300px] lg:w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Ver no Mapa
        </button>
      </div>

      <div
        className="transition-all duration-500 ease-in-out
  hover:shadow-2xl
  hover:shadow-cyan-500/30 card mt-12 md:mt-[94px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] w-full max-w-[350px] md:max-w-[350px] lg:max-w-[502px] min-h-[auto] md:h-auto lg:h-[377px] rounded-[15px] px-6 md:px-8 lg:pr-[30px] lg:pl-[30px] py-8 md:py-10 lg:pt-[39px] lg:pb-[39px]"
      >
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-[19px] gap-4 md:gap-0">
          <img src={predioRoxo} alt="🆔" className="w-12 md:w-auto" />
          <div className="ml-0 md:ml-[19px]">
            <h1 className="text-xl md:text-[24px] pr-0 md:pr-[17px] text-center md:text-left">Shopping Verde</h1>
            <h2 className="text-base md:text-[20px] px-4 md:pl-[17px] md:pr-[17px] py-2 md:pt-[14px] md:pb-[14px] bg-[#D9D9D9] max-h-[47px] max-w-full md:max-w-[232px] text-center rounded-[20px] mt-2 md:mt-0">
              Centro Comercial
            </h2>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <div>
            <div className="flex items-center">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={point} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[17px]">À Decidir</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-[31px]">
              <img className="w-8 md:w-[36px] h-8 md:h-[36px]" src={on} alt="" />
              <h1 className="text-base md:text-[20px] ml-3 md:ml-[14px]">
                Todos os dias: 10h às 22h
              </h1>
            </div>
          </div>
        </div>


        <button
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-6 md:mt-[35px] w-full md:w-[300px] lg:w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-lg md:text-[24px]"
        >
          Ver no Mapa
        </button>
      </div>
    </div>
  )
}

export default Cards