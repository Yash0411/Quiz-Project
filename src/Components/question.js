import React,{Component} from 'react';
import { Button} from 'reactstrap';
import {Grid} from '@material-ui/core';


class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected : null,
        };
        this.add = this.add.bind(this);
    }

    add(answer) {
        this.props.addans(this.state.selected)
        this.setState({            
            selected : null,
        })
    }

    render() {

    const answers = this.props.question.answers.map((answer,key ) => {
        return(
            <Grid xs={12} container className='cont1r' alignItems='center'>
                <Grid item xs={2} md={1}>
                {this.state.selected != key ?                         
                        <Button className='option' onClick={()=> {this.setState({ selected : key });}} >{String.fromCharCode(key+65)}</Button>
                    : 
                    <Button className='option active' >{String.fromCharCode(key+65)}</Button>
                }
                    
                </Grid>
                <Grid item xs={10} className='ans'>
                    {answer.text}
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
                    {this.props.question.question}
                </Grid>

                <Grid
                    container
                    className='cont1r qtext'
                >
                    {this.props.question.ansimg === false ?                         
                        <div>{answers}</div>
                    : 
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
                    }
                </Grid>
                <Grid>
                    <Button onClick={this.add}>Submit answer</Button>
                </Grid>

            </Grid>
    )
    }

}
export default Question;