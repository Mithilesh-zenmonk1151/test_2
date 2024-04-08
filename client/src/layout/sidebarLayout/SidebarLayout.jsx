import { Box, Typography } from '@mui/material';
import React from 'react';
import Buttons from '../../components/button/Buttons';
import { useNavigate } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import TollIcon from '@mui/icons-material/Toll';
import NotesIcon from '@mui/icons-material/Notes';
import HomeIcon from '@mui/icons-material/Home';
import "./sidebarUser.css"
const SidebarLayout = () => {
    const navigate= useNavigate();
    function handleOnDashClick(){
        navigate("/customer/dashboard")
    }
    function handleOnQuoteClick(){
        navigate("/customer/my-quote")
    }
    function handleOnHomeClick(){
        navigate("/home")
    }
    function handleOnOrdersClick(){
        navigate("/customer/my-order")
    }
    function handleOnInvoiceClick(){
        navigate("/customer/invoice")
    }
    function handleOnClaimsClick(){
        navigate("/customer/my-claims")
    }
    function handleOnTransactionClick(){
        navigate("/customer/transaction")
    }
    function handleOnCreditClick(){
        navigate("/customer/credit-wallet")
    }
    function handleOnAddressClick(){
        navigate("/customer/address")
    }
    
    function handleOnAccountClick(){
        navigate("/customer/account-settings")
    }
    function handleOnHelpClick(){
        navigate("/customer/help")
    }
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        color:"#494f67",
        bgcolor:"#111727",
        height:"100vh",
        width:"20%",
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop:"20px"


    }}><Box sx={{
        display:"flex",
        flexDirection:"column",
        paddingTop:"30px",
        gap:"40px"
    }}>
        <Box sx={{
            display:"flex",
           justifyContent:"space-between"
           
        }}><TollIcon/>
        < NotesIcon/>
         </Box>
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"18px",

    }}> <Typography>Main</Typography>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Home' src={<HomeIcon/>} handleOnClick={handleOnHomeClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='' src={<GridViewIcon/>} handleOnClick={handleOnDashClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='My Quote' src={<RequestQuoteIcon/>} handleOnClick={handleOnQuoteClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='My Order' src={<ViewInArIcon/>} handleOnClick={handleOnOrdersClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Invoice' src={<ReceiptIcon/>} handleOnClick={handleOnInvoiceClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='My Claims' src={< NoteAltIcon/>} handleOnClick={handleOnClaimsClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Transaction History' src={<ReceiptLongIcon/>} handleOnClick={handleOnTransactionClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text="Credit Wallet" src={<AccountBalanceWalletIcon/>} handleOnClick={handleOnCreditClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Address Book' src={<FmdGoodIcon/>} handleOnClick={handleOnAddressClick}/>
    </Box>
    </Box>
    <Box>
        <Typography>Others</Typography>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Account Setting' src={< PermIdentityIcon/>}  handleOnClick={handleOnAccountClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Help' src={<HelpCenterIcon/>}  handleOnClick={handleOnHelpClick}/>
        <Buttons customClssSrc="src-class" typographyCustomClass='typo-class' text='Logout' src={<LogoutIcon/>}  handleOnClick={handleOnHelpClick}/>
    </Box>
    </Box>
  );
}

export default SidebarLayout;
