export default function Cards() {
    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 px-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-3 md:mb-4">Eco Eletrônicos Sustentáveis</h2>
                <p className="text-green-600 max-w-2xl mx-auto text-sm sm:text-base px-2">Tecnologia de ponta com responsabilidade ambiental para um futuro mais verde</p>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                
                {/* Card 1 - Smartphone Recondicionado */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden group">
                    <div className="h-40 sm:h-44 md:h-48 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-3 sm:p-4 relative">
                        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            -30% CO₂
                        </div>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-green-200 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <span className="text-green-700 text-2xl sm:text-3xl md:text-4xl">📱</span>
                        </div>
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <h3 className="text-lg sm:text-xl font-bold text-green-900 leading-tight">Smartphone Recondicionado</h3>
                            <span className="bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-2 py-1 rounded-full whitespace-nowrap ml-2">Econômico</span>
                        </div>
                        
                        <p className="text-green-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                            Smartphone premium recondicionado com 90% menos impacto ambiental.
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Economia de CO₂:</span>
                                <span className="font-semibold text-green-800">30kg</span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Garantia:</span>
                                <span className="font-semibold text-green-800">12 meses</span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Estado:</span>
                                <span className="font-semibold text-green-800">Excelente</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="text-xl sm:text-2xl font-bold text-green-700">R$ 799,90</span>
                                <span className="text-xs sm:text-sm text-gray-500 line-through sm:ml-2">R$ 1.199,90</span>
                            </div>
                            <div className="flex text-amber-400 text-sm sm:text-base">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <span>Comprar Agora</span>
                            <span>♻️</span>
                        </button>
                    </div>
                </div>

                {/* Card 2 - Laptop Sustentável */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 overflow-hidden group">
                    <div className="h-40 sm:h-44 md:h-48 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-3 sm:p-4 relative">
                        <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Energia Solar
                        </div>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-amber-200 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <span className="text-amber-700 text-2xl sm:text-3xl md:text-4xl">💻</span>
                        </div>
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <h3 className="text-lg sm:text-xl font-bold text-green-900 leading-tight">Laptop Eco-Friendly</h3>
                            <span className="bg-amber-100 text-amber-700 text-xs sm:text-sm font-medium px-2 py-1 rounded-full whitespace-nowrap ml-2">Inovador</span>
                        </div>
                        
                        <p className="text-green-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                            Notebook com carregamento solar e materiais reciclados.
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Autonomia:</span>
                                <span className="font-semibold text-green-800">14h</span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Material:</span>
                                <span className="font-semibold text-green-800">85% Reciclado</span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Carregamento:</span>
                                <span className="font-semibold text-green-800">Solar</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="text-xl sm:text-2xl font-bold text-green-700">R$ 2.499,90</span>
                                <span className="text-xs sm:text-sm text-gray-500 line-through sm:ml-2">R$ 2.999,90</span>
                            </div>
                            <div className="flex text-amber-400 text-sm sm:text-base">
                                ⭐⭐⭐⭐☆
                            </div>
                        </div>
                        
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <span>Comprar Agora</span>
                            <span>🌞</span>
                        </button>
                    </div>
                </div>

                {/* Card 3 - Fones Reciclados */}
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 overflow-hidden group">
                    <div className="h-40 sm:h-44 md:h-48 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-3 sm:p-4 relative">
                        <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Zero Plástico
                        </div>
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-200 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-inner">
                            <span className="text-blue-700 text-2xl sm:text-3xl md:text-4xl">🎧</span>
                        </div>
                    </div>
                    
                    <div className="p-4 sm:p-5 md:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <h3 className="text-lg sm:text-xl font-bold text-green-900 leading-tight">Fones Biodegradáveis</h3>
                            <span className="bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium px-2 py-1 rounded-full whitespace-nowrap ml-2">Novo</span>
                        </div>
                        
                        <p className="text-green-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                            Fones com materiais biodegradáveis e som premium.
                        </p>
                        
                        <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Material:</span>
                                <span className="font-semibold text-green-800 text-right">Bambu & Bioplástico</span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Bateria:</span>
                                <span className="font-semibold text-green-800">40h</span>
                            </div>
                            <div className="flex justify-between text-xs sm:text-sm">
                                <span className="text-green-700">Decomposição:</span>
                                <span className="font-semibold text-green-800">2 anos</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="text-xl sm:text-2xl font-bold text-green-700">R$ 299,90</span>
                                <span className="text-xs sm:text-sm text-gray-500 line-through sm:ml-2">R$ 399,90</span>
                            </div>
                            <div className="flex text-amber-400 text-sm sm:text-base">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                        
                        <button className="mt-[44px] w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                            <span>Comprar Agora</span>
                            <span>🌿</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Footer da seção */}
            <div className="text-center mt-8 md:mt-12 px-2">
                <div className="bg-green-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-green-200">
                    <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">🌍 Impacto Ambiental Positivo</h3>
                    <p className="text-green-600 text-sm sm:text-base">
                        Cada produto adquirido evita que <span className="font-semibold">5kg de lixo eletrônico</span> 
                        polua o meio ambiente
                    </p>
                </div>
            </div>
        </div>
    )
}