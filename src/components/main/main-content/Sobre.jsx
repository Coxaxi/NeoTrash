import Coracao from '../main-imgs/Sobre-imgs/coracao.png'
import Caminhao from '../main-imgs/Sobre-imgs/Caminhao.png'
import Loja from '../main-imgs/Sobre-imgs/Loja.png'
import rgbgradient from  '../main-imgs/Sobre-imgs/rgbgradient.png'

function Sobre() {
  return (
    <div id="Sobre" className='sobresponsividade pai min-h-[auto] p-6 md:p-[114px] bg-white flex flex-col items-center'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-[40px] font-bold'>Sobre o Sistema NeoTrash</h1>
      <p className='text-center desc1 text-sm md:text-[16px] mt-2'>
        O NeoTrash é uma plataforma inovadora que conecta pessoas em um ciclo
        inteligente  
        de reciclagem eletrônica, criando valor sustentável a partir
        de dispositivos que não são 
      </p>
      <p className='text-center desc1 text-sm md:text-[16px]'>
        mais utilizados.
      </p>

      <div className='Sobre mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0'>
        <div className='w-full md:w-1/2'>
          <div className='rounded-[15px] a max-w-full md:max-w-[566px] bg-gradient-to-br from-[#F0FDF5] to-[#E4F1FF] p-4 md:pl-[31px] md:pr-[31px] md:pt-[18px] md:pb-[18px] overflow-hidden'>
            <div className='flex items-center'>
              <img src={rgbgradient} alt="?" className='h-8 md:h-[36px]'/>
              <h2 className='ml-3 md:ml-[14px] text-sm md:text-[15px] font-semibold'>Como funciona</h2>
            </div>
            
            <p className='text-sm md:text-[16px] mt-3 md:mt-[18px]'>
              Nossa plataforma cadastra três tipos de usuários: doadores,
              coletores e recicladores . Cada um com um papel essencial no
              processo de reciclagem, e utilizamos recompensas gamificadas para
              incentivar a participação.
            </p>
          </div> 

          <div  className='rounded-[15px] bg-gradient-to-br from-[#FAF5FF] to-[#FCF3FA] a max-w-full md:max-w-[566px] p-4 md:pl-[31px] md:pr-[31px] md:pt-[18px] md:pb-[18px] mt-4 md:mt-[19px] overflow-hidden'>
            <h2 className='text-sm md:text-[15px] font-semibold'>Impacto Ambiental</h2>
            <p className='text-sm md:text-[16px] mt-3 md:mt-[18px]'>
              Cada dispositivo reciclado através do NeoTrash contribui para a
              redução do lixo eletrônico e promove a economia circular,
              transformando resíduos em recursos valiosos.
            </p>
          </div>
        </div>

        <div className='w-full md:w-1/2 md:ml-6 lg:ml-10 flex flex-col gap-4 md:gap-[10px]'>
          <div className='card-info p-4 md:pl-[26px] md:pr-[26px] bg-[#FAF7F7] rounded-[20px]'>
            <div className='flex items-center mb-2'>
              <img src={Coracao} alt="Coracao" className='h-8 md:h-auto' />
              <h2 className='ml-3 text-base md:text-lg'>Doadores</h2>
            </div>
            <p className='text-sm md:text-base'>
              Cidadãos conscientes que contribuem doando seus eletrônicos
              antigos para dar uma nova vida útil aos componentes.
            </p>
          </div>

          <div className='card-info p-4 md:pl-[26px] md:pr-[26px] bg-[#FAF7F7] rounded-[20px]'>
            <div className='flex items-center mb-2'>
              <img src={Caminhao} alt="caminhao" className='h-8 md:h-auto' />
              <h2 className='ml-3 text-base md:text-lg'>Coletores</h2>
            </div>
            <p className='text-sm md:text-base'>
              Parceiros especializados que coletam, avaliam e processam os
              eletrônicos de forma responsável e sustentável.
            </p>
          </div>

          <div className='card-info p-4 md:pl-[26px] md:pr-[26px] bg-[#FAF7F7] rounded-[20px]'>
            <div className='flex items-center mb-2'>
              <img src={Loja} alt="loja" className='h-8 md:h-auto' />
              <h2 className='ml-3 text-base md:text-lg'>Clientes</h2>
            </div>
            <p className='text-sm md:text-base'>
              Pessoas e empresas que adquirem produtos sustentáveis e obras de
              arte criadas a partir de componentes reciclados.
            </p>
          </div>
        </div>
      </div>

      <div id='Coleta' className='bg-white w-full h-0'></div>
    </div>
  )
}

export default Sobre