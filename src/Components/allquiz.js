import React, { Component } from 'react';
import {Button, Card } from 'reactstrap';
import {Grid,Container, Checkbox,Box,Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './AssesmentTest.css' ;
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import {practicetests,chaptertests} from '../data/alltests';



class AllQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            practicetests:practicetests,
            chaptertests:chaptertests
        };
    }



    render(){



        const practicetests =this.state.practicetests.map((question) => {
            return (
                <Accordion style={{marginBottom:'8px',paddingBottom:'5px',boxShadow:'none',position:'relative',background:'rgba(248, 248, 248)',border:'none'}} >
                        <AccordionSummary style={{padding:0,margin:'0px 0px'}}>
                        <Grid  container spacing={2} xs={12} alignItems="center" style={{margin:'0px',marginBottom:'-6px'}}> 
                            <Grid item>
                                {this.state.practicetests.indexOf(question)+1}
                            </Grid>
                            <Grid  container spacing={1} xs={11}  className='assesmentcard1'> 
                                <Grid item >
                                    <img src={require("../imgs/pc.PNG")} alt="Image here" className="cardimg shadow" height={window.innerWidth/7} style={{maxHeight:'103px',borderRadius:'7px'}} ></img>
                                </Grid>

                                <Grid item xs={8} md={9} style={{height:'100%'}} justify="space-between" >
                                    
                                            <Card >
                                                <Box flexDirection='column' >
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={12} md={12}>
                                                                    <div  className='practtest' >                                            
                                                                        Practise Test
                                                                    </div>
                                                                
                                                                    <div  className='info' >
                                                                        10 Questions | 10 Rows | 23 Marks
                                                                    </div>
                                                        </Grid>

                                                        <Grid item xs={2}>    
                                                        {   question.completed === true ?
                                                                <Checkbox
                                                                icon={<CircleCheckedFilled />}
                                                                style={{color:'green'}}
                                                                size="small"
                                                                />  
                                                            :
                                                            <div></div>
                                                        }                                                            
                                                        </Grid>
                                                    </Grid>
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={8} md={12}>
                                                        </Grid>

                                                        <Grid item className='correct' md={4} xs={5}>                                    
                                                            5/10 Correct                   
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Card>
                                </Grid>
                            </Grid>
                        </Grid> 
                        </AccordionSummary>
                        <AccordionDetails style={{padding:'0px 16px 16px'}}>
                            {  question.completed === true ?
                                <Grid xs={12} container spacing={2}  > 
                                        <Grid item md={2} ></Grid>
                                        <Grid item xs={5} md={3} >                                    
                                            <Link to={`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}/test`}><Button className='exambtn' > Retake Exam</Button></Link>
                                        </Grid>
                                        <Grid item md={1}></Grid>
                                        <Grid item xs={5} md={3}>
                                            <Link to = {`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}/checktest`}><Button variant='outlined' className='exambtn'>Check Your Answers</Button></Link>
                                        </Grid>
                                    </Grid>
                                :
                                    <Grid xs={12} container spacing={2}  >     
                                        <Grid item md={4} xs={3} ></Grid>                           
                                        <Grid item xs={6} md={4} >                                    
                                            <Link to={`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}/test`}><Button className='exambtn' > Retake Exam</Button></Link>
                                        </Grid>
                                        <Grid item md={4} xs={3}></Grid>
                                    </Grid>
                            }    
                        </AccordionDetails>
                </Accordion>
            );
        });


        const chaptertests =this.state.chaptertests.map((question) => {
            return (
                <Accordion style={{marginBottom:'8px',paddingBottom:'5px',boxShadow:'none',position:'relative',background:'rgba(248, 248, 248)',border:'none'}} >
                        <AccordionSummary style={{padding:0,margin:'0px 0px'}}>
                        <Grid  container spacing={2} xs={12} alignItems="center" style={{margin:'0px',marginBottom:'-6px'}}> 
                            <Grid item>
                                {this.state.chaptertests.indexOf(question)+1}
                            </Grid>
                            <Grid  container spacing={1} xs={11}  className='assesmentcard1'> 
                                <Grid item >
                                    <img src={require("../imgs/pc.PNG")} alt="Image here" className="cardimg" height={window.innerWidth/7} style={{maxHeight:'103px'}} ></img>
                                </Grid>

                                <Grid item xs={8} md={9} style={{height:'100%'}} justify="space-between" >
                                    
                                            <Card >
                                                <Box flexDirection='column' >
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={12} md={12}>
                                                                    <div  className='practtest' >                                            
                                                                        Chapter Test
                                                                    </div>
                                                                
                                                                    <div  className='info' >
                                                                        10 Questions | 10 Rows | 23 Marks
                                                                    </div>
                                                        </Grid>

                                                        <Grid item xs={2}>    
                                                        {   question.completed === true ?
                                                                <Checkbox
                                                                icon={<CircleCheckedFilled />}
                                                                style={{color:'green'}}
                                                                size="small"
                                                                />  
                                                            :
                                                            <div></div>
                                                        }                                                            
                                                        </Grid>
                                                    </Grid>
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={8} md={12}>
                                                        </Grid>

                                                        <Grid item className='correct' md={4} xs={5}>                                    
                                                            5/10 Correct                   
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Card>
                                </Grid>
                            </Grid>
                        </Grid> 
                        </AccordionSummary>
                        <AccordionDetails style={{padding:'0px 16px 16px'}}>
                            {  question.completed === true ?
                                <Grid xs={12} container spacing={2}  > 
                                        <Grid item md={2} ></Grid>
                                        <Grid item xs={5} md={3} >                                    
                                            <Link to={`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}/test`}><Button className='exambtn' > Retake Exam</Button></Link>
                                        </Grid>
                                        <Grid item md={1}></Grid>
                                        <Grid item xs={5} md={3}>
                                            <Link to={`/subjectdetail/assesment/test/leaderboard`}><Button variant='outlined' className='exambtn'>Leaderboard</Button></Link>
                                        </Grid>
                                    </Grid>
                                :
                                    <Grid xs={12} container spacing={2}  >     
                                        <Grid item md={4} xs={3} ></Grid>                           
                                        <Grid item xs={6} md={4} >                                    
                                            <Link to={`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}/test`}><Button className='exambtn' > Take Exam</Button></Link>
                                        </Grid>
                                        <Grid item md={4} xs={3}></Grid>
                                    </Grid>
                            }    
                        </AccordionDetails>
                </Accordion>
            );
        });

     

        
    return(
        <div style={{backgroundColor:"whitesmoke"}}>
            <Container className="cont assesmentcont">   

                <Grid
                    justify="space-between" // Add it here :)
                    container 
                    spacing={24}
                    xs={11}
                    >
                    <Grid item xs={2}
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center" >
                        <Link to={`/subjectdetail/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}`}>
                            <button className='backtest' >
                            <i class="fa fa-chevron-left fa-lg" ></i>
                            </button>
                        </Link>
                    </Grid>

                    <Grid item style={{marginLeft:'10%',display:'flex',alignItems:'center',left:'0'}}>
                        <div>
                        
                           <div className="assesmenthead" >ASSESMENTS TESTS</div>
                            <div className="welcome1">{window.location.href.substr( window.location.href.lastIndexOf('/') + 1)} </div>
                           
                        </div>
                        <div>
                            <img src={require('../imgs/assesmenthead.png')} alt="Image here" height='150px'></img>
                        </div>
                    </Grid>
                </Grid>


                <div container spacing={2} className="assesmentcont" >  
                    {practicetests}                  
                </div>     
                
                <div className='cont2 name'>
                    Final Chapter Test
                </div>
                <div container spacing={2} className="assesmentcont" >  
                    {chaptertests}                  
                </div>  


            </Container>
        </div>
    );
    }
}



export default AllQuiz;