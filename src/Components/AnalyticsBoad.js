import React, { Component } from 'react';
import {Progress} from 'reactstrap';
import {Grid,Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import './AnalyticsBoard.css' ;



class AnalyticsBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles:[
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
  
    return(
        <div>
        <div className="analyticsbg1">
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
                        <Link to="/dashboard">
                            <button className='backtest backanalysis' >
                            <i class="fa fa-chevron-left fa-lg" ></i>
                            </button>
                        </Link>
                    </Grid>

                    <Grid item style={{marginLeft:'10%',display:'flex',alignItems:'center',left:'0'}}>
                        <div>
                        
                           <div className="analysis assesmenthead" >ANALYSIS</div>
                            <div className="welcome1">All Subjects </div>
                           
                        </div>
                        <div>
                            <img src={require('../imgs/analyticsboardimg.PNG')} alt="Image here" height='150px'></img>
                        </div>
                    </Grid>
                </Grid>

                <Grid style={{textAlign:'center'}} className="cont2">
                    <Grid item container xs={12} className="topanalytics">
                        <Grid item xs={4} className="left">
                            Learning Module Progress
                        </Grid>
                        <Grid ittem xs={4}></Grid>
                        <Grid item xs={4} className="right">
                            Assessment Task Progress
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} alignItems='center' className="cont1r center textanalytics">
                        <Grid item xs={12} className="bartop">Your Progress</Grid> 
                        <Grid item xs={1}>78%</Grid>
                        <Grid item xs={5}  className="shadow prog" style={{textAlign:'-webkit-right'}}>
                            <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgb(0, 208, 225) 30%,rgb(0, 183, 255))",height:"20px",borderRadius:'5px 0px 0px 5px'}} />
                        </Grid>
                        <Grid item xs={5} className="shadow prog">
                            <Progress variant="determinate" value={78} style={{background:"linear-gradient(270deg, rgb(0, 132, 255,0.8) 35%,rgb(0, 183, 255))",height:"20px",borderRadius:'0px 5px 5px 0px'}} />
                        </Grid>
                        <Grid ittem xs={1}>78%</Grid>
                    </Grid>

                    <Grid item container xs={12} alignItems='center' className="cont1r center textanalytics">
                        <Grid item xs={12} className="bartop">Best Pupil</Grid> 
                        <Grid item xs={1}>78%</Grid>
                        <Grid item xs={5}  className="shadow prog" style={{textAlign:'-webkit-right'}}>
                            <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgb(0, 208, 225) 30%,rgb(0, 183, 255))",height:"20px",borderRadius:'5px 0px 0px 5px'}} />
                        </Grid>
                        <Grid item xs={5} className="shadow prog">
                            <Progress variant="determinate" value={78} style={{background:"linear-gradient(270deg, rgb(0, 132, 255,0.8) 35%,rgb(0, 183, 255))",height:"20px",borderRadius:'0px 5px 5px 0px'}} />
                        </Grid>
                        <Grid ittem xs={1}>78%</Grid>
                    </Grid>

                    <Grid item container xs={12} alignItems='center' className="cont1r center textanalytics">
                        <Grid item xs={12} className="bartop">Average</Grid> 
                        <Grid item xs={1}>78%</Grid>
                        <Grid item xs={5}  className="shadow prog" style={{textAlign:'-webkit-right'}}>
                            <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgb(0, 208, 225) 30%,rgb(0, 183, 255))",height:"20px",borderRadius:'5px 0px 0px 5px'}} />
                        </Grid>
                        <Grid item xs={5} className="shadow prog">
                            <Progress variant="determinate" value={78} style={{background:"linear-gradient(270deg, rgb(0, 132, 255,0.8) 35%,rgb(0, 183, 255))",height:"20px",borderRadius:'0px 5px 5px 0px'}} />
                        </Grid>
                        <Grid ittem xs={1}>78%</Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>

        <div style={{background:'whitesmoke'}}>
        <div className="analyticsbg2">
            <Container className="cont">   

            <Grid
                    justify="space-between" // Add it here :)
                    container 
                    spacing={24}
                    xs={11}
                    >
                    

                    <Grid xs={8} item style={{marginLeft:'10%',alignItems:'center',left:'0'}}>
                           <div className="analysis assesmenthead white" >SUBJECTWISE ANALYSIS</div>
                    </Grid>
                </Grid>            
            </Container>
            </div>

            <Container >
                <Grid  className="cont2">
                    <Grid item container xs={12} alignItems='center' className="cont1r textanalytics">
                        <Grid item xs={12} className="qtext subject1">Physics</Grid> 
                        <Grid item container xs={12} className="baravg">
                            <Grid item xs={2} className="center">Mine</Grid>
                            <Grid item xs={7}  className="shadow prog" >
                                <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgba(231, 107, 159, 1) 30%, rgba(116, 57, 184, 0.8) 100%) 0% 0% no-repeat padding-box",height:"2.5vh",borderRadius:'5px'}} />
                            </Grid>
                            <Grid item xs={2} md={1} className="center">78%</Grid>
                            <Grid item xs={0} md={2}></Grid>
                        </Grid>
                        <Grid item container xs={12} className="baravg">
                            <Grid item xs={2} className="center">Mine</Grid>
                            <Grid item xs={7}  className="shadow prog" >
                                <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgba(231, 107, 159, 1) 30%, rgba(116, 57, 184, 0.8) 100%) 0% 0% no-repeat padding-box",height:"2.5vh",borderRadius:'5px'}} />
                            </Grid>
                            <Grid item xs={2} md={1} className="center">78%</Grid>
                            <Grid item xs={0} md={2}></Grid>
                        </Grid>
                        <Grid item xs={12}  className="baravg">
                            <hr />
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} alignItems='center' className="cont1r textanalytics">
                        <Grid item xs={12} className="qtext subject1">Physics</Grid> 
                        <Grid item container xs={12} className="baravg">
                            <Grid item xs={2} className="center">Mine</Grid>
                            <Grid item xs={7}  className="shadow prog" >
                                <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgba(231, 107, 159, 1) 30%, rgba(116, 57, 184, 0.8) 100%) 0% 0% no-repeat padding-box",height:"2.5vh",borderRadius:'5px'}} />
                            </Grid>
                            <Grid item xs={2} md={1} className="center">78%</Grid>
                            <Grid item xs={0} md={2}></Grid>
                        </Grid>
                        <Grid item container xs={12} className="baravg">
                            <Grid item xs={2} className="center">Mine</Grid>
                            <Grid item xs={7}  className="shadow prog" >
                                <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgba(231, 107, 159, 1) 30%, rgba(116, 57, 184, 0.8) 100%) 0% 0% no-repeat padding-box",height:"2.5vh",borderRadius:'5px'}} />
                            </Grid>
                            <Grid item xs={2} md={1} className="center">78%</Grid>
                            <Grid item xs={0} md={2}></Grid>
                        </Grid>
                        <Grid item xs={12}  className="baravg">
                            <hr />
                        </Grid>
                    </Grid>

                    <Grid item container xs={12} alignItems='center' className="cont1r textanalytics">
                        <Grid item xs={12} className="qtext subject1">Physics</Grid> 
                        <Grid item container xs={12} className="baravg">
                            <Grid item xs={2} className="center">Mine</Grid>
                            <Grid item xs={7}  className="shadow prog" >
                                <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgba(231, 107, 159, 1) 30%, rgba(116, 57, 184, 0.8) 100%) 0% 0% no-repeat padding-box",height:"2.5vh",borderRadius:'5px'}} />
                            </Grid>
                            <Grid item xs={2} md={1} className="center">78%</Grid>
                            <Grid item xs={0} md={2}></Grid>
                        </Grid>
                        <Grid item container xs={12} className="baravg">
                            <Grid item xs={2} className="center">Mine</Grid>
                            <Grid item xs={7}  className="shadow prog" >
                                <Progress variant="determinate" value={78} style={{background:"linear-gradient(90deg, rgba(231, 107, 159, 1) 30%, rgba(116, 57, 184, 0.8) 100%) 0% 0% no-repeat padding-box",height:"2.5vh",borderRadius:'5px'}} />
                            </Grid>
                            <Grid item xs={2} md={1} className="center">78%</Grid>
                            <Grid item xs={0} md={2}></Grid>
                        </Grid>
                        <Grid item xs={12}  className="baravg">
                            <hr />
                        </Grid>
                    </Grid>


                    
                </Grid>
            </Container>
            </div>
        </div>
    );
    }
}



export default AnalyticsBoard;