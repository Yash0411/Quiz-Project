import React, { Component } from 'react';
import { Card } from 'reactstrap';
import {Grid,Container,Box,} from '@material-ui/core';
import './lessons.css' ;
import {practicetests,chaptertests} from '../data/alltests';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';



class Lessons extends Component {

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

     

        
    return(
        <div style={{backgroundColor:"whitesmoke"}}>
            <center>
                <img src={require('../imgs/Video.PNG')} alt="Image here" className="vidimg"/>
            </center>
            <Container>
            <Grid container xs={12} className='cont1r' alignItems='center'>
                <Grid item xs={8} className='qtext' >
                    Name Of SubtopicWill Be shown here....
                </Grid>
                <Grid item xs={2} className='iconlsn'>
                    <Box flexDirection="vertical"><GetAppIcon /> <div className="icontext">Download</div></Box>              
                </Grid>
                <Grid item xs={1} className='iconlsn'>
                    <Box flexDirection="vertical"><ShareIcon/> <div className="icontext">Share</div></Box>   
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


            </Container>
        </div>
    );
    }
}



export default Lessons;