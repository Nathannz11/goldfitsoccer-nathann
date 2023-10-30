import * as React from 'react';

import {
    Box,
    Button,
    Typography,
    Modal,
    Backdrop, 
    Fade
} from '@material-ui/core'

import GreenButton from '../../_components/green-button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({title, text, open, handleCloseFunction}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleCloseFunction}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {text}
                        </Typography>
                        <GreenButton onClick={()=> open=false}>Confirmar</GreenButton>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
