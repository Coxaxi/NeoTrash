export default function Impacto() {
  return (
    <div
      id="Parceiros"
      className="pt-[150px] bg-white flex flex-col items-center"
    >
      <h1 className="mb-5 LeagueAs text-[40px] font-semibold">
        Parceiros e Impacto
      </h1>
      <p className="mb-20 max-w-[900px] LeagueAs font-light text-[24px] text-center">
        Juntos, estamos criando um futuro mais sustentável. Conheça nossos
        parceiros e veja o impacto positivo que estamos gerando no meio
        ambiente.
      </p>

      <div className="grid grid-cols-2 gap-40 mb-10">
        <div className="p-2 pr-[60px] pl-[60px] shadow-lg flex flex-col items-center justify-center  bg-white rounded-[10px]">
          <img src={u} alt="" />
          <h1 className="LeagueAs font-bold text-[36px]">2.5 toneladas</h1>
          <p className="mt-1 LeagueAs font-medium text-[20px]  text-[#4C4949]">
            Participantes Ativos
          </p>
        </div>

        <div className="p-2 pr-[60px] pl-[60px] shadow-lg flex flex-col items-center justify-center  bg-white rounded-[10px]">
          <img src={d} alt="" />
          <h1 className="LeagueAs font-bold text-[36px]">1,250+</h1>
          <p className="mt-1 LeagueAs font-medium text-[20px]  text-[#4C4949]">
            Participantes Ativos
          </p>
        </div>

        <div className="p-2 pr-[60px] pl-[60px] shadow-lg flex flex-col items-center justify-center  bg-white rounded-[10px]">
          <img src={t} alt="" />
          <h1 className="LeagueAs font-bold text-[36px]">3.2+ toneladas</h1>
          <p className="mt-1 LeagueAs font-medium text-[20px]  text-[#4C4949]">
            CO² Evitado
          </p>
        </div>

        <div className="p-2 pr-[60px] pl-[60px] shadow-lg flex flex-col items-center justify-center  bg-white rounded-[10px]">
          <img src={q} alt="" />
          <h1 className="LeagueAs font-bold text-[36px]">100+</h1>
          <p className="mt-1 LeagueAs font-medium text-[20px]  text-[#4C4949]">
            Produtos Criados
          </p>
        </div>
      </div>

      <div className="rounded-[20px] bg-gradient-to-r from-[#16A151] to-[#2464E8] m-auto w-[1372px] h-[493px] flex flex-col items-center justify-center">
        <h1 className="mb-[45px] text-[32px] text-[#FFFF] font-semibold LeagueAs">
          Impacto Ambiental Positivo
        </h1>
        <p className="mb-[107px] text-center text-[20px] text-[#FFFF] LeagueAs max-w-[980px]">
          Através do NeoTrash, promovemos a economia circular e contribuimos
          significamente para a reduçaõ do lixo eletrônico, trasformando resídos
          em recursos valiosos.
        </p>

        <div className="grid grid-cols-3 gap-40 ">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] text-[#FFFF] font-semibold LeagueAs">
              85%
            </h2>
            <p className="mt-2 text-[20px] text-[#FFFF] font-medium LeagueAs">
              Redução de Resíduos
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] text-[#FFFF] font-semibold LeagueAs">
              +95%
            </h2>
            <p className="mt-2 text-[20px] text-[#FFFF] font-medium LeagueAs">
              Reaproveitamento
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] text-[#FFFF] font-semibold LeagueAs">
              99%+
            </h2>
            <p className="mt-2 text-[20px] text-[#FFFF] font-medium LeagueAs">
              Processo
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[100px] bg-white flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-semibold LeagueAs">Nossos Parceiros</h1>

        <div className="  p-4 grid grid-cols-2 gap-40">
          <div className='shadow-2xl p-4 rounded-[20px]'>
            <h1 className='LeagueAs text-[32px] font-semibold'>EcoTech Solutions</h1>
            <p className='max-w-[330px] LeagueAs text-[#2FC850] text-[24px] font-semibold'>Empresa de Tecnologia</p>
            <p className='max-w-[330px] LeagueAs text-[#000] text-[24px] font-semibold'>Lider em soluções sustentáveis para o setor tecnologico</p>
          </div>

          <div className='shadow-2xl p-4 rounded-[20px]'>
            <h1 className='LeagueAs text-[32px] font-semibold'>Universidade Verde</h1>
            <p className='max-w-[330px] LeagueAs text-[#2FC850] text-[24px] font-semibold'>Instituição de Ensino</p>
            <p className='max-w-[330px] LeagueAs text-[#000] text-[24px] font-semibold'>Centro de pesquisa em sustentabilodade e inovaçaõ</p>
          </div>

          <div className='shadow-2xl p-4 rounded-[20px]'>
            <h1 className='LeagueAs text-[32px] font-semibold'>ONG Planeta Limpo</h1>
            <p className='max-w-[330px] LeagueAs text-[#2FC850] text-[24px] font-semibold'>Organizaçaõ Social</p>
            <p className='max-w-[330px] LeagueAs text-[#000] text-[24px] font-semibold'>Dedicada à preservação ambiental e educação ecológica</p>
          </div>

          <div className='shadow-2xl p-4 rounded-[20px]'>
            <h1 className='LeagueAs text-[32px] font-semibold'>GreenCorp Industries</h1>
            <p className='max-w-[330px] LeagueAs text-[#2FC850] text-[24px] font-semibold'>Indústria Sustentável</p>
            <p className='max-w-[330px] LeagueAs text-[#000] text-[24px] font-semibold'>Pionera em processos industriais ecológicos</p>
          </div>

          <div className='shadow-2xl p-4 rounded-[20px]'>
            <h1 className='LeagueAs text-[32px] font-semibold'>Instituto EcoFuturo</h1>
            <p className='max-w-[330px] LeagueAs text-[#2FC850] text-[24px] font-semibold'>Centro de Pesquisa</p>
            <p className='max-w-[330px] LeagueAs text-[#000] text-[24px] font-semibold'>Pesquisa e desenvolvimento em tecnologias verdes</p>
          </div>

          <div className='shadow-2xl p-4 rounded-[20px]'>
            <h1 className='LeagueAs text-[32px] font-semibold'>Fundação Terra Verde</h1>
            <p className='max-w-[330px] LeagueAs text-[#2FC850] text-[24px] font-semibold'>Fundação</p>
            <p className='max-w-[330px] LeagueAs text-[#000] text-[24px] font-semibold'>Promove ações de impacto ambiental positivo</p>
          </div>
        </div>

      </div>

      <div className='mb-[95px] w-[1203px] rounded-[20px] shadow-2xl flex flex-col items-center justify-between p-[40px] mt-[100px] bg-white'>
        <h1 className='font-semibold text-[36px] LeagueAs'>Seja Nosso Parceiro</h1>
        <p className='mb-[35px] mt-[30px] max-w-[905px] text-center text-[24px] LeagueAs font-light text-[#4C4949]'>Junte-se ao movimento de sustentabilidade e faça parte da transformação que está mudando a forma como lidamos com eletrônicos.</p>

        <div className='flex justify-between m-auto '>
          <div id="btn1" className="mr-20 btnEfect w-[192px] h-[51px] flex justify-center items-center flex-col">
            <h2 className="text-[15px] LeagueAs">Torna-se Parceiro</h2>
          </div>

          <div id="btn2" className="btnEfect w-[171px] h-[51px] flex justify-center items-center" >
            <p className="text-[18px] text-[#67C38D] LeagueAs">Saiba Mais</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import u from '../main-imgs/impacto-img/u.png'
import d from '../main-imgs/impacto-img/d.png'
import t from '../main-imgs/impacto-img/t.png'
import q from '../main-imgs/impacto-img/q.png'
