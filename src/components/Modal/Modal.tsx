import React, { forwardRef } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import type { DialogProps, DialogContentProps } from '@reach/dialog'
import { Box } from '../Box/Box'

const modalFwcss = {
  bg: 'rgba(0, 0, 0, .3)',
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  overflow: 'auto'
}

export const Modal = forwardRef(
  (
    { children, ...props }: DialogProps & React.HTMLAttributes<HTMLDivElement>,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        as={DialogOverlay}
        ref={ref}
        fwcss={modalFwcss}
        fwelement="modal"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

Modal.displayName = 'Modal'

const modalContentFwcss = {
  width: '500',
  maxWidth: '90%',
  mt: '10vh',
  mx: 'auto',
  bg: 'white',
  outline: 'none',
  position: 'relative'
}

export const ModalContent = forwardRef(
  (
    { children, ...props }: DialogContentProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Box
        as={DialogContent}
        ref={ref}
        fwcss={modalContentFwcss}
        fwelement="modalContent"
        {...props}
      >
        {children}
      </Box>
    )
  }
)

ModalContent.displayName = 'ModalContent'
