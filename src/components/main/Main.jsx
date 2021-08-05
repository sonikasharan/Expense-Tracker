import React,{useContext} from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import {ExpenseTrackerContext} from '../../context/Context';
import useStyles from './styles'
import Form from './form/Form';
import List from './list/List';
import InfoCard from '../infoCard';
const Main = () => {
    const classes=useStyles();
    const{balance}=useContext(ExpenseTrackerContext);
    return (
       <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Designed by sonika sharan"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance ₹ {balance}</Typography>
            <Typography variant="subtitle1" styles={{lineHeight:'1.5em',marginTop:'20px'}}>
            
          <InfoCard/></Typography>
        <Divider className={classes.divider}/>
         <Form/>
        </CardContent>
        <CardContent className={classes.cardComtent}>
           <Grid container spacing={2}>
            <Grid item xs={12}>
                <List/>
            </Grid>
           </Grid>
        </CardContent>
       </Card>
    )
}

export default Main
