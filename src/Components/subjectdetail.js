import React, { Component } from 'react';
import { Button, CardText, CardBody, CardImg  } from 'reactstrap';
import {Grid,Container,Card, Box,Checkbox} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './subjectdetail.css' ;
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';



class Subject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subjects:[
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
                    diff:true
                },{
                    name:'MATHEMATICS',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },
            ]
        };
    }



    render(){

        const chapters =this.state.subjects.map((subject) => {
            return (
                <Grid xs={5} md={3} sm={4} lg={2} className="sitem"> 
                <Link to = "/subjectdetail/lessons" style={{textDecoration:'none',padding:'0'}} >
                    <Card style={{borderRadius:'7px'}}>
                        <div className="cardWrapper">
                            <CardImg height={window.innerHeight/6} width="100%" src={require("../imgs/desktop.PNG")} alt="Card image cap" />
                            <div className="layer" ref="layer">
                                <Grid
                                    justify="space-between" // Add it here :)
                                    container 
                                    spacing={24}
                                    xs={11}
                                    >
                                    <Grid item style={{marginLeft:'10px',marginTop:'5px',fontSize:'small',opacity:'0.5',fontWeight:'500'}}>
                                        PDF
                                    </Grid>
                                    <Grid item >
                                        <Checkbox
                                            icon={<CircleUnchecked />}
                                            checkedIcon={<CircleCheckedFilled />}
                                            style={{color:'greenyellow'}}
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <Container>
                            <CardBody >
                            <CardText className="cardbody">Name OF sub topic will be shown here.
                            <Box display="flex" flexDirection="row-reverse" >
                                <Box className="cardbody1">
                                    2 min
                                </Box>
                            </Box>
                            </CardText>
                            </CardBody>
                        </Container>
                    </Card>
                </Link>  
                </Grid> 
            );
        });

        const chapters1 =this.state.subjects.map((subject) => {
            if (subject.diff==false){
            return (
                <Grid xs={5} md={3} sm={4} lg={2} className="sitem"> 
                <Link to={`/subjectdetail/subtopic`} style={{textDecoration:'none',padding:'0'}} >
                    <Card style={{borderRadius:'7px'}}>
                        <div className="cardWrapper">
                            <CardImg height={window.innerHeight/6} width="100%" src={require("../imgs/desktop.PNG")} alt="Card image cap" />
                            <div className="layer" ref="layer">
                                <Grid
                                    justify="space-between" // Add it here :)
                                    container 
                                    spacing={24}
                                    xs={11}
                                    >
                                    <Grid item style={{marginLeft:'10px',marginTop:'5px',fontSize:'small',opacity:'0.5',fontWeight:'500'}}>
                                        PDF
                                    </Grid>
                                    <Grid item >
                                        <Checkbox
                                            icon={<CircleUnchecked />}
                                            checkedIcon={<CircleCheckedFilled />}
                                            style={{color:'greenyellow'}}
                                            size="small"
                                        />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                        <Container>
                            <CardBody >
                            <CardText className="cardbody">Name OF sub topic will be shown here.
                            <Box display="flex" flexDirection="row-reverse" >
                                <Box className="cardbody1">
                                    2 min
                                </Box>
                            </Box>
                            </CardText>
                            </CardBody>
                        </Container>
                    </Card>
                </Link>  
                </Grid> 
            );}
            else if (subject.diff==true){
                return(
                    <Grid xs={5} md={3} sm={4} lg={2} className="sitem"> 
                        <Link to={`/subjectdetail/assesment`} style={{textDecoration:'none',padding:'0'}} >
                            <Card className="cardbg1" style={{borderRadius:'7px'}} >
                                <Container>
                                    <CardText className="cardhead">4 Tests | 120 Questions
                                    </CardText>
                                
                                    <CardImg height={window.innerHeight/7} width="100%" src={require("../imgs/pc.PNG")} alt="Card image cap" />
                            
                                    <CardText className="cardbody2">Practice Test
                                    </CardText>
                                </Container>
                            </Card>
                        </Link>  
                    </Grid> 
                )
            }
            else{
                return(
                    <div></div>
                )
            }
        });


        
    return(
        <div style={{background:"linear-gradient( rgb(39, 127, 228) 2px, white 30%)",minHeight:window.innerHeight}}>
            <Container className="cont">   

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
                        <Link to="/allsubjects"><Button className='backsub' >
                        <i class="fa fa-chevron-left fa-lg" ></i>
                        </Button>
                        </Link>
                    </Grid>

                    <Grid item style={{textAlign:'end'}}>
                        <div>
                        
                        <div className="welcome">12 Chapters | 88 hrs </div>
                           
                           <div className="subjectname" >SUBJECT NAME</div>
                        </div>
                    </Grid>
                </Grid>


                <div container spacing={2} className="cont1" >

                <Grid item xs={12} md={12} className="name">
                    Name Of The Chapter                       
                </Grid>   
                <div  style={{marginTop:'1rem'}} class="scrollmenu">
                {chapters} 
                </div> 


                <Grid item xs={12} md={12} className="name">
                    Name Of The Chapter                       
                </Grid> 
                <div  style={{marginTop:'1rem'}} class="scrollmenu">
                {chapters1}
                </div>  
                 
                </div>      

                <Grid item xs={12} md={12} className="name">
                    Name Of The Chapter                       
                </Grid> 
                <div  style={{marginTop:'1rem'}} class="scrollmenu">
                {chapters1}
                </div>  
                 

                <Grid item xs={12} md={12} className="name">
                    Name Of The Chapter                       
                </Grid> 
                <div  style={{marginTop:'1rem'}} class="scrollmenu">
                {chapters}
                </div>  
                  

            </Container>
        </div>
    );
    }
}



export default Subject;