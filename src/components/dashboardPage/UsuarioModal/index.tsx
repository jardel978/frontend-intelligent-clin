
import Modal from 'react-modal'
import { UsuarioModel } from 'types/UsuarioTypes'

type UsuarioModalProps = {
    isOpenModal: boolean;
    handleCloseModal: () => void;
    usuario: UsuarioModel;
}

export const UsuarioModal = ({ isOpenModal, handleCloseModal, usuario }: UsuarioModalProps) => {
    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={handleCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            
        </Modal>
    )
}
