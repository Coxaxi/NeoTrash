import Cards from './Produtos/Cards.jsx'


export default function Produtos() {
  return (
    <div className='pt-[100px] produtosresponsividade bg-white flex flex-col items-center'>
      <div id="Produtos" className="flex flex-col items-center justify-center w-full px-4 md:px-0">
        <div className="pt-16 md:pt-[150px] flex flex-col items-center justify-center">
          <h1 className="LeagueAs text-3xl md:text-[40px] font-semibold text-center">
            Produtos e Compras Sustentáveis
          </h1>
          <p className="mt-4 md:mt-[20px] mb-8 md:mb-[50px] text-center max-w-full md:max-w-[830px] LeagueAs text-lg md:text-[24px] font-light text-[#777777]">
            Descubra nossa coleção única de produtos sustentáveis e obras de
            arte criadas a partir de componentes eletrônicos reciclados.
          </p>

          <div >
            <h1 className="text-[#49A75D]  LeagueAs text-3xl md:text-[40px] font-semibold text-center">Nossos Produtos:</h1>
          </div>
        </div>

        <Cards />
      </div>

      <div className='mt-12 md:mt-20 rounded-[20px] m-auto p-6 md:p-10 w-full max-w-[1312px] min-h-[auto] md:h-auto lg:h-[412px] flex flex-col lg:flex-row justify-between bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] gap-8 md:gap-0'>
        <div className='flex flex-col'>
          <h1 className="mb-8 md:mb-[50px] font-semibold text-3xl md:text-[40px] LeagueAs">
            Produtos Personalizados
          </h1>
          <p className="mb-12 md:mb-[75px] max-w-full md:max-w-[628px] font-light text-lg md:text-[20px] text-[#4C4949] LeagueAs">
            Quer algo único? Nossos artistas podem criar produtos personalizados
            usando componentes dos seus próprios eletrônicos doados. Uma forma
            especial de dar nova vida aos seus dispositivos.
          </p>
          <button className="transition hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer w-full max-w-[275px] h-auto md:h-[65px] justify-center rounded-[10px] bg-gradient-to-r from-[#16A151] to-[#2464E8] flex items-center py-4 md:py-0">
            <h2 className="text-white text-xl md:text-[24px] font-semibold text-center">
              Solicitar Personalização
            </h2>
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          <div className='flex flex-col items-center justify-center w-full max-w-[280px] h-auto md:h-[132px] bg-white rounded-[10px] p-4'>
            <h1 className='LeagueAs font-bold text-2xl md:text-[32px] text-[#3AA34A]'>500+</h1>
            <p className='mt-1 LeagueAs font-light text-base md:text-[20px] text-black text-center'>Produtos Criados</p>
          </div>

          <div className='flex flex-col items-center justify-center w-full max-w-[280px] h-auto md:h-[132px] bg-white rounded-[10px] p-4'>
            <h1 className='LeagueAs font-bold text-2xl md:text-[32px] text-[#4D63EB] '>98%</h1>
            <p className='mt-1 LeagueAs font-light text-base md:text-[20px] text-black text-center'>Produtos Criados</p>
          </div>

          <div className='flex flex-col items-center justify-center w-full max-w-[280px] h-auto md:h-[132px] bg-white rounded-[10px] p-4'>
            <h1 className='LeagueAs font-bold text-2xl md:text-[32px] text-[#9350EF]'>50+</h1>
            <p className='mt-1 LeagueAs font-light text-base md:text-[20px] text-black text-center'>Produtos Criados</p>
          </div>

          <div className='flex flex-col items-center justify-center w-full max-w-[280px] h-auto md:h-[132px] bg-white rounded-[10px] p-4'>
            <h1 className='LeagueAs font-bold text-2xl md:text-[32px] text-[#EE6F0C]'>100%</h1>
            <p className='mt-1 LeagueAs font-light text-base md:text-[20px] text-black text-center'>Produtos Criados</p>
          </div>
        </div>
      </div>
    </div>
  )
}