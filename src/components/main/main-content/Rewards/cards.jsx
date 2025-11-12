import "./Style.css"
import presente from './imgs/presente.png';
import coracao from './imgs/coracao.png';
import profle from './imgs/profile.png';
import raio from './imgs/raio.png';

export default function Cards() {
  return (
  <div className="rewardscardsresponsividade place-items-center grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4 md:px-0">
    <div className="container card pl-6 md:pl-[36px] pr-6 md:pr-[36px] py-6 md:p-3 rounded-[15px] bg-white w-full max-w-[472px] min-h-[auto] md:h-[425px] flex flex-col items-center">
      <img src={presente} alt="🎁" className="w-12 md:w-auto" />
      <h1 className="inter text-center text-xl md:text-[24px] font-bold mt-4">Descontos Exclusivos</h1>
      <p className="mt-3 md:mt-[12px] inter text-center text-base md:text-[20px] text-[#000]">Ganhe descontos de até 50% em produtos sustentáveis da nossa loja parceira</p>
      <div className="mt-3 md:mt-[12px] bg-[#D9D9D9] rounded-[20px] w-full max-w-[384px] h-auto md:h-[100px] pt-4 md:pt-[20px] pb-4 md:pb-[25px] flex flex-col items-center"> 
        <p className="inter text-base md:text-[20px] text-center">Necessário:</p>
        <h1 className="inter text-xl md:text-[24px] font-bold text-center">100 pontos</h1>
      </div>
      <div className="btn flex items-center mt-3 md:mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC] rounded-[20px] w-full max-w-[384px] h-auto md:h-[65px] inter text-white text-lg md:text-[24px] py-4 md:py-0">
      <h1 className="m-auto text-center">Saiba Mais</h1>
      </div>
    </div>

    <div className="container card pl-6 md:pl-[36px] pr-6 md:pr-[36px] py-6 md:p-3 rounded-[15px] bg-white w-full max-w-[472px] min-h-[auto] md:h-[425px] flex flex-col items-center">
    <img src={raio} alt="⚡" className="w-12 md:w-auto" />
    <h1 className="inter text-center text-xl md:text-[24px] font-bold mt-4">Acesso Antecipado</h1>
    <p className="mt-3 md:mt-[12px] inter text-center text-base md:text-[20px] text-[#000]">Seja o primeiro a ver novos produtos e funcionalidades da plataforma</p>
    <div className="mt-3 md:mt-[12px] bg-[#D9D9D9] rounded-[20px] w-full max-w-[384px] h-auto md:h-[100px] pt-4 md:pt-[20px] pb-4 md:pb-[25px] flex flex-col items-center"> 
      <p className="inter text-base md:text-[20px] text-center">Necessário:</p>
      <h1 className="inter text-xl md:text-[24px] font-bold text-center">300 pontos</h1>
    </div>
    <div className="btn flex items-center mt-3 md:mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC] rounded-[20px] w-full max-w-[384px] h-auto md:h-[65px] inter text-white text-lg md:text-[24px] py-4 md:py-0">
    <h1 className="m-auto text-center">Saiba Mais</h1>
    </div>
    </div>

    <div className="container card pl-6 md:pl-[36px] pr-6 md:pr-[36px] py-6 md:p-3 rounded-[15px] bg-white w-full max-w-[472px] min-h-[auto] md:h-[425px] flex flex-col items-center">
    <img src={profle} alt="✔" className="w-12 md:w-auto" />
    <h1 className="inter text-center text-xl md:text-[24px] font-bold mt-4">Eventos Exclusivos</h1>
    <p className="mt-3 md:mt-[12px] inter text-center text-base md:text-[20px] text-[#000]">Convide para workshops e eventos sobre sustentabilidade e tecnologia</p>
    <div className="mt-3 md:mt-[12px] bg-[#D9D9D9] rounded-[20px] w-full max-w-[384px] h-auto md:h-[100px] pt-4 md:pt-[20px] pb-4 md:pb-[25px] flex flex-col items-center"> 
      <p className="inter text-base md:text-[20px] text-center">Necessário:</p>
      <h1 className="inter text-xl md:text-[24px] font-bold text-center">200 pontos</h1>
    </div>
    <div className="btn flex items-center mt-3 md:mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC] rounded-[20px] w-full max-w-[384px] h-auto md:h-[65px] inter text-white text-lg md:text-[24px] py-4 md:py-0">
    <h1 className="m-auto text-center">Saiba Mais</h1>
    </div>
    </div>

    <div className="container card pl-6 md:pl-[36px] pr-6 md:pr-[36px] py-6 md:p-3 rounded-[15px] bg-white w-full max-w-[472px] min-h-[auto] md:h-[425px] flex flex-col items-center">
    <img src={coracao} alt="✔" className="w-12 md:w-auto" />
    <h1 className="inter text-center text-xl md:text-[24px] font-bold mt-4">Impacto Ambiental</h1>
    <p className="mt-3 md:mt-[12px] inter text-center text-base md:text-[20px] text-[#000]">Certificado personalizado do seu impacto positivo no meio ambiente</p>
    <div className="mt-3 md:mt-[12px] bg-[#D9D9D9] rounded-[20px] w-full max-w-[384px] h-auto md:h-[100px] pt-4 md:pt-[20px] pb-4 md:pb-[25px] flex flex-col items-center"> 
      <p className="inter text-base md:text-[20px] text-center">Necessário:</p>
      <h1 className="inter text-xl md:text-[24px] font-bold text-center">150 pontos</h1>
    </div>
    <div className="btn flex items-center mt-3 md:mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC] rounded-[20px] w-full max-w-[384px] h-auto md:h-[65px] inter text-white text-lg md:text-[24px] py-4 md:py-0">
    <h1 className="m-auto text-center">Saiba Mais</h1>
    </div>
    </div>
  </div>
  );
}