export default function Produtos() {
  return (
    <div className='bg-white'>
      <div id="Produtos" className="flex flex-col items-center justify-center">
        <div className="pt-[150px] flex flex-col items-center justify-center">
          <h1 className="LeagueAs text-[40px] font-semibold">
            Produtos e Compras Sustentáveis
          </h1>
          <p className="mt-[20px] mb-[50px] text-center max-w-[830px] LeagueAs text-[24px] font-light font-[#777777]">
            Descubra nossa coleção única de produtos sustentáveis e obras de
            arte criadas a partir de componentes eletrônicos reciclados.
          </p>

          <div className="logo mb-20">
            <h1 className="text-log">Nossos Produtos:</h1>
          </div>
        </div>

        <div className="flex">
          <div className="item ">
            <img src={Luz} alt="Produlto" />

            <div className="info p-1">
              <h1 className="LeagueAs name mt-4">Luminária de Circuito</h1>
              <p className="LeagueAs descricao max-w-[400px] mt-4">
                Luminaria única feita com placas de smartphones reciclados
              </p>

              <div className="mt-2 flex">
                <h1 className="LeagueAs text-[30px] font-bold text-[#3AA34A] price mr-[60px]">
                  R$ 129,90
                </h1>
                <img
                  src={look}
                  alt="look"
                  className="max-w-[30px] max-h-[30px]  mr-[15px] btn"
                />
                <img
                  src={buy}
                  alt="Buy"
                  className="max-w-[120px] max-h-[32px] btn"
                />
              </div>
            </div>
          </div>

          <div className="item ">
            <img src={Bortoleto} alt="Produlto" />

            <div className="info p-1">
              <h1 className="LeagueAs name mt-4">Escutura Digital</h1>
              <p className="LeagueAs descricao max-w-[400px] mt-4">
                Escultura moderna criada com componentes de computadores
                antigos.
              </p>

              <div className="mt-2 flex">
                <h1 className="LeagueAs text-[30px] font-bold text-[#3AA34A] price mr-[60px]">
                  R$ 249,90
                </h1>
                <img
                  src={look}
                  alt="look"
                  className="max-w-[30px] max-h-[30px]  mr-[15px] btn"
                />
                <img
                  src={buy}
                  alt="Buy"
                  className="max-w-[120px] max-h-[32px] btn"
                />
              </div>
            </div>
          </div>

          <div className="item ">
            <img src={Porta} alt="Produlto" />

            <div className="info p-1">
              <h1 className="LeagueAs name mt-4">Porta-Objetos Tech</h1>
              <p className="LeagueAs descricao max-w-[400px] mt-4">
                Organizador de mesa feito com cases de eletrônicos reciclados
              </p>

              <div className="mt-2 flex">
                <h1 className="LeagueAs text-[30px] font-bold text-[#3AA34A] price mr-[60px]">
                  R$ 79,90
                </h1>
                <img
                  src={look}
                  alt="look"
                  className="max-w-[30px] max-h-[30px]  mr-[15px] btn"
                />
                <img
                  src={buy}
                  alt="Buy"
                  className="max-w-[120px] max-h-[32px] btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-20 rounded-[20px] m-auto p-10 w-[1312px] h-[412px] flex justify-between bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4]'>
        <div className='ml-'>
          <h1 className="mb-[50px] font-semibold text-[40px] LeagueAs">
            Produtos Personalizados
          </h1>
          <p className="mb-[75px] max-w-[628px] font-light text-[20px] text-[#4C4949] LeagueAs">
            Quer algo único? Nossos artistas podem criar produtos personalizados
            usando componentes dos seus próprios eletrônicos doados. Uma forma
            especial de dar nova vida aos seus dispositivos.
          </p>
          <div className="transition hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer w-[275px] h-[65px] justify-center rounded-[10px] bg-gradient-to-r from-[#16A151] to-[#2464E8] flex flex-col items-center">
            <h2 className="text-white text-[24px] font-semibold">
              Solicitar Personalização
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-8'>
          <div className='flex flex-col items-center justify-center w-[280px] h-[132px] bg-white rounded-[10px]'>
            <h1 className='LeagueAs font-bold text-[32px] text-[#3AA34A]'>500+</h1>
            <p className='mt-1 LeagueAs font-light text-[20px]  text-black'>Produtos Criados</p>
          </div>

          <div className='flex flex-col items-center justify-center w-[280px] h-[132px] bg-white rounded-[10px]'>
            <h1 className='LeagueAs font-bold text-[32px] text-[#4D63EB] '>98%</h1>
            <p className='mt-1 LeagueAs font-light text-[20px]  text-black'>Produtos Criados</p>
          </div>

          <div className='flex flex-col items-center justify-center w-[280px] h-[132px] bg-white rounded-[10px]'>
            <h1 className='LeagueAs font-bold text-[32px] text-[#9350EF]'>50+</h1>
            <p className='mt-1 LeagueAs font-light text-[20px]  text-black'>Produtos Criados</p>
          </div>

          <div className='flex flex-col items-center justify-center w-[280px] h-[132px] bg-white rounded-[10px]'>
            <h1 className='LeagueAs font-bold text-[32px] text-[#EE6F0C]'>100%</h1>
            <p className='mt-1 LeagueAs font-light text-[20px]  text-black'>Produtos Criados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
import '../main-css/Produtos.css'

import look from '../main-imgs/produtos-img/look.png'
import buy from '../main-imgs/produtos-img/buy.png'
import Bortoleto from '../main-imgs/produtos-img/Bortoleto.png'
import Luz from '../main-imgs/produtos-img/luz.png'
import Porta from '../main-imgs/produtos-img/porta.png'