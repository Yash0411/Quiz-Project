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
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'ENGLISH',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'HINDI',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'MATHEMATICS',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'BIOLOGY',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'SOCIAL',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },{
                    name:'GENERAL',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)'
                },
            ]
        };
    }


    render(){

        const subjects =this.state.subjects.map((subject) => {
            return (
                <Grid item xs={6} md={3} >
                        <Link to={`/subjectdetail`} style={{ textDecoration: 'none' }}>
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