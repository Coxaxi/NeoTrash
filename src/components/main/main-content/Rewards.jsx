import Cards from './Rewards/cards'

function Rewards() {
  return (
    <>
      <div className=" bg-gradient-to-r from-[#F9F5FF] to-[#EFF7FE] pt-[139px] pb-16">
        <div className="flex flex-col items-center mb-[100px]">
          <div className="bg-gradient-to-r from-[#8E35EA] to-[#376DEC] flex items-center  w-[284px] h-[65px] rounded-[68px] ">
            <div className="m-auto flex items-center">
              <img
                src={trofel}
                alt="🏆"
                className="max-w-[33px] max-h-[32px] mr-[8px]"
              />
              <h1 className="mt-2 text-[24px] font-semibold LeagueAs text-white">
                NeoTrash Rewards
              </h1>
            </div>
          </div>

          <h1 className="mt-[43px] text-[40px] LeagueAs font-semibold">
            Ganhe Recompensas por Contribuir
          </h1>
          <p className="mt-[32px] max-w-[785px] text-center LeagueAs font-light text-[24px] text-[#707070]">
            Cada ação sustentável é recompensada. Participe do nosso programa de
            pontos e desbloqueie benefícios exclusivos enquanto ajuda o planeta.
          </p>
        </div>

        <Cards />

        <div className="mb-[43px] pt-[49px] pb-[58px]  m-auto bg-gradient-to-r from-[#9034EA] to-[#2663EB]  w-[1286px]  rounded-[10px] mt-[64px] flex flex-col items-center">
          <h1 className="LeagueAs text-white text-[45px] font-bold">
            Comece a Ganhar Pontos Hoje!
          </h1>
          <p className="LeagueAs text-[25px] text-center text-white">
           Cadastre-se agora e receba 50 pontos de bônus para começar sua jornada sustentável
          </p>
          
          <div className='mt-[40px] btn bg-white w-[289px] h-[73px] rounded-[14px] flex items-center justify-center'>
          <h1 className="LeagueAs text-[#A74FEF] text-center text-[28px] font-medium" >Participar e Ganhar</h1>
          </div>
        </div>
      </div>
    </>
  )
}

import trofel from '../main-imgs/Rewards-imgs/trofel.png'

export default Rewards
