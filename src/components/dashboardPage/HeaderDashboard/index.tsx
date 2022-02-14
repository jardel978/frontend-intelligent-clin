import { BoxUsuarioHeaderDashboard, ContainerHeaderDashboard } from "./styles"

import logoImg from 'assets/logo.svg'

import { UsuarioModel } from "types/UsuarioTypes"

import Image from "next/image"
import { useState } from "react"
import { UsuarioModal } from "../UsuarioModal"

type HeaderProps = {
  usuario: UsuarioModel;
  signOut: () => void;
  isFetching: boolean;
}

export const HeaderDashboard = ({ usuario, signOut, isFetching }: HeaderProps) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  return (
    <ContainerHeaderDashboard>
      <Image src={logoImg} alt='Logo da Intelligent Clin' />

      <BoxUsuarioHeaderDashboard>
        {isFetching && <p>Carregando...</p>}
        {usuario && <h2>Olá, {usuario.nome}</h2>}
        <button onClick={handleOpenModal}>Meus dados</button>
        <button onClick={signOut}>Sair</button>
      </BoxUsuarioHeaderDashboard>

      <UsuarioModal isOpenModal={isOpenModal} handleCloseModal={handleCloseModal} usuario={usuario} />
    </ContainerHeaderDashboard>
  )
}
