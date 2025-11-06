import pointVerd from '../main-imgs/Coleta-imgs/pointVerd.png'
import Cards from './coleta/cards.jsx'

function Coleta() {
  return (
      <>
      <div id='Coleta' className='bg-white pt-5'></div>
      <div className="bg-white pb-[43px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-[36px] font-semibold text-black">
              Pontos de Coleta
            </h1>
            <p className="mt-[34px] text-center font-semibold text-[20px] text-black">
              Encontre o ponto de coleta mais próximo de você. Nossos parceiros
              estão espalhados pela
            </p>
            <p className="text-center text-[20px] font-semibold text-black">
              cidade para facilitar sua participação no progama.
            </p>
          </div>

          <div className="flex flex-col items-center mt-[99px] w-[824px] bg-[linear-gradient(to_right,rgba(47,200,80,0.25)_50%,rgba(9,66,255,0.25)100%)] rounded-[10px] pt-[26px] pb-[26px]">
            <div className="flex items-center mb-[27px]">
              <img src={pointVerd} alt="🚩" />
              <h2 className="text-[24px] font-semibold text-black">
                Localize o ponto mais próximo
              </h2>
            </div>
            <p className="text-[20px] font-semibold text-black w-[450px] text-center">
              Todos os pontos de coletas são seguros, certificados e preparados
              para receber seus eletrônicos
            </p>
          </div>
        </div>

        <Cards />

        <div className=" pt-[49px] pb-[58px] pr-[234px] pl-[234px] m-auto bg-gradient-to-r from-[#F0FDF5] to-[#EFF6FF] w-[1367px] h-[394px] rounded-[10px] mt-[64px] flex flex-col items-center">
          <h1 className="Nunito text-[36px] font-bold">
            Quer se tornar um ponto de coleta?
          </h1>
          <p className="text-[24px] text-center">
            Junte-se à nossa rede de parceiros e ajude a expandir o impacto
            positivo do NeoTrash em sua comunidade.
          </p>

          <h1
          className="
        bg-[length:200%_auto]
        
        bg-[position:0%_center]
        
        transition-all duration-500 ease-in-out
        
        hover:bg-[position:100%_center]

        hover:-translate-y-1
        hover:shadow-xl btn m-auto mt-[110px] w-[376px] h-[56px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2FC850] to-[#0942FF] btnFont text-center text-white font-semibold text-[24px]"
        >
          Cadastrar Minha Instituição
        </h1>
        </div>
      </div>
    </>
  )
}

export default Coleta
