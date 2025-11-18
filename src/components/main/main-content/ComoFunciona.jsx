
export default function ComoFunciona() {
    return (
        <div id="ComoFunciona" className='comofuncionaresponsividade pt-[150px] pb-12 md:pb-[100px] flex flex-col items-center bg-[#F2F9FF]'>
            <h1 className='inter text-3xl md:text-[36px] font-bold text-center'>Como Funciona o Ciclo de Reciclagem</h1>
            <p className='text-center max-w-full md:max-w-[582px] inter text-sm md:text-[16px] font-medium mt-4'>Nosso processo é simples, transparente e eficiente. Acompanhe cada etapa da transformação dos seus eletrônicos em produtos sustentáveis.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto mt-8 md:mt-[40px] mb-8 md:mb-[40px] px-4'>
                <div className='rounded-[20px] bg-white w-full flex flex-col items-center justify-center pt-6 md:pt-[21px] pb-6 md:pb-[21px] px-4'>
                    <img src="/main-imgs/ComoFunciona/presente.png" alt="" className='w-16 md:w-auto' />
                    <p className='mt-4 md:mt-[20px] inter text-xs md:text-[14px] text-[#7E7E7E]'>PASSO 1</p>
                    <h1 className='mt-4 md:mt-[20px] text-base md:text-[18px] font-bold inter text-center'>Doação</h1>
                    <p className='mt-4 md:mt-[20px] text-center text-base md:text-[18px] font-medium text-[#000] inter'>Usuários cadastram e doam seus eletrônicos antigos através da plataforma, informando detalhes sobre o estado dos dispositivos.</p>
                </div>
                <div className='rounded-[20px] bg-white w-full flex flex-col items-center justify-center pt-6 md:pt-[21px] pb-6 md:pb-[21px] px-4'>
                    <img src="/main-imgs/ComoFunciona/truck.png" alt="" className='w-16 md:w-auto' />
                    <p className='mt-4 md:mt-[20px] inter text-xs md:text-[14px] text-[#7E7E7E]'>PASSO 2</p>
                    <h1 className='mt-4 md:mt-[20px] text-base md:text-[18px] font-bold inter text-center'>Coleta</h1>
                    <p className='text-center mt-4 md:mt-[20px] text-base md:text-[18px] font-medium text-[#000] inter'>Coletores parceiros retiram os dispositivos nos pontos de coleta ou diretamente na residência dos doadores.</p>
                </div>
                <div className='rounded-[20px] bg-white w-full flex flex-col items-center justify-center pt-6 md:pt-[21px] pb-6 md:pb-[21px] px-4'>
                    <img src="/main-imgs/ComoFunciona/Lupa.png" alt="" className='w-16 md:w-auto' />
                    <p className='mt-4 md:mt-[20px] inter text-xs md:text-[14px] text-[#7E7E7E]'>PASSO 3</p>
                    <h1 className='text-center mt-4 md:mt-[20px] text-base md:text-[18px] font-bold inter'>Avaliação e Transformação</h1>
                    <p className='text-center mt-4 md:mt-[20px] text-base md:text-[18px] font-medium text-[#000] inter'>Os eletrônicos são avaliados, desmontados e seus componentes são transformados em novos produtos sustentáveis.</p>
                </div>
                <div className='rounded-[20px] bg-white w-full flex flex-col items-center justify-center pt-6 md:pt-[21px] pb-6 md:pb-[21px] px-4'>
                    <img src="/main-imgs/ComoFunciona/selo.png" alt="" className='w-16 md:w-auto' />
                    <p className='mt-4 md:mt-[20px] inter text-xs md:text-[14px] text-[#7E7E7E]'>PASSO 4</p>
                    <h1 className='mt-4 md:mt-[20px] text-base md:text-[18px] font-bold inter text-center'>Venda e Recompensas</h1>
                    <p className='text-center mt-4 md:mt-[20px] text-base md:text-[18px] font-medium text-[#000] inter'>Produtos finais são vendidos na plataforma e todos os participantes recebem recompensas baseadas em sua contribuição.</p>
                </div>
            </div>
            <div className='w-full max-w-[870px] flex flex-col items-center p-6 md:p-2 md:pr-[60px] md:pl-[60px] bg-white rounded-[20px]'>
                <h1 className='inter text-2xl md:text-[32px] font-bold text-center'>Transparência Total</h1>
                <p className='text-center max-w-full md:max-w-[807px] inter text-base md:text-[20px] font-medium mt-4'>Nosso sistema garante que cada doação seja registrada e tratada com responsabilidade. Do descarte à transformação, seguimos padrões rigorosos de sustentabilidade para que seu eletrônico contribua para um mundo mais consciente.</p>
            </div>
        </div>
    )
}