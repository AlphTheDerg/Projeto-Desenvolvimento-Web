import Navigation from './Navigation'
 
interface HeaderProps {
  titulo: string
}
 
function Header({ titulo }: HeaderProps) {
  return (
    <header className="header">
      <h1>{titulo}</h1>
      <Navigation />
    </header>
  )
}
 
export default Header
 