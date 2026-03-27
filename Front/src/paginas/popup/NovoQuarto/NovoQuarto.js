import './NovoQuarto.css'
import Popup from 'reactjs-popup';
import Botao from '../../../Components/Botao/Botao';

function NovoQuarto({ isOpen, onClose }) {
    return (
        <Popup className='popup-quarto' open={isOpen} modal onClose={onClose}>
            <div role='dialog' className='container-popup'>
                <h1>Cadastrar novo quarto</h1>
                <hr/>
                <input placeholder='Número do quarto'></input>
                <input placeholder='Tipo'></input>
                <input placeholder='Capacidade'></input>
                <input placeholder='Valor da diária'></input>
                <input placeholder='Descrição'></input>
                <Botao classe={'verde'} children={'Cadastrar'} className='btn-pop-novo-quarto' />
            </div>
        </Popup>
    );
}

export default NovoQuarto;