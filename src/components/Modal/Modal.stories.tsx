import React, { useState } from 'react'
import { FWThemeProvider } from '../../models/FWThemeProvider'
import { Button, Modal, ModalContent, Text } from '../'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Modal,
  title: 'Modal',
  parameters: {
    info: infoAddOn
  }
}

export const Default: React.FC<{}> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setModalIsOpen(true)}>Show Dialog</Button>
      <Modal isOpen={modalIsOpen} onDismiss={() => setModalIsOpen(false)}>
        <ModalContent>
          <Text>Modal Content</Text>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </ModalContent>
      </Modal>
    </>
  )
}

export const FWThemeDark: React.FC<{}> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <FWThemeProvider theme="dark">
      <Button onClick={() => setModalIsOpen(true)}>Show Dialog</Button>
      <Modal isOpen={modalIsOpen} onDismiss={() => setModalIsOpen(false)}>
        <ModalContent>
          <Text>Modal Content</Text>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </ModalContent>
      </Modal>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<{}> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <FWThemeProvider theme="light">
      <Button onClick={() => setModalIsOpen(true)}>Show Dialog</Button>
      <Modal isOpen={modalIsOpen} onDismiss={() => setModalIsOpen(false)}>
        <ModalContent>
          <Text>Modal Content</Text>
          <Button onClick={() => setModalIsOpen(false)}>Close</Button>
        </ModalContent>
      </Modal>
    </FWThemeProvider>
  )
}
