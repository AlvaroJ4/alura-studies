import React from "react";
import sytle from './Botao.module.scss'

class Botao extends React.Component<{ children: string }>{
    render() {
        return(
            <button className={sytle.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;