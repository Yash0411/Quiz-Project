import React, { Component } from 'react';
import {Button, Card } from 'reactstrap';
import {Grid,Container, Typography,Checkbox,Box,Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './AssesmentTest.css' ;
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';



class TestSubmitted extends Component {

    render(){

    return(
        <div className="bg">
                <div style={{background:"linear-gradient(45deg, rgb(190, 40, 81,0.65) 10%, rgb(250, 229, 113,0.8) 80%)"}}>
                    <Grid
                        container
                        alignItems="center" 
                        xs={12}
                        className="appbar"   
                        >
                        <Grid item xs={2}
                            container
                            spacing={0}      >
                            <Link to="/subjectdetail/assesment"><Button className='back' style={{color:'red',fontSize:'x-small'}}>
                            <i class="fa fa-chevron-left fa-lg" ></i>
                            </Button>
                            </Link>
                        </Grid>

                        <Grid item xs={6}>                        
                                Practise Test
                        </Grid>

                        <Grid item xs={1}></Grid>
                        
                        <Grid item className='timeleft' xs={3}  >
                            4:59 mins left
                        </Grid>
                    </Grid>
            </div>

            <Container className='cont1'>
                    <center>
                <Grid>
                    <Grid item
                        alignItems="center" 
                        xs={12} 
                    >
                        <CircleCheckedFilled  style={{color:'green',fontSize:'100px'}}/>
                    </Grid>
                </Grid>
                <Grid className='cont1r qtext'>                      
                Successfullty Submitted !
                </Grid>
                <Grid className='cont2'>
                    <Grid item
                        alignItems="center" 
                        xs={12} md={6} 
                        className='submittext  '
                    >
                        Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    </Grid>
                </Grid>

                <Grid className='cont2 qtext'>                   
                    <Link to="/subjectdetail/assesment/checktest"><Button className='check'>
                        Check Your Answers
                    </Button>
                    </Link>
                </Grid>

                <Grid className='cont2 ans'>                                       
                    5 others completed this assesment.
                </Grid>
                </center>


                <Grid className='cont1' style={{textAlign:'right'}}>
                    <Link to='/subjectdetail/assesment/'><Button className='submit'>Home</Button></Link>
                </Grid>
            </Container>

            
        </div>
    );
    }
}



export default TestSubmitted;