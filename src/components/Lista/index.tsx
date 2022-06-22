import style from './Lista.module.scss';
import Item from "./Item";
import { ITarefa } from '../../types/tarefa';


interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) =>  void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
   
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                    selecionaTarefa= {selecionaTarefa}
                      key={item.id}
                      {...item} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;

// caso voce coloque '{}' no map voce vai estar dizendo que quer criar um escopo para essa função
// se voce colocar '()' é porque voce que retorna um array, isso retorna os itens como esperado!
// useState retorna um array para que possamos desestruturar e pegar os valores de forma simples, apenas utilizando.