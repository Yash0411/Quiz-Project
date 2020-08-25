import React, { Component } from 'react';
import {Button, Card } from 'reactstrap';
import {Grid,Container,Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './AssignmentsDetail.css' ;
import {practicetests,chaptertests} from '../data/alltests';



class AssignmentsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            practicetests:practicetests,
            chaptertests:chaptertests
        };
    }



    render(){


        const chaptertests =this.state.practicetests.map((question) => {
            return (
              <Grid  container spacing={2} xs={12} alignItems="center" style={{margin:'0px',marginBottom:'15px'}}> 
                            <Grid item>
                                {this.state.practicetests.indexOf(question)+1}
                            </Grid>
                            <Grid  container spacing={1} xs={11}  className='assesmentcard1'> 
                                <Grid item >
                                    <img src={require("../imgs/Video.PNG")} alt="Image here" className="cardimg shadow" height={window.innerWidth/7} style={{maxHeight:'103px',borderRadius:'4px'}} ></img>
                                </Grid>

                                <Grid item xs={8} md={9} style={{height:'100%'}} justify="space-between" >
                                    
                                            <Card >
                                                <Box flexDirection='column' >
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={12} md={12}>
                                                                    <div  className='subtopic' >                                            
                                                                        Name Of Subtopic will be shown here btopic will be shown here 
                                                                    </div>
                                                                
                                                                    <div  className='info min' >
                                                                        5 min remaining
                                                                    </div>
                                                        </Grid>

                                                    </Grid>
                                                </Box>
                                            </Card>
                                </Grid>
                            </Grid>
                        </Grid> 
            );
        });

        const practicetests =this.state.practicetests.map((question) => {
            return (
              <Grid  container spacing={2} xs={12} alignItems="center" style={{margin:'0px',marginBottom:'15px'}}> 
                            <Grid item>
                                {this.state.practicetests.indexOf(question)+1}
                            </Grid>
                            <Grid  container spacing={1} xs={11}  className='assesmentcard1'> 
                                <Grid item >
                                    <img src={require("../imgs/pc.PNG")} alt="Image here" className="cardimg shadow" height={window.innerWidth/7} style={{maxHeight:'103px',borderRadius:'4px'}} ></img>
                                </Grid>

                                <Grid item xs={8} md={9} style={{height:'100%'}} justify="space-between" >
                                    
                                            <Card >
                                                <Box flexDirection='column' >
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={12} md={12}>
                                                                    <div  className='subtopic' >                                            
                                                                        Name Of Subtopic will be shown here btopic will be shown here 
                                                                    </div>
                                                                
                                                                    <div  className='info min' >
                                                                        5 min remaining
                                                                    </div>
                                                        </Grid>

                                                    </Grid>
                                                </Box>
                                            </Card>
                                </Grid>
                            </Grid>
                        </Grid> 
            );
        });

        const genericassignments =this.state.practicetests.map((question) => {
            return (
              <Grid  container spacing={2} xs={12} alignItems="center" style={{margin:'0px',marginBottom:'15px'}}> 
                            <Grid item>
                                {this.state.practicetests.indexOf(question)+1}
                            </Grid>
                            <Grid  container spacing={1} xs={11}  className='assesmentcard1'> 
                                <Grid item >
                                    <img src={require("../imgs/desktop.PNG")} alt="Image here" className="cardimg shadow" height={window.innerWidth/7} style={{maxHeight:'103px',borderRadius:'4px'}} ></img>
                                </Grid>

                                <Grid item xs={8} md={9} style={{height:'100%'}} justify="space-between" >
                                    
                                            <Card >
                                                <Box flexDirection='column' >
                                                    <Grid style={{display:'flex',paddingBottom:'0px'}}>
                                                        <Grid item xs={12} md={12}>
                                                                    <div  className='subtopic' >                                            
                                                                        Name Of Subtopic will be shown here btopic will be shown here 
                                                                    </div>
                                                                
                                                                    <div  className='info min' >
                                                                        5 min remaining
                                                                    </div>
                                                        </Grid>

                                                    </Grid>
                                                </Box>
                                            </Card>
                                </Grid>
                            </Grid>
                        </Grid> 
            );
        });

     

        
    return(
        <div  className="assignmentdetailtop">
            <Container  className="cont">
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
                        <Link to="/assignments"><Button className='backsub green' >
                        <i class="fa fa-chevron-left fa-lg" ></i>
                        </Button>
                        </Link>
                    </Grid>

                    <Grid item style={{textAlign:'end'}}>
                        <div>
                        
                            <div className="welcome">2 Subjects | 3 Tests | 24mins read </div>
                           
                           <div className="subjectname green" >MATHEMATICS</div>

                           <div className="subjectname green" >
                            <Grid item container alignItems='center' className="right" justify="flex-end">
                                    <Grid item xs={2} md={2}>
                                        <div className="datenotop">03</div>
                                        <div className="datetexttop">days</div>
                                    </Grid>
                                    <Grid item xs={2} md={2} >
                                        <div className="datenotop">22</div>
                                        <div className="datetexttop">Hours</div>
                                    </Grid>
                                    <Grid item xs={2} md={2} >
                                        <div className="datenotop">12</div>
                                        <div className="datetexttop">Mins</div>
                                    </Grid>
                            </Grid>
                           </div>
                        </div>
                    </Grid>
                    

                </Grid>
            </Container>
            
            <Container className="cont assesmentcont">   

                
                <div className='cont2 name'>
                    Name Of the Chapter
                </div>
                <div container spacing={2} className="assesmentcont" >  
                    {chaptertests}                  
                </div>  

                <div className='cont2 name'>
                    Name Of the Chapter
                </div>
                <div container spacing={2} className="assesmentcont" >  
                    {chaptertests}                  
                </div>  

                <div className='cont2 name'>
                    Practise Tests
                </div>
                <div container spacing={2} className="assesmentcont" >  
                    {practicetests}                  
                </div>  

                <div className='cont2 name'>
                    Generic Assignments
                </div>
                <div container spacing={2} className="assesmentcont" >  
                    {genericassignments}                  
                </div>  


            </Container>
        </div>
    );
    }
}



export default AssignmentsDetail;