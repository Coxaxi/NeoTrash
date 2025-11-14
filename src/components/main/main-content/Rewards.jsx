import Cards from './Rewards/cards'
import trofel from '../main-imgs/Rewards-imgs/trofel.png'

function Rewards() {
  return (
    <>
      <div className="rewardsresponsividade bg-gradient-to-r from-[#F9F5FF] to-[#EFF7FE] pt-16 md:pt-[139px] pb-8 md:pb-16 flex flex-col items-center">
        <div className="flex flex-col items-center mb-12 md:mb-[100px] px-4 md:px-0">
          <div className="bg-gradient-to-r from-[#8E35EA] to-[#376DEC] flex items-center w-full max-w-[284px] h-auto md:h-[65px] rounded-[68px] py-4 md:py-0">
            <div className="m-auto flex items-center">
              <img
                src={trofel}
                alt="🏆"
                className="w-8 md:max-w-[33px] h-8 md:max-h-[32px] mr-2 md:mr-[8px]"
              />
              <h1 className="text-xl md:text-[24px] font-semibold LeagueAs text-white">
                NeoTrash Rewards
              </h1>
            </div>
          </div>

          <h1 className="mt-6 md:mt-[43px] text-3xl md:text-[40px] LeagueAs font-semibold text-center">
            Ganhe Recompensas por Contribuir
          </h1>
          <p className="mt-4 md:mt-[32px] max-w-full md:max-w-[785px] text-center LeagueAs font-light text-lg md:text-[24px] text-[#707070]">
            Cada ação sustentável é recompensada. Participe do nosso programa de
            pontos e desbloqueie benefícios exclusivos enquanto ajuda o planeta.
          </p>
        </div>

        <Cards />

        <div className="mb-8 md:mb-[43px] pt-8 md:pt-[49px] pb-8 md:pb-[58px] m-auto bg-gradient-to-r from-[#9034EA] to-[#2663EB] w-full max-w-[1286px] rounded-[10px] mt-8 md:mt-[64px] flex flex-col items-center px-4 md:px-0">
          <h1 className="LeagueAs text-white text-3xl md:text-[45px] font-bold text-center">
            Comece a Ganhar Pontos Hoje!
          </h1>
          <p className="LeagueAs text-lg md:text-[25px] text-center text-white mt-4">
           Cadastre-se agora e receba 50 pontos de bônus para começar sua jornada sustentável
          </p>
          
          <button className='mt-6 md:mt-[40px] btn bg-white w-full max-w-[289px] h-auto md:h-[73px] rounded-[14px] flex items-center justify-center py-4 md:py-0'>
          <h1 className="LeagueAs text-[#A74FEF] text-center text-xl md:text-[28px] font-medium" >Participar e Ganhar</h1>
          </button>
        </div>
      </div>
    </>
  )
}

export default Rewards