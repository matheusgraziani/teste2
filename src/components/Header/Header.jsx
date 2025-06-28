import Link from 'next/link'

function Header () {
  return (
    <nav> 

    <Link href="/pages/inicial" >Inicio</Link>
    <hr />
    <Link href="/pages/contato" >Contato</Link> 
    <hr />
    <Link href="/pages/galeria" >Galeria</Link> 
    <hr />
    <Link href="/" > Menu</Link>
    </nav>
  )
}

export default Header
