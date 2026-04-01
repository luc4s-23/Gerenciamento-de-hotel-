import './FormQuarto.css'
import Popup from 'reactjs-popup';
import Botao from '../../../Components/Botao/Botao';
import { useForm } from 'react-hook-form';
import { cadastraQuarto } from '../../../Services/QuartoService';

function FormQuarto({ isOpen, onClose, onSalvar }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const aoEnviar = async (dados) => {
        console.log("dados para api", dados);
        try {
            await cadastraQuarto(dados);
            if (onSalvar) {

                onSalvar();
            }
            onClose();
        } catch (err) {
            console.error("Falha ao salvar", err);
        }
    };


    return (
        <Popup className='popup-quarto' open={isOpen} modal onClose={onClose}>
            <form className="form-quarto" onSubmit={handleSubmit(aoEnviar)}>
                <h1>Cadastrar novo quarto</h1>
                <hr />
                <input {...register("Numero_quarto", {required: true})} type='text' placeholder='Número quarto'/>
                <input {...register("tipo", { valueAsNumber: true })} type='number' placeholder='Tipo do quarto' />
                <input {...register("Capacidade", { valueAsNumber: true })} type='number' placeholder='Capacidade do quarto' />
                <input {...register("Preco_diaria", { valueAsNumber: true })} type='number' step="0.01" placeholder='Valor diária' />
                <input {...register("Descricao", {required: true})} type='text' placeholder='Descrição do quarto'/>
                <Botao classe={'verde'} children={'Cadastrar'} className='btn-pop-novo-quarto' />
            </form>
        </Popup>
    );
}

export default FormQuarto;