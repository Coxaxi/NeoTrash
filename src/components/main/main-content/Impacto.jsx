// Os imports de 'u', 'd', 't', 'q' foram removidos daqui

export default function Impacto() {
  return (
    <div
      id="Parceiros"
      className="pt-16 md:pt-[150px] bg-gradient-to-b from-green-50 to-white flex flex-col items-center px-4 md:px-8"
    >
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
        <h1 className="mb-4 md:mb-6 text-3xl md:text-5xl font-bold text-green-900">
          Parceiros e Impacto
        </h1>
        <p className="text-lg md:text-2xl text-green-700 leading-relaxed">
          Juntos, estamos criando um futuro mais sustentável. Conheça nossos
          parceiros e veja o impacto positivo que estamos gerando no meio
          ambiente.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20 w-full max-w-6xl">
        {[
          // --- 👇 MUDANÇAS AQUI 👇 ---
          { icon: "/main-imgs/impacto-img/u.png", value: "2.5 toneladas", label: "Resíduos Transformados" },
          { icon: "/main-imgs/impacto-img/d.png", value: "1,250+", label: "Participantes Ativos" },
          { icon: "/main-imgs/impacto-img/t.png", value: "3.2+ toneladas", label: "CO² Evitado" },
          { icon: "/main-imgs/impacto-img/q.png", value: "100+", label: "Produtos Criados" }
          // --- 👆 MUDANÇAS AQUI 👆 ---
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center group hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              {/* Esta linha agora funciona, pois 'stat.icon' é a string de caminho correta */}
              <img src={stat.icon} alt="" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-2">{stat.value}</h3>
            <p className="text-green-600 font-medium text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Impact Banner */}
      <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-r from-green-600 to-blue-600 mb-16 md:mb-20 overflow-hidden">
        <div className="p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
            Impacto Ambiental Positivo
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 max-w-4xl mx-auto text-white leading-relaxed">
            Através do NeoTrash, promovemos a economia circular e contribuímos
            significativamente para a redução do lixo eletrônico, transformando resíduos
            em recursos valiosos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {[
              { value: "85%", label: "Redução de Resíduos" },
              { value: "+95%", label: "Reaproveitamento" },
              { value: "99%+", label: "Eficiência no Processo" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg">
                  {item.value}
                </div>
                <p className="text-lg md:text-xl font-medium text-green-100">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full max-w-6xl mb-16 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-green-900 text-center mb-8 md:mb-16">
          Nossos Parceiros
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              name: "EcoTech Solutions", 
              type: "Empresa de Tecnologia", 
              description: "Líder em soluções sustentáveis para o setor tecnológico",
              color: "from-green-500 to-green-600"
            },
            { 
              name: "Universidade Verde", 
              type: "Instituição de Ensino", 
              description: "Centro de pesquisa em sustentabilidade e inovação",
              color: "from-blue-500 to-blue-600"
            },
            { 
              name: "ONG Planeta Limpo", 
              type: "Organização Social", 
              description: "Dedicada à preservação ambiental e educação ecológica",
              color: "from-emerald-500 to-emerald-600"
            },
            { 
              name: "GreenCorp Industries", 
              type: "Indústria Sustentável", 
              description: "Pioneira em processos industriais ecológicos",
              color: "from-teal-500 to-teal-600"
            },
            { 
              name: "Instituto EcoFuturo", 
              type: "Centro de Pesquisa", 
              description: "Pesquisa e desenvolvimento em tecnologias verdes",
              color: "from-cyan-500 to-cyan-600"
            },
            { 
              name: "Fundação Terra Verde", 
              type: "Fundação", 
              description: "Promove ações de impacto ambiental positivo",
              color: "from-lime-500 to-lime-600"
            }
          ].map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:transform hover:-translate-y-2">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${partner.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">{(partner.name[0] + partner.name[1]).toUpperCase()}</span>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">{partner.name}</h3>
              <p className="text-green-600 font-semibold mb-3">{partner.type}</p>
              <p className="text-gray-700 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Seja Nosso Parceiro
        </h2>
        <p className="text-lg md:text-xl text-green-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Junte-se ao movimento de sustentabilidade e faça parte da transformação que está mudando a forma como lidamos com eletrônicos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Tornar-se Parceiro
          </button>
          <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  )
}