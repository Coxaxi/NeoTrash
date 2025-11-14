import Home from './main-content/Home'
import Sobre from './main-content/Sobre'
import ComoFunciona from './main-content/ComoFunciona'
import Coleta from './main-content/Coleta'
import Rewards from './main-content/Rewards'
import Produtos from './main-content/Produtos'
import Impacto from './main-content/Impacto'  

function main () {
  return (
    <>
      <main className='bg-white pt-[96px] '>
        <Home />

        <Sobre />

        <ComoFunciona />

        <Coleta />

        <Rewards />

        <Produtos />

        <Impacto />
      </main>
    </>
  );
}

export default main;