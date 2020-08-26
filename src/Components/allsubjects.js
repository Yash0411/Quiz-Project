import React, { Component } from 'react';
import { Row,  Col,Button,Progress  } from 'reactstrap';
import {Grid,Card,Typography,CardContent,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './dashboard.css';



class AllSubjects extends Component {

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
                    color1:'rgba(15, 141, 35, 0.751)',
                    color2:'rgba(0, 221, 0)'
                },{
                    name:'HINDI',
                     vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'ENGLISH',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(177, 130, 238)',
                    color2:'rgb(200, 130, 238,0.7)'
                },{
                    name:'MATHEMATICS',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(255, 120, 143,0.9)',
                    color2:'rgb(255, 215, 84,0.8)'
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgba(172, 25, 0, 0.842)',
                    color2:'rgba(206, 65, 65, 0.788)'
                },{
                    name:'BIOLOGY',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(123, 206, 212)',
                    color2:'rgb(144, 225, 248,0.9)'
                },{
                    name:'SOCIAL',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(255, 123, 0)',
                    color2:'rgb(255, 185, 120)'
                },{
                    name:'GENERAL',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(9, 147, 243)',
                    color2:'rgb(110, 194, 233)'
                },
            ]
        };
    }


    render(){

        const subjects =this.state.subjects.map((subject) => {
            return (
                <Grid item xs={6} md={3} >
                        <Link to={`/subjectdetail/${subject.name}`} style={{ textDecoration: 'none' }}>
                        <Card  style={{borderRadius:"8px",background:`linear-gradient(90deg, ${subject.color1} 30%, ${subject.color2} 90%)`}}>
                            <CardContent className="dashboard-btn">
                                <Typography  style={{fontWeight:'bold'}}>
                                    {subject.name}
                                </Typography>
                                <Typography  gutterBottom style={{fontSize:"xx-small"}}>
                                    {subject.sub} Subjects &middot; {subject.exams} Exams &middot; {subject.vid} Videos
                                </Typography>   
                                <Typography  variant="body2" component="p">
                                    <Row >
                                        <Col xs={8} style={{textAlign: 'right',fontSize:"10px"}}>68%</Col>
                                        <Col xs={8} style={{background:subject.color2}}>
                                        <Progress variant="determinate" value={25} style={{background:"white ",height:"5px"}} />
                                        </Col>
                                    </Row>
                                </Typography>                           
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
            );
        });
    return(
        <div style={{background:"linear-gradient( orange 5%, whitesmoke 30%)",height:window.innerHeight}}>
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
                        <Link to="/dashboard"><Button className='back' >
                        <i class="fa fa-chevron-left fa-lg" ></i>
                        </Button>
                        </Link>
                    </Grid>

                    <Grid item style={{textAlign:'end'}}>
                        <div>
                        
                        <div className="welcome">8 Subjects</div>
                           
                           <div className="subjects" >All Subjects</div>
                        </div>
                    </Grid>
                </Grid>


                <Grid container spacing={2} className="cont1" >
                    
                    {subjects}
                    
                </Grid>        

            </Container>
        </div>
    );
    }
}



export default AllSubjects;