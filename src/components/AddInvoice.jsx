import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import { saveInvoice } from '../services/api';
import Quagga from 'quagga';  // Import QuaggaJS if installed via npm

const Component = styled(Box)({
    marginTop: 20,
    '&>p': {
        fontSize: 26,
        marginBottom: 10
    },
    '&> div>div': {
        marginRight: 20,
        minWidth: 200
    }
});

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'Stock In',
    barcode: '' // New barcode field
};

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    useEffect(() => {
        // Initialize barcode scanner on component mount
        startBarcodeScanner();

        // Cleanup on component unmount
        return () => Quagga.stop();
    }, []);

    const startBarcodeScanner = () => {
        Quagga.init({
            inputStream: {
                type: 'LiveStream',
                target: document.querySelector('#video') // Video element
            },
            decoder: {
                readers: ['code_128_reader', 'ean_reader', 'ean_8_reader', 'code_39_reader', 'upc_reader', 'upc_e_reader', 'i2of5_reader']
            }
        }, function (err) {
            if (err) {
                console.error('QuaggaJS initialization failed:', err);
                return;
            }
            Quagga.start();
        });

        // Handle barcode detection
        Quagga.onDetected((data) => {
            const barcode = data.codeResult.code;
            setInvoice(prevState => ({ ...prevState, barcode })); // Set barcode in state

            // Play beep sound
            const beepSound = new Audio('deep.mp3'); // Adjust path if needed
            beepSound.play();
        });
    };

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    };

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice.amount) });
        setAddInvoice(false);
    };

    return (
        <Component>
         <Typography>Stock Entry</Typography>
            <Box>
                <TextField
                    variant="standard"
                    placeholder="Enter consumer name"
                    value={invoice.vendor}
                    onChange={onValueChange}
                    name="vendor"
                    autoComplete='off'
                />
                <TextField
                    variant="standard"
                    placeholder="Enter product name"
                    value={invoice.product}
                    onChange={onValueChange}
                    name="product"
                    autoComplete='off'
                />
                <TextField
                    variant="standard"
                    placeholder="Enter amount (in Rs)"
                    type="number"
                    value={invoice.amount}
                    onChange={onValueChange}
                    name="amount"
                    autoComplete='off'
                />
                <TextField
                    variant="standard"
                    placeholder="Enter date"
                    type="date"
                    value={invoice.date}
                    onChange={onValueChange}
                    name="date"
                    autoComplete='off'
                />
                <TextField
                    variant="standard"
                    placeholder="Barcode"
                    value={invoice.barcode}
                    name="barcode"
                    autoComplete='off'
                    disabled // Make barcode field read-only as it auto-populates from scanner
                />
                <Button
                    variant="contained"
                    onClick={addNewInvoice}
                >
                    Add Product
                </Button>
            </Box>
            <div id="video" style={{ display: 'none' }}></div> {/* Hidden video element for barcode scanning */}
        </Component>
    );
};

export default AddInvoice;
