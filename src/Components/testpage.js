import React, { Component } from 'react';
import {Button } from 'reactstrap';
import {Grid,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Question from './question';
import {questions} from '../data/tests';
import './testpage.css' ;



class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions:questions,
            selected :0,
            answers : [],
            num : [1,2,3,4,5,6,7,8,9,10,11]
        };
        this.addans = this.addans.bind(this);
    }

    addans(answer) {
        this.state.answers.push(answer);
        this.setState ( {selected:(this.state.selected+1)%(this.state.num.length)} );
        console.log(this.state.answers)
    }

    render(){

        const number = this.state.num.map((number) => {
            if(number-1 === this.state.selected){
                return(                       
                    <Grid xs={2} md={2} sm={2} lg={2} className="snumber active" onClick={()=>{
                        this.setState({
                            selected:number-1
                        })       
                    }}> 
                        {number}
                    </Grid>
                )
            }
            else{
            return(
                <Grid xs={2} md={2} sm={2} lg={2} className="snumber"  onClick={()=>{
                    this.setState({
                        selected:number-1
                    })       
                }}>  
                    {number}
                 </Grid> 
            )
            }
        })

        
        return(
            <div className="bg">
                <div style={{background:"linear-gradient(45deg, rgb(190, 40, 81,0.65) 10%, rgb(250, 229, 113,0.8) 80%)"}}>
                    <Grid
                        container
                        alignItems="center" 
                        xs={12}
                        className="appbar"   
                        >
                        <Grid item xs={2}
                            container
                            spacing={0}      >
                            <Link to = {`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}`}><Button className='back' style={{color:'red',fontSize:'x-small'}}>
                            <i class="fa fa-chevron-left fa-lg" ></i>
                            </Button>
                            </Link>
                        </Grid>

                        <Grid item xs={6}>                        
                                Practise Test
                        </Grid>

                        <Grid item xs={1}></Grid>
                        
                        <Grid item className='timeleft' xs={3}  >
                            4:59 mins left
                        </Grid>
                    </Grid>
            </div>

            <div className="scrollmenu scrollmenu1"> 
                    {number}                
            </div>

            <Container className='cont15'>
            <Container style={{paddingBottom:'10%'}}>
                <Grid>
                    <Grid
                        container
                        alignItems="center" 
                        xs={12} 
                    >
                        <Grid item xs={2} md={1} >
                            <Button boxShadow={5}  className='backtest q' onClick={()=>{this.setState ({selected:(this.state.selected-1)%(this.state.num.length)} )}}>
                            <i class="fa fa-chevron-left fa-lg" ></i>
                            </Button>
                        </Grid>
                        <Grid item xs={2} className='b500'>
                            Previous
                        </Grid>
                        <Grid md={6} xs={4}></Grid>
                        <Grid item xs={2} className='right b500'>
                            Next
                        </Grid>
                        <Grid item  xs={2} md={1} className='right'>
                            <Button boxShadow={5}  className='backtest q' onClick={()=>{this.setState ( {selected:(this.state.selected+1)%(this.state.num.length)} )}}>
                            <i class="fa fa-chevron-right fa-lg" ></i>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        alignItems="center" 
                        xs={12} 
                        className='cont2'
                    >
                        <Grid item xs={6} className='b500 question'>
                            Question {this.state.selected+1}
                        </Grid>                       
                        <Grid item  xs={6} className='right b500 marks'>
                            {this.state.questions[this.state.selected].marks} Marks
                        </Grid>
                    </Grid>
                </Grid>
                    <Question question={this.state.questions[this.state.selected]} addans={this.addans} />
                <Grid className='cont1' style={{textAlign:'right'}}>
                    <Link to='/subjectdetail/assesment/test/submitted'><Button className='submit'>Submit</Button></Link>
                </Grid>

            </Container>
            </Container>
        </div>
        );
    }
}



export default Test;