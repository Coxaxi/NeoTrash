export default function Footer() {
    return (
        <div className="pb-[50px] bg-[#111827] flex flex-col items-center">
            <div className='pt-[94px] pl-[82px] grid grid-cols-4 gap-16'>
                <div>
                    <div className='flex items-center'>
                        <img src={Trash} alt="🗑" className='mr-[20px]' />
                        <h1 className='bg-gradient-to-r from-[#4BDC84] to-[#60A7F6] bg-clip-text text-transparent text-[33px] font-bold LeagueAs '>NeoTrash</h1>
                    </div>

                    <p className='LeagueAs text-[20px] font-light text-[#FFFF] max-w-[289px] mt-[33px]'>
                        Transformando eletrônicos em
                        sustentabilidade através de um ciclo
                        inteligente de reciclagem que
                        conecta pessoas, tecnologia e meio
                        ambiente.
                    </p>

                    <h1 className='inter text-[24px] text-[#56D77C] mt-[110px]'>Feito com amor pelo planeta</h1>
                </div>

                <div>
                    <h1 className='LeagueAs font-bold text-[24px] text-[#FFFF]'>Links Rápidos</h1>

                    <ul>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[35px] text-[#FFFF]' onClick={() => document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })}>Home</li>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[19px] text-[#FFFF]' onClick={() => document.getElementById('Sobre')?.scrollIntoView({ behavior: 'smooth' })}>Sobre</li>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[19px] text-[#FFFF]' onClick={() => document.getElementById('ComoFunciona')?.scrollIntoView({ behavior: 'smooth' })}>Como Funciona</li>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[19px] text-[#FFFF]' onClick={() => document.getElementById('Coleta')?.scrollIntoView({ behavior: 'smooth' })}>Pontos de Coleta</li>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[19px] text-[#FFFF]' onClick={() => document.getElementById('Produtos')?.scrollIntoView({ behavior: 'smooth' })}>Produtos</li>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[19px] text-[#FFFF]' onClick={() => document.getElementById('Parceiros')?.scrollIntoView({ behavior: 'smooth' })}>Parceiros</li>
                        <li className='btnDefault LeagueAs font-light text-[20px] mt-[19px] text-[#FFFF]' onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>Contato</li>
                    </ul>
                </div>

                <div>
                    <h1 id='contato' className='LeagueAs font-bold text-[24px] text-[#FFFF]'>Contato</h1>

                    <p className='btnDefault LeagueAs font-light text-[20px] mt-[35px] text-[#FFFF]'>contato@neotrash.com.br</p>
                    <p className='btnDefault LeagueAs font-light text-[20px] mt-[35px] text-[#FFFF]'>(55) 99999-9999</p>
                    <p className='LeagueAs font-light text-[20px] mt-[35px] text-[#FFFF]'>Brumado, BA - Brasil</p>
                    <p className='LeagueAs font-medium text-[20px] mt-[35px] text-[#FFFF]'>Siga-nos</p>

                    <div className='flex mt-14'>
                        <img className=' mr-2 h-[50px] rounded-[10px] btnDefault' src={Face} alt="F" />
                        <img className=' ml-2 h-[50px] rounded-[10px] btnDefault' src={Insta} alt="I" />
                        <img className=' ml-2 h-[50px] rounded-[10px] btnDefault' src={Twiter} alt="X" />
                        <img className=' ml-2 h-[50px] rounded-[10px] btnDefault' src={Linke} alt="In" />

                    </div>
                </div>

                <div>
                    <h1 className='LeagueAs font-bold text-[24px] text-[#FFFF]'>Newsletter</h1>

                    <p className='LeagueAs font-light text-[20px] max-w-[218px] mt-[20px] text-[#FFFF]'>Receba novidades sobre
                        sustentabilidade e nossos projetos</p>

                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        class="
                        mt-[30px]
                        mb-5
                        w-[239px] 
                        h-[50px] 
                        bg-[#374151] 
                        border 
                        border-[#3f3f3f] 
                        text-white 
                        text-[16px] 
                        rounded-lg 
                        px-4 
                        placeholder:text-gray-400 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-500
  "
                    />

                    <div
                        id="btn1"
                        className="btnEfect w-[239px] h-[51px] flex justify-center items-center flex-col"
                    >
                        <h2 className="text-[20px] font-semibold text-[#FFFF]">Inscrever-se</h2>
                    </div>

                    <p className='LeagueAs font-light text-[20px] max-w-[250px] mt-[30px] text-[#FFFF]'>Ao se inscrever, você concorda com nossa política
                        de privacidade</p>
                </div>
            </div>



            <div className='w-auto'>
                <div className='max-w-[2000px] m-auto mt-[100px] mb-[60px] h-[2px] w-auto bg-[#283548]'>
                </div>

                <div class="flex justify-between max-w-[1600px] w-auto ">
                    <div>
                        <p class="LeagueAs text-[16px] text-[#979797] mr-[700px]">© 2025 NeoTrash. Todos os direitos reservados.</p>
                    </div>

                    <div class="flex space-x-[30px] ">
                        <a href="#" class="LeagueAs text-[16px] text-[#979797]">Política de Privacidade</a>
                        <a href="#" class="LeagueAs text-[16px] text-[#979797]">Termos de Uso</a>
                        <a href="#" class="LeagueAs text-[16px] text-[#979797]">Cookies</a>
                    </div>
                </div>
            </div>


            <div
           
                className="btn3 btnEfect mt-[36px] w-[1287px] h-[65px] flex justify-center items-center flex-col"
            >
                <h2 className="text-[20px] font-semibold text-[#ccffe6]">🍃Cada eletrônico reciclado através do NeoTrash contribui para um planeta mais sustentável</h2>
            </div>

        </div>
    );
}

import Trash from './imgs/footer/trash.png'
import Face from './imgs/footer/face.png'
import Linke from './imgs/footer/linke.png'
import Insta from './imgs/footer/insta.png'
import Twiter from './imgs/footer/Twiter.png'


