import React, { Component } from 'react';
import { Button} from 'reactstrap';
import {Grid,Container, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';
import './subtopicdetails.css' ;


class SubTopic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SubTopics:[
                {
                    name:'TELGU',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:false
                },{
                    name:'ENGLISH',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:true
                },{
                    name:'HINDI',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:false
                },{
                    name:'MATHEMATICS',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:false
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:true
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:true
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:false
                },
            ]
        };
    }



    render(){
            
        return(
            <div style={{background:'whitesmoke'}}>
                
                <AppBar position="static" style={{background:" linear-gradient(45deg, rgb(190, 54, 81,0.65) 10%, rgb(250, 229, 113,0.8) 80%)",color:'black'}}>
                    <Toolbar xs={10}>

                        <Grid
                            justify="space-between" // Add it here :)
                            container 
                            spacing={24}
                            >
                            
                            <Grid item xs={1}>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <Link to='/subjectdetail'>
                                        <Button className='backsub' style={{color:'red'}} >
                                            <i class='fa fa-chevron-left fa-lg' ></i>
                                        </Button>
                                    </Link>
                                </IconButton>
                            </Grid>

                            <Grid item xs={8}>
                                <IconButton edge="start" color="inherit" aria-label="menu" >
                                    <Typography type="title"  variant="body1" color="inherit" style={{fontWeight:'600',paddingTop:'2.5%',color:'rgba(0, 0, 0, 0.589)'}}>
                                        Name Of Subtopic Will be here
                                    </Typography>
                                </IconButton>
                            </Grid>

                            <Grid item xs={1}>
                                <IconButton edge="start" color="inherit" aria-label="menu" className="topicons">
                                    <Box flexDirection="vertical"><GetAppIcon /> <div className="icontext">Download</div></Box>
                                </IconButton>                
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton edge="start" color="inherit" aria-label="menu" className="topicons">
                                <Box flexDirection="vertical"><ShareIcon/> <div className="icontext">Share</div></Box>   
                                </IconButton>                 
                            </Grid>

                        </Grid>
                        
                        
                       
                    </Toolbar>
                </AppBar>


                <Container className="cont" style={{paddingTop:'1rem'}}>

                <Container className="contcol">   
                    <ol>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <img src={require("../imgs//portfolio-1.jpg")} height="100px" ></img>
                        <li>Sorting Option for all master registration</li>
                        <img src={require("../imgs//portfolio-1.jpg")} height="100px" alt="Image here"></img>
                    </ol>
                    

                </Container>

                <Container className="contcol">   
                    <ol>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <li>Sorting Option for all master registration</li>
                        <img src={require("../imgs//portfolio-1.jpg")} height="100px" alt="Image here" ></img>
                        <li>Sorting Option for all master registration</li>
                        <img src={require("../imgs//portfolio-1.jpg")} height="100px" alt="Image here" ></img>
                    </ol>
                    

                </Container>
                </Container>
            </div>
        );
    }
}



export default SubTopic;