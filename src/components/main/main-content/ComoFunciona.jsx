export default function ComoFunciona() {
    return (
        <div id="ComoFunciona" className='pt-[100px] pb-[100px] flex flex-col items-center bg-[#F2F9FF]'>
            <h1 className=' inter text-[36px] font-bold'>Como Funciona o Ciclo de Reciclagem</h1>
            <p className='text-center max-w-[582px] inter text-[16px] font-medium'>Nosso processo é simples, transparente e eficiente. Acompanhe cada etapa da transformação dos seus eletrônicos em produtos sustentáveis.</p>

            <div className='flex m-auto mt-[40px] mb-[40px]'>
                <div className='rounded-[20px] bg-white w-[243px] flex flex-col items-center justify-center pt-[21px] pb-[21px] p-1'>
                    <img src={Presente} alt="" />
                    <p className='mt-[20px] inter text-[14px] text-[#7E7E7E]'>PASSO 1</p>
                    <h1 className='mt-[20px] text-[18px] font-bold inter'>Doação</h1>
                    <p className='mt-[20px]  text-center text-[18px] font-medium text-[#000] inter'>Usuários cadastram e doam seus eletrônicos antigos através da plataforma, informando detalhes sobre o estado dos dispositivos.</p>
                </div>

                <img src={Linha} className='h-[2px] w-[58px] mt-[75px]' alt="" />

                <div className='rounded-[20px] bg-white w-[243px] flex flex-col items-center justify-center pt-[21px] pb-[21px] p-1'>
                    <img src={Truck} alt="" />
                    <p className='mt-[20px] inter text-[14px] text-[#7E7E7E]'>PASSO 2</p>
                    <h1 className='mt-[20px] text-[18px] font-bold inter'>Coleta</h1>
                    <p className='text-center mt-[20px] text-[18px] font-medium text-[#000] inter'>Coletores parceiros retiram os dispositivos nos pontos de coleta ou diretamente na residência dos doadores.</p>
                </div>

                <img src={Linha} className='h-[2px] w-[58px] mt-[75px]' alt="" />

                <div className='rounded-[20px] bg-white w-[243px] flex flex-col items-center justify-center pt-[21px] pb-[21px] p-1'>
                    <img src={Lupa} alt="" />
                    <p className='mt-[20px] inter text-[14px] text-[#7E7E7E]'>PASSO 3</p>
                    <h1 className='text-center mt-[20px] text-[18px] font-bold inter'>Avaliação e Transformação</h1>
                    <p className='text-center mt-[20px] text-[18px] font-medium text-[#000] inter'>Os eletrônicos são avaliados, desmontados e seus componentes são transformados em novos produtos sustentáveis.</p>
                </div>

                <img src={Linha} className='h-[2px] w-[58px] mt-[75px]' alt="" />

                <div className='rounded-[20px] bg-white w-[243px] flex flex-col items-center justify-center pt-[21px] pb-[21px] p-1'>
                    <img src={Selo} alt="" />
                    <p className='mt-[20px] inter text-[14px] text-[#7E7E7E]'>PASSO 4</p>
                    <h1 className='mt-[20px] text-[18px] font-bold inter'>Venda e Recompensas</h1>
                    <p className='text-center mt-[20px] text-[18px] font-medium text-[#000] inter'>Produtos finais são vendidos na plataforma e todos os participantes recebem recompensas baseadas em sua contribuição.</p>
                </div>


            </div>

            <div className='w-[870px] flex flex-col items-center p-2 pr-[60px] pl-[60px] bg-white rounded-[20px]'>
                <h1 className='inter text-[32px] font-bold'>Transparência Total</h1>
                <p className='text-center max-w-[807px] inter text-[20px] font-medium'>Nosso sistema garante que cada doação seja registrada e tratada com responsabilidade. Do descarte à transformação, seguimos padrões rigorosos de sustentabilidade para que seu eletrônico contribua para um mundo mais consciente.</p>
            </div>
        </div>
    )
}

import Presente from '../main-imgs/ComoFunciona/presente.png'
import Truck from '../main-imgs/ComoFunciona/truck.png'
import Lupa from '../main-imgs/ComoFunciona/lupa.png'
import Selo from '../main-imgs/ComoFunciona/selo.png'
import Linha from '../main-imgs/ComoFunciona/linha.png'