import React, { Component } from 'react';
import { Row, Container, Col,Button,Progress  } from 'reactstrap';
import {Grid,Box,Card,Typography,CardContent} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './dashboard.css' ;
import Drawer from './Drawer';



class Dashboard extends Component {

  


    render(){
    return(
        <div style={{backgroundImage: "url('../../../../Portfolio/My Portfolio/assets/backgrounds/work-5.jpg')"}}>
        <Container style={{align:"center",marginTop:"6%"}}>
            <Row>
            
                <Grid container spacing={3} xs={12} style={{margin:"0"}}>
                    <Grid md="2" xs=""></Grid>
                    <Grid item xs={6} md={3}>
                        <Link to="/allsubjects" style={{ textDecoration: 'none' }}>
                        <Card className="btn1" style={{borderRadius:"8px"}}>
                            <CardContent className="dashboard-btn">
                                <Typography  style={{fontWeight:'bold'}}>
                                    LESSONS
                                </Typography>
                                <Typography  gutterBottom style={{fontSize:"xx-small"}}>
                                    8 Subjects
                                </Typography>   
                                <Typography  variant="body2" component="p">
                                    <Row >
                                        <Col xs={8} style={{textAlign: 'right',fontSize:"10px"}}>68%</Col>
                                        <Col xs={8} style={{background:"rgb(109, 226, 55)"}}>
                                        <Progress variant="determinate" value={25} style={{background:"white ",height:"5px"}} />
                                        </Col>
                                    </Row>
                                </Typography>                           
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid md="2"></Grid>
                    <Grid item xs={6} md={3}>
                        <Link to="/assignments" style={{ textDecoration: 'none' }}>
                        <Card className="btn2" style={{borderRadius:"8px"}}>
                            <CardContent className="dashboard-btn">
                                <Typography  style={{fontWeight:'bold'}}>
                                    ASSIGNMENTS
                                </Typography>
                                <Typography  gutterBottom style={{fontSize:"xx-small"}}>
                                    3 Subjects - 12 Videos - 3 Tests
                                </Typography>   
                                <Typography  variant="body2" component="p">
                                    <Row >
                                        <Col xs={8} style={{textAlign: 'right',fontSize:"10px"}}>68%</Col>
                                        <Col xs={8} style={{background:"rgb(110, 194, 233)"}}>
                                        <Progress variant="determinate" value={25} style={{background:"white ",height:"5px"}} />
                                        </Col>
                                    </Row>
                                </Typography>                           
                            </CardContent>
                        </Card>
                        </Link>
                    </Grid>
                    <Grid md="2"></Grid>
                </Grid>            
            </Row>

            <br/>
            <Row>
            <Grid container spacing={3} xs={12} style={{margin:"0"}}>
                    <Grid md="2" xs=""></Grid>
                    <Grid item xs={6} md={3} className="welcome">
                        Welcome Back !
                    </Grid>
                    <Grid md="12" xs="2"></Grid>
                    <Grid md="2" xs="2"></Grid>
                    <Grid item xs={10} md={8} className="s-name" style={{paddingTop:"0"}}>
                        Student Name
                    </Grid>
                </Grid>
            </Row>

            <Row>
            <Grid container spacing={3} xs={12} >
                    <Grid md="3" xs="1"></Grid>
                    <Grid item xs={6} md={3} >
                        <Link to="/analytics"><Button className="btn3" >Analytics board</Button></Link>
                    </Grid>
                    
                </Grid>
            </Row>
            
            
            <Box display="flex" justifyContent="flex-end" m={1} p={1} >
                <Button  p={1} m={3} className="btn4">
                    <Drawer/>
                </Button >
            </Box>
        </Container>
        </div>
    );
    }
}



export default Dashboard;