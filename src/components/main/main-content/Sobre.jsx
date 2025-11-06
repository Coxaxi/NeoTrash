import Coracao from '../main-imgs/Sobre-imgs/coracao.png'
import Caminhao from '../main-imgs/Sobre-imgs/Caminhao.png'
import Loja from '../main-imgs/Sobre-imgs/Loja.png'
import rgbgradient from  '../main-imgs/Sobre-imgs/rgbgradient.png'



function Sobre() {
  return (
    <div id="Sobre" className='pai h-[782px] p-[114px] bg-white '>
      <h1 className='text-center text-[40px] font-bold'>Sobre o Sistema NeoTrash</h1>
      <p className='text-center desc1 text-[16px]'>
        O NeoTrash é uma plataforma inovadora que conecta pessoas em um ciclo
        inteligente  
      </p >
      <p className='text-center desc1 text-[16px]'>
        de reciclagem eletrônica, criando valor sustentável a partir
        de dispositivos que não são 
      </p>
      <p className='text-center desc1 text-[16px]'>
        mais utilizados.
      </p>

      <div className='Sobre mt-8 flex justify-between items-center'>
        <div>
          <div className='rounded-[15px] a max-h-[180px] max-w-[566px] bg-[linear-gradient(120deg,#F0FDF5,#E4F1FF)] pl-[31px] pr-[31px] pt-[18px] pb-[18px]'>
            <div className='flex items-center'>
              <img src={rgbgradient} alt="?" className='h-[36px]'/>
              <h2 className=' ml-[14px] text-[15px] font-semibold'>Como funciona</h2>
            </div>
            
            <p className='text-[16px] mt-[18px]'>
              Nossa plataforma cadastra três tipos de usuários: doadores,
              coletores e recicladores . Cada um com um papel essencial no
              processo de reciclagem, e utilizamos recompensas gamificadas para
              incentivar a participação.
            </p>
          </div> 

          <div  className='rounded-[15px] bg-[linear-gradient(-53deg,#FAF5FF,#FCF3FA)] a max-h-[180px] max-w-[566px] pl-[31px] pr-[31px] pt-[18px] pb-[18px] mt-[19px]'>
            <h2 className='text-[15px] font-semibold'>Impacto Ambiental</h2>
            <p className='text-[16px] mt-[18px]'>
              Cada dispositivo reciclado através do NeoTrash contribui para a
              redução do lixo eletrônico e promove a economia circular,
              transformando resíduos em recursos valiosos.
            </p>
          </div>
        </div>

        <div className='ml-10 '>
          <div className='card-info mb-[10px] pl-[26px] pr-[26px] bg-[#FAF7F7] rounded-[20px] pt-1 pb-1'>
            <div>
              <img src={Coracao} alt="Coracao" />
              <h2>Doadores</h2>
            </div>
            <p>
              Cidadãos conscientes que contribuem doando seus eletrônicos
              antigos para dar uma nova vida útil aos componentes.
            </p>
          </div>

          <div className='card-info mb-[10px] pl-[26px] pr-[26px] bg-[#FAF7F7] rounded-[20px] pt-1 pb-1'>
            <div>
              <img src={Caminhao} alt="caminhao" />
              <h2>Coletores</h2>
            </div>
            <p>
              Parceiros especializados que coletam, avaliam e processam os
              eletrônicos de forma responsável e sustentável.
            </p>
          </div>

          <div className='card-info pl-[26px] pr-[26px] bg-[#FAF7F7] rounded-[20px] pt-1 pb-1'>
            <div>
              <img src={Loja} alt="loja" />
              <h2>Clientes</h2>
            </div>
            <p >
              Pessoas e empresas que adquirem produtos sustentáveis e obras de
              arte criadas a partir de componentes reciclados.
            </p>
          </div>
        </div>
      </div>

      <div id='Coleta' className='bg-white'></div>
    </div>
  )
}

export default Sobre
