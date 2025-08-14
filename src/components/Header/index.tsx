import { HeaderContainer } from "./styles"
import Tomato from "../../assets/tomato.svg"
import { NavLink } from "react-router-dom"
import {Timer, Scroll} from 'phosphor-react'

function Header() {
    return (
        <HeaderContainer>
            <img src={Tomato} alt="Imagem Pomodoro Tomato" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}

export default Header