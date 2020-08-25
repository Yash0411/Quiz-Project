import React, { Component } from 'react';
import {Button,Input  } from 'reactstrap';
import {Grid,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './LiveStream.css';



class LiveStream extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
               
        };
    }


    render(){

        
    return(
        <div style={{background:"whitesmoke",minHeight:window.innerHeight}}>
            <Container style={{paddingTop:'1rem'}}>   

                <Grid
                    justify="space-between" // Add it here :)
                    container 
                    spacing={24}
                    xs={11}
                    alignItems='center'
                    >
                    <Grid item xs={11}
                        container
                        spacing={0}
                        alignItems="center"
                        className="qtext" >
                        Topic Of Discussion Will Be The Title Here.............
                    </Grid>

                    <Grid item xs={1} style={{textAlign:'end'}}>
                        <Link to="/dashboard"><Button style={{background:'inherit',border:'none'}}>
                        <i class="fa fa-times fa-2x" ></i>
                        </Button>
                        </Link>
                    </Grid>

                    <Grid alignItems='center' container xs={8} className='cont1r'style={{textAlign:'end'}}>
                        <img src={require("../imgs/user.PNG")} height='23px'/>
                        <span className="liveperson">Person going Live</span>
                    </Grid>
                </Grid>


                <Grid alignItems='center' class="footer1">
                    <Grid xs={12} container item  className='liveperson'>
                        <center>
                        Live Stream Is scheduled on 12 Aug 3 pm
                        </center>
                    </Grid>

                    <Grid xs={12} container item alignItems='center' style={{paddingTop:'1rem'}}>
                        <Grid item xs={10}>
                            <Input
                                className='msglive'
                                placeholder="Send Message"
                            />
                        </Grid>
                        <Grid item xs={2} style={{textAlign:'right',color:'skyblue'}}>
                        <i class="fa fa-thumbs-up fa-2x" ></i>
                        </Grid>
                    </Grid>
                </Grid>  

            </Container>
        </div>
    );
    }
}



export default LiveStream;