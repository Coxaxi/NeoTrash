import Trash from './imgs/footer/trash.png'
import Face from './imgs/footer/face.png'
import Linke from './imgs/footer/linke.png'
import Insta from './imgs/footer/insta.png'
import Twiter from './imgs/footer/Twiter.png'

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-white">
            <div className="pt-10 pb-5 container mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8">
                {/* Grid principal: 1 coluna em mobile, 2 em sm, 3 em md, 4 em lg */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">

                    {/* Branding / descrição */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start">
                            <img src={Trash} alt="NeoTrash logo" className="w-8 sm:w-9 md:w-10 mr-3 md:mr-5" />
                            <h1 className="bg-gradient-to-r from-[#4BDC84] to-[#60A7F6] bg-clip-text text-transparent text-2xl md:text-3xl font-bold LeagueAs">NeoTrash</h1>
                        </div>

                        <p className="LeagueAs text-sm sm:text-base md:text-[18px] font-light text-[#FFFF] mt-4 max-w-xl">
                            Transformando eletrônicos em sustentabilidade através de um ciclo
                            inteligente de reciclagem que conecta pessoas, tecnologia e meio ambiente.
                        </p>

                        <h2 className="inter text-sm md:text-[18px] text-[#56D77C] mt-6 md:mt-8">Feito com amor pelo planeta</h2>
                    </div>

                    {/* Links rápidos */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="LeagueAs font-bold text-lg md:text-xl text-[#FFFF]">Links Rápidos</h3>
                        <ul className="flex flex-col items-center md:items-start mt-4 space-y-3">
                            {['Home','Sobre','Como Funciona','Pontos de Coleta','Produtos','Parceiros','Contato'].map((item) => (
                                <li key={item} className="LeagueAs text-base md:text-[18px] font-light">
                                    <a href={`#${item.replace(/\s+/g,'')}`} className="inline-block px-2 py-1 hover:opacity-90">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contato / redes */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 id="contato" className="LeagueAs font-bold text-lg md:text-xl text-[#FFFF]">Contato</h3>

                        <p className="LeagueAs text-sm md:text-[18px] font-light mt-3">contato@neotrash.com.br</p>
                        <p className="LeagueAs text-sm md:text-[18px] font-light mt-2">(55) 99999-9999</p>
                        <p className="LeagueAs text-sm md:text-[18px] font-light mt-2">Brumado, BA - Brasil</p>

                        <p className="LeagueAs font-medium text-sm md:text-[18px] mt-3">Siga-nos</p>

                        <div className="flex items-center gap-3 mt-3 md:mt-4 flex-wrap justify-center md:justify-start">
                            <a href="#" aria-label="Facebook">
                                <img src={Face} alt="Facebook" className="h-8 sm:h-10 md:h-12 rounded-lg" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <img src={Insta} alt="Instagram" className="h-8 sm:h-10 md:h-12 rounded-lg" />
                            </a>
                            <a href="#" aria-label="Twitter / X">
                                <img src={Twiter} alt="Twitter" className="h-8 sm:h-10 md:h-12 rounded-lg" />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <img src={Linke} alt="LinkedIn" className="h-8 sm:h-10 md:h-12 rounded-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="LeagueAs font-bold text-lg md:text-xl text-[#FFFF]">Newsletter</h3>

                        <p className="LeagueAs text-sm md:text-[18px] mt-3 max-w-sm">Receba novidades sobre sustentabilidade e nossos projetos</p>

                        <label htmlFor="newsletter" className="sr-only">Seu e-mail</label>
                        <input
                            id="newsletter"
                            type="email"
                            placeholder="Seu e-mail"
                            className="mt-3 w-full sm:w-[320px] md:w-[240px] h-12 bg-[#374151] border border-[#3f3f3f] text-white text-sm rounded-lg px-4 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            id="btn1"
                            className="btnEfect w-full sm:w-[320px] md:w-[240px] h-12 mt-3 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4BDC84]/20 to-[#60A7F6]/20"
                        >
                            <span className="text-base md:text-[16px] font-semibold text-[#FFFF]">Inscrever-se</span>
                        </button>

                        <p className="LeagueAs text-sm md:text-[16px] mt-3 max-w-sm">Ao se inscrever, você concorda com nossa política de privacidade</p>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-[#283548] mt-8 md:mt-12"></div>

                {/* Rodapé inferior */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-6 md:mt-8">
                    <p className="LeagueAs text-sm md:text-[14px] text-[#979797] text-center md:text-left">© 2025 NeoTrash. Todos os direitos reservados.</p>

                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
                        <a href="#" className="LeagueAs text-sm md:text-[14px] text-[#979797]">Política de Privacidade</a>
                        <a href="#" className="LeagueAs text-sm md:text-[14px] text-[#979797]">Termos de Uso</a>
                        <a href="#" className="LeagueAs text-sm md:text-[14px] text-[#979797]">Cookies</a>
                    </div>
                </div>

                {/* Banner final */}
                <div className="mt-6 md:mt-8 w-full bg-[#0f1720] rounded-lg p-4 md:p-5 flex items-center justify-center">
                    <p className="text-sm md:text-[16px] font-semibold text-[#ccffe6] text-center">🍃Cada eletrônico reciclado através do NeoTrash contribui para um planeta mais sustentável</p>
                </div>
            </div>
        </footer>
    )
}
