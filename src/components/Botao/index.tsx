import React from "react";
import sytle from './Botao.module.scss'

class Botao extends React.Component{
    render() {
        return(
            <button className={sytle.botao}>
                Botao
            </button>
        )
    }
}

export default Botao;