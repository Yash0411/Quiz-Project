import React, { Component } from 'react';
import {  Row, Col, Form} from 'reactstrap';
import {TextField,Box,Button} from '@material-ui/core'
import {withRouter} from 'react-router-dom';
import './login.css'
import { database } from '../data/database'



class Login extends Component {

  
    constructor(props) {
        super(props);
        this.state = {
            name : null,
            pass : null,
        };
        this.login = this.login.bind(this);
    }

    login() {
        console.log(database[this.state.name])
        if(database[this.state.name]) {
            if(this.state.pass === database[this.state.name].pass) {
                console.log("Logged In")
            }
            else {
                alert("Password don't match")
            }
        }
        else{
            alert("Invalid user")
        }

        this.props.history.replace("/allquizes")

    }

    render(){
    return(
        <div >
            <center>
            <Form>
                <div className="login">
                    <Row>
                    <Col xs="10" sm="10" md="7" lg="5">
                        <Box color="text.primary" clone >
                        <img src={require('../logo.svg')} className="App-logo" alt="logo" />
                        </Box>
                        </Col>

                   
                    <Col xs="12" className="login-inputs">
                        <center>

                        
                        
                        <Col xs="10" sm="10" md="7" lg="5">
                        <Box  >
                            <TextField
                                id="username"
                                style={{ margin: 8,width:'80%',borderRadius:'1000px' }}
                                placeholder="User Name"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value = {this.state.name}
                                onChange = {(e)=>{ this.setState({ name : e.target.value }) }}
                                margin="dense"
                                variant="outlined"
                                inputProps={inputProps}

                            />
                        </Box>
                        </Col>
                        
                        <Col xs="10" sm="10" md="7" lg="5">
                        <Box>
 
                            <TextField
                                id="pass"
                                type="password"
                                style={{ margin: 8,width:'80%',borderRadius:'100px' }}
                                placeholder="Password"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.pass}
                                onChange = {(e)=>{ this.setState({ pass : e.target.value }) }}
                                margin="dense"
                                variant="outlined"
                                inputProps={inputProps}
                            />

                        </Box>
                        </Col>
                        
                        <Box>
                        <Col xs="6" sm="6" md="5" lg="3">
                            <div
                            onClick={this.onSubmit}    
                            style={{
                                textDecoration:'none'}}                    
                            >
                                <Button
                                    style={{ 
                                        background: 'linear-gradient(45deg, rgb(11, 180, 192) 30%, rgb(40, 178, 241) 90%)',
                                        width:'150px',
                                        borderRadius:'10px',
                                        color:"white",
                                        marginTop:10,
                                    }}
                                    size="medium"
                                    onClick={this.login}
                                    >
                                Login
                                </Button>
                            </div>
                        </Col>
                        </Box>
                        </center>
                    </Col>
                    </Row>
                </div>
            </Form>
            </center>
        </div>
    );
    }
}

const inputProps = {
    style:{fontFamily: 'Helvica', color: 'black',paddingLeft:"25px"}
 };

export default withRouter(Login);