import React, { useState, useEffect } from 'react';

const FloatingAlertCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cont, setCont] = useState(15); // Timer inicial 15s

  // Efeito pro contador (só roda quando card visível)
  useEffect(() => {
    if (!isVisible) return; // Não roda se card escondido

    const intervalo = setInterval(() => {
      setCont((prevCont) => {
        const novoCont = prevCont - 1;
        if (novoCont < 1) {
          setIsVisible(false); // Esconde quando <1
        }
        return novoCont;
      });
    }, 1000); // Decrementa a cada 1s

    return () => clearInterval(intervalo); // Cleanup pra evitar leaks
  }, [isVisible]); // Depende de isVisible

  const handleShow = () => {
    setCont(15); // Reseta contador pra 15 toda vez que mostra
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {/* Botão sempre visível, fixo */}
      <button
        onClick={handleShow} // Mostra o card no clique
        className="fixed bottom-4 right-4 z-50 
                   flex items-center justify-center w-[40px] h-[40px] rounded-full 
                   bg-gradient-to-br from-yellow-400 to-yellow-500 
                   shadow-lg border border-yellow-600 
                   hover:scale-110 hover:bg-yellow-600 
                   active:bg-yellow-700 active:scale-95 
                   transition-all duration-200 ease-in-out"
      >
        <h1 className="font-extrabold text-[24px] text-black">!</h1>
      </button>

      {/* Card condicional: só renderiza se visível */}
      {isVisible && (
        <div
          id="CardInfo"
          className="border-r-4 border-yellow-400 fixed bottom-5 right-5 z-50 p-6 max-w-sm rounded-xl shadow-2xl bg-white  opacity-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: isVisible ? 1 : 0 }} // Fade-in suave
          role="alert"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-[21px] text-gray-800">
                !Aviso Importante!
              </h3>
              <div className="flex items-center justify-center">
                <p className="mr-2 text-[15px] text-[#0000008c]">{cont}</p>
                <button
                  onClick={handleClose}
                  className="text-gray-500 text-[27px] hover:text-gray-700 mb-2 focus:outline-none"
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-[18px] leading-relaxed">
              O conteúdo deste site é de natureza fictícia. Nenhuma informação
              apresentada deve ser interpretada como fato ou relacionada a eventos e
              entidades reais.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAlertCard;