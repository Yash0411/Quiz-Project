import React, { Component } from 'react';
import {Col,Button,Progress  } from 'reactstrap';
import {Grid,Container, Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Leaderboard.css' ;
import { ranklist } from '../data/ranklist';



class Leaderboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ranklist:ranklist
        };
    }



    render(){

        const students =this.state.ranklist.map((student) => {
            return (                
                <Grid container alignItems='center' item  xs={12}>
                    <Grid item xs={2} md={1} className='rankgrid'>
                        { this.state.ranklist.indexOf(student)<3 ?
                            <img src={require(`../imgs/medal${this.state.ranklist.indexOf(student)}.jpg`)} className='medals'  alt="Image here"/>                            
                            :
                            <Button className='rank'>
                                {this.state.ranklist.indexOf(student)+1}
                            </Button>
                        }
                    </Grid>
                    <Grid item container alignItems='center' item  xs={10} className='ranklist shadow qtext'>
                        <Grid item xs={5}>
                            {student.name}
                        </Grid>
                        <Grid item xs={4}>
                            <Col xs={4} style={{background:'whitesmoke'}}>
                                <Progress variant="determinate" value={student.marks} className='studbar' style={{background:"rgba(255, 100, 40)",height:"4.5px", borderRadius:'10px'}} />
                            </Col>
                        </Grid>
                        <Grid item xs={3} style={{textAlign:'center'}}>
                            {student.marks}
                        </Grid>
                    </Grid>
                </Grid>
            );
        });


        
    return(
        <div style={{background:"linear-gradient( rgba(255, 105, 0, 0.48) 30%, rgba(255, 80, 35, 0.6) 70%)",height:'100vb',minHeight:window.innerHeight,paddingBottom:'30px'}}>
            <div style={{background:"rgba(230, 0, 35, 0.3)"}} className='shadow'>
                    <Grid
                        container
                        alignItems="center" 
                        xs={12}
                        className="appbar"   
                        >
                        <Grid item xs={2}
                            container
                            spacing={0}      >
                            <Link  to={`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}`}><Button className='back' style={{color:'red',fontSize:'x-small'}}>
                            <i class="fa fa-chevron-left fa-lg" ></i>
                            </Button>
                            </Link>
                        </Grid>

                        <Grid item xs={10}>                        
                                Final Chapter Test - Leaderboard
                        </Grid>

    
                    </Grid>
            </div>

            <div>
                <Box
                    display="flex"
                    alignItems="flex-start"
                    p={1}
                    m={1}
                    justifyContent="center"
                    css={{ height: 140 }}
                >
                    <Box  alignSelf="flex-end" flexDirection='column' style={{margin:'10px'}}>
                        <Box>
                            <img src={require('../imgs/crown.jpg')} height='50px' alt="Image here"/>
                        </Box>
                        <Box style={{fontSize:'x-small'}}>
                            Name Of Student
                        </Box>
                    </Box>
                    <Box  flexDirection='column' style={{margin:'10px'}}>
                        <Box>
                            <img src={require('../imgs/crown.jpg')} height='50px' alt="Image here" />
                        </Box>
                        <Box style={{fontSize:'x-small'}}>
                            Name Of Student
                        </Box>
                    </Box>
                    <Box alignSelf="flex-end" flexDirection='column' style={{margin:'10px'}}>
                        <Box>
                            <img src={require('../imgs/crown.jpg')} height='50px' alt="Image here"/>
                        </Box>
                        <Box style={{fontSize:'x-small'}}>
                            Name Of Student
                        </Box>
                    </Box>
                </Box>
            </div>

            <div>
                <Container className='cont2'>
                    <Grid container
                        spacing={2} 
                        alignItems="center">
                            {students}
                    </Grid> 
                </Container>
            </div>
        </div>
    );
    }
}



export default Leaderboard;