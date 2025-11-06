import "./Style.css"

export default function Cards() {
  return (
  <div className="place-items-center grid grid-cols-2 gap-16">
    <div className="container card first-line:pl-[36px] pr-[36px] p-3 rounded-[15px] bg-white w-[472px] h-[425px] flex flex-col items-center">
      <img src={presente} alt="🎁" />
      <h1 className="inter text-center text-[24px] font-bold">Descontos Exclusivos</h1>
      <p className="mt-[12px] inter text-center  text-[20px]  text-[#000]">Ganhe descontos de até 50% em produtos sustentáveis da nossa loja parceira</p>
      <div className="mt-[12px] bg-[#D9D9D9] rounded-[20px] w-[384px] h-[100px]  pt-[20px] pb-[25px] flex flex-col items-center"> 
        <p className=" inter text-[20px] text-center">Necessário:</p>
        <h1 className=" inter text-[24px] font-bold text-center">100 pontos</h1>
      </div>
      <div className="btn flex items-center mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC]  rounded-[20px] w-[384px] h-[65px] inter text-white text-[24px] ">
      <h1 className=" m-auto text-center">Saiba Mais</h1>
      </div>
    </div>

    <div className="container card first-line:pl-[36px] pr-[36px] p-3 rounded-[15px] bg-white w-[472px] h-[425px] flex flex-col items-center">
    <img src={raio} alt="⚡" />
    <h1 className="inter text-center text-[24px] font-bold">Acesso Antecipado</h1>
    <p className="mt-[12px] inter text-center  text-[20px]  text-[#000]">Seja o primeiro a ver novos produtos e funcionalidades da plataforma</p>
    <div className="mt-[12px] bg-[#D9D9D9] rounded-[20px] w-[384px] h-[100px]  pt-[20px] pb-[25px] flex flex-col items-center"> 
      <p className=" inter text-[20px] text-center">Necessário:</p>
      <h1 className=" inter text-[24px] font-bold text-center">300 pontos</h1>
    </div>
    <div className="btn flex items-center mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC]  rounded-[20px] w-[384px] h-[65px] inter text-white text-[24px] ">
    <h1 className=" m-auto text-center">Saiba Mais</h1>
    </div>
    </div>

    <div className=" container card first-line:pl-[36px] pr-[36px] p-3 rounded-[15px] bg-white w-[472px] h-[425px] flex flex-col items-center">
    <img src={profle} alt="✔" />
    <h1 className="inter text-center text-[24px] font-bold">Eventos Exclusivos</h1>
    <p className="mt-[12px] inter text-center  text-[20px]  text-[#000]">Convide para workshops e eventos sobre sustentabilidade e tecnologia</p>
    <div className="mt-[12px] bg-[#D9D9D9] rounded-[20px] w-[384px] h-[100px]  pt-[20px] pb-[25px] flex flex-col items-center"> 
      <p className=" inter text-[20px] text-center">Necessário:</p>
      <h1 className=" inter text-[24px] font-bold text-center">200 pontos</h1>
    </div>
    <div className="btn flex items-center mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC]  rounded-[20px] w-[384px] h-[65px] inter text-white text-[24px] ">
    <h1 className=" m-auto text-center">Saiba Mais</h1>
    </div>
    </div>

    <div className=" container card first-line:pl-[36px] pr-[36px] p-3 rounded-[15px] bg-white w-[472px] h-[425px] flex flex-col items-center">
    <img src={coracao} alt="✔" />
    <h1 className="inter text-center text-[24px] font-bold">Impacto Ambiental</h1>
    <p className="mt-[12px] inter text-center  text-[20px]  text-[#000]">Certificado personalizado do seu impacto positivo no meio ambiente</p>
    <div className="mt-[12px] bg-[#D9D9D9] rounded-[20px] w-[384px] h-[100px]  pt-[20px] pb-[25px] flex flex-col items-center"> 
      <p className=" inter text-[20px] text-center">Necessário:</p>
      <h1 className=" inter text-[24px] font-bold text-center">150 pontos</h1>
    </div>
    <div className="btn flex items-center mt-[12px] bg-gradient-to-r from-[#8E35EA] to-[#376DEC]  rounded-[20px] w-[384px] h-[65px] inter text-white text-[24px] ">
    <h1 className=" m-auto text-center">Saiba Mais</h1>
    </div>
    </div>
  </div>
  );
}

import presente from './imgs/presente.png';
import coracao from './imgs/coracao.png';
import profle from './imgs/profile.png';
import raio from './imgs/raio.png';