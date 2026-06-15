import Swal from 'sweetalert2';

const Mensagem = {

    sucesso: (mensagem) => {
        Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: mensagem,
            confirmButtonColor: '#1976d2'
        });
    },

    erro: (mensagem) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: mensagem,
            confirmButtonColor: '#d32f2f'
        });
    },
};

export default Mensagem;