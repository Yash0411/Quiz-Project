import React, { Component } from 'react';
import {Button } from 'reactstrap';
import {Grid,Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {questions} from '../data/tests';
import './testpage.css' ;


const AnsQuestion = (question) => {

    const answers = question.question.answers.map((answer) => {
        return(
            <Grid xs={12} container className='cont1r' alignItems='center'>
                <Grid item xs={2} md={1}>
                {answer.selected === false ?                         
                        <Button className='option' >{String.fromCharCode(question.question.answers.indexOf(answer)+65)}</Button>
                    : 
                    <Button className='option ans'  >{String.fromCharCode(question.question.answers.indexOf(answer)+65)}</Button>
                }
                    
                </Grid>
                <Grid item xs={10} className='ans'>
                    {answer.text}
                </Grid>

                <Grid item xs={12} className='ans'>
                    {answer.selected === false ?                         
                            <span></span>
                        : 
                        <Grid xs={12} container className='cont1r qaddimg solution' >      
                            <Grid item xs={1}></Grid>                      
                            <Grid item xs={6} >
                                Solution :
                            </Grid>
                            <Grid item xs={3} >
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        )
    })

    return(
        <Grid>
                <Grid
                    container
                    className='cont1r qtext'
                >
                    {question.question.question}
                </Grid>

                <Grid
                    container
                    className='cont1r qtext'
                >
                    {question.question.ansimg === false ?                         
                        <div>{answers}</div>
                    : 
                    <Grid xs={12} >
                        <Grid xs={12} container className='cont1r qaddimg' alignItems='center' >
                            <Grid item xs={3} >
                            </Grid>
                            <Grid item xs={6} style={{border:'2px dashed rgb(180, 180, 180)',borderRadius:'6px'}}>
                                <center>
                                    {/*<input type='file'></input>*/}
                                    Upload Image
                                </center>
                            </Grid>
                            <Grid item xs={3} >
                            </Grid>                           
                        </Grid>
                        <Grid item xs={12} className='ans'>                               
                            <Grid xs={12} container className='cont1r qaddimg solution' >      
                                <Grid item xs={1}></Grid>                      
                                    <Grid item xs={6} >
                                        Solution | Feedback :
                                    </Grid>
                                    <Grid item xs={3} >
                                    </Grid>
                            </Grid>                
                        </Grid>
                    </Grid>
                    }
                </Grid>

            </Grid>
    )

}


class CheckTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions:questions,
            selected :0,
            num : [1,2,3,4,5,6,7,8,9,10,11]
        };
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
                            <Link  to = {`/subjectdetail/assesment/${window.location.href.substr( window.location.href.lastIndexOf('/') + 1)}`}><Button className='back' style={{color:'red',fontSize:'x-small'}}>
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
                        <Grid item  xs={6} className='right b500 marks' style={{color:'rgb(44, 206, 4)'}}>
                            {this.state.questions[this.state.selected].marks} Marks
                        </Grid>
                    </Grid>
                </Grid>
                <AnsQuestion question={this.state.questions[this.state.selected]}/>
                
            </Container>
            </Container>
        </div>
        );
    }
}



export default CheckTest;