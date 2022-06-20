import React from "react";
import sytle from './Botao.module.scss'

class Botao extends React.Component<{ type?: "button" | "submit" | "reset" | undefined , children: string }>{
    render() {
        const { type = 'button' } = this.props
        return(
            <button type={type} className={sytle.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;