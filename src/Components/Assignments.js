import React, { Component } from 'react';
import {Button,Progress  } from 'reactstrap';
import {Grid,Card,Typography,CardContent,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Assignments.css';



class Assignments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            shade:[{
                dark : "rgba(15, 141, 35, 0.751)",
                light : "rgba(0, 221, 0)",
            },
           {
                dark : "rgba(15, 141, 35, 0.751)",
                light : "rgba(0, 221, 0)",
            },
            {
                dark : "rgb(40, 138, 241)",
                light : "rgb(40, 138, 241,0.75)",
            },
            {
                dark : "rgba(182, 0, 0, 0.842)",
                light : "rgba(206, 65, 65, 0.788)",
            }],
            subjects:[
                {
                    name:'TELGU',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:100,
                },{
                    name:'MATHEMATICS',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                },{
                    name:'HINDI',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                },{
                    name:'English',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:100,
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:100,
                },{
                    name:'BIOLOGY',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                },{
                    name:'SOCIAL',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                },{
                    name:'GENERAL',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:100,
                },
            ]
        };
    }


    render(){

        const assignmentsleft =this.state.subjects.filter(subject => this.state.subjects.indexOf(subject)%2===1).map((subject) => { 
            return (
                <Grid item xs={12} md={6} >
                        <Link to={`/assignments/assignmentdetails`} style={{ textDecoration: 'none' }}>
                        <Card  style={{borderRadius:"8px",background:`linear-gradient(145deg, ${this.state.shade[ (this.state.subjects.indexOf(subject)+2)%4].dark} 60%, ${this.state.shade[ (this.state.subjects.indexOf(subject)+2)%4].light} 90%)`}}>
                            <CardContent className="dashboard-btn">
                                <Typography  style={{fontWeight:'bold'}}>
                                    {subject.name}
                                </Typography>
                                <Typography  gutterBottom  style={{fontSize:"xx-small"}}>
                                    {subject.sub} Subjects &middot; {subject.exams} Exams &middot; {subject.vid} Videos
                                </Typography>   
                                <Typography  variant="body2" component="p">
                                    <Grid container alignItems='center' xs={12} style={{marginTop:"15px"}} >
                                        <Grid xs={8} style={{background:this.state.shade[ (this.state.subjects.indexOf(subject)+2)%4].light,height:"7px"}}>
                                            <Progress variant="determinate" value={subject.progress} style={{background:"white ",height:"7px",borderRadius:'2px'}} />
                                        </Grid>
                                        <Grid item xs={4} style={{textAlign: 'right',fontSize:"10px",fontWeight:'bold'}}>{subject.progress}%</Grid>
                                    </Grid>
                                </Typography>  
                                <Grid>
                                { subject.progress !== 100 ?
                                    <Grid item container>
                                        <Grid item xs={12} className="timetowork">
                                            Time to work
                                        </Grid>
                                        <Grid item container alignItems='center' className="right">
                                            <Grid item xs={4} md={2}>
                                                <div className="dateno">03</div>
                                                <div className="datetext">days</div>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <div className="dateno">22</div>
                                                <div className="datetext">Hours</div>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <div className="dateno">12</div>
                                                <div className="datetext">Mins</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                            :
                            <Grid item xs={12} className="timetowork greatjob">
                                    Great Job !
                                </Grid>
                                }  

                            </Grid>     
                            </CardContent>
                            <div  className="right" style={{height:'10px',paddingTop:'7px'}}>
                                <img src={require("../imgs/calculator.PNG")} alt="Image here"/>
                            </div>                  
                        </Card>
                        </Link>
                    </Grid>
            );
        });

        const assignmentsright =this.state.subjects.filter(subject => this.state.subjects.indexOf(subject)%2===0).map((subject) => { 
            return (
                <Grid item xs={12} md={6} >
                        <Link to={`/subjectdetail`} style={{ textDecoration: 'none' }}>
                        <Card  style={{borderRadius:"8px",background:`linear-gradient(145deg, ${this.state.shade[ this.state.subjects.indexOf(subject)%4].dark} 60%, ${this.state.shade[ this.state.subjects.indexOf(subject)%4].light} 90%)`}}>
                            <CardContent className="dashboard-btn">
                                <Typography  style={{fontWeight:'bold'}}>
                                    {subject.name}
                                </Typography>
                                <Typography  gutterBottom  style={{fontSize:"xx-small"}}>
                                    {subject.sub} Subjects &middot; {subject.exams} Exams &middot; {subject.vid} Videos
                                </Typography>   
                                <Typography  variant="body2" component="p">
                                    <Grid container alignItems='center' xs={12} style={{marginTop:"15px"}} >
                                        <Grid xs={8} style={{background:this.state.shade[ this.state.subjects.indexOf(subject)%4].light,height:"7px"}}>
                                            <Progress variant="determinate" value={subject.progress} style={{background:"white ",height:"7px",borderRadius:'2px'}} />
                                        </Grid>
                                        <Grid item xs={4} style={{textAlign: 'right',fontSize:"10px",fontWeight:'bold'}}>{subject.progress}%</Grid>
                                    </Grid>
                                </Typography>  
                                { subject.progress !== 100 ?
                                <Grid>
                                    <Grid item container>
                                        <Grid item xs={12} className="timetowork">
                                            Time to work
                                        </Grid>
                                        <Grid item container alignItems='center' className="right">
                                            <Grid item xs={4} md={2}>
                                                <div className="dateno">03</div>
                                                <div className="datetext">days</div>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <div className="dateno">22</div>
                                                <div className="datetext">Hours</div>
                                            </Grid>
                                            <Grid item xs={4} md={2} >
                                                <div className="dateno">12</div>
                                                <div className="datetext">Mins</div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>     
                            :
                                <Grid item xs={12} className="timetowork greatjob">
                                    Great Job !
                                </Grid>
                                }                    
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
            );
        });


    return(
        <div className="bgassignments">
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
                        <Link to="/dashboard"><Button className='backsub' style={{color:'skyblue'}}>
                        <i class="fa fa-chevron-left fa-lg" ></i>
                        </Button>
                        </Link>
                    </Grid>

                    <Grid item style={{textAlign:'end'}}>
                        <div>
                        
                        <div className="welcome">2 Subjects | 3 Tests | 24mins read  </div>
                           
                           <div className="subjectname blog"  >ASSIGNMENTS</div>
                        </div>
                    </Grid>
                </Grid>

            </Container>

                <Grid container spacing={2} className="cont1" alignItems='flex-start' justify="center" >  
                    <Grid item container  spacing={2} xs={6} >
                        {assignmentsleft}
                    </Grid>
                    <Grid item container  spacing={2} xs={6} >
                        {assignmentsright}
                    </Grid>
                </Grid>    
                    
             

        </div>
    );
    }
}



export default Assignments;