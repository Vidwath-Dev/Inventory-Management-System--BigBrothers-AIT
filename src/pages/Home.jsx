/*JSX stands for JavaScript XML. JSX allows us to write HTML in React. 
JSX makes it easier to write and add HTML in React.*/

import React, {useState,useEffect} from "react";
import Header from "../components/Header";
import { Box , Typography ,Button} from '@mui/material';
import AddInvoice from "../components/AddInvoice";
import Invoices from "../components/Invoices";
import { getAllInvoice,deleteInvoice} from "../services/api";

const Home = () => {
    const [addInvoice,setAddInvoice]=useState(false);
    const [invoices,setInvoices] =useState([]);

    useEffect(() =>{
        const getData = async () => {
            const response = await getAllInvoice();
            setInvoices(response.data);
        }
        getData();
    },[addInvoice])

    const toggleInvoice =() => {
        setAddInvoice(true);
    }

    const removeInvoice =async(id)=>{
        await deleteInvoice(id);

        const updatedInvoice=invoices.filter(invoice =>invoice.id != id)
        setInvoices(updatedInvoice);
    }

    return (
       /* <div>             ----this div tag is forced to put by jsx because of 2 parent tags cannot return
            <Header />
            <p>Pending Invoice</p>
        </div>*/
        //always use this React.Fragments or new version (use <> and </>) because it is faster than div use less memory and please import react
        //using of matrial ui is to replace html tag with advance tags like instead of div tag use Box
        //instead of h1,h2...tag use topography tag
        //react uses camelcase letters like marginTop
        <React.Fragment>      
             <Header />
             <Box style={{margin:20}}>
                <Typography variant="h4">Inventory check</Typography>
                { !addInvoice && <Button 
                        variant="outlined" 
                        style={{marginTop:15}}
                        onClick={() => toggleInvoice()}
                    >Stock +</Button>
                }
                {
                    addInvoice && <AddInvoice setAddInvoice={setAddInvoice}/>
                }
                <Box>
                    <Invoices 
                        invoices={invoices}
                        removeInvoice={removeInvoice}
                    />
                </Box>
             </Box>
        </React.Fragment>
    )
}

export default Home;            //-- importing in app.js --it like landing component