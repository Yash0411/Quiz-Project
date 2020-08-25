import React from 'react';
import { Button} from 'reactstrap';
import {Grid} from '@material-ui/core';


const Question = (question) => {

    const answers = question.question.answers.map((answer) => {
        return(
            <Grid xs={12} container className='cont1r' alignItems='center'>
                <Grid item xs={2} md={1}>
                {answer.selected === false ?                         
                        <Button className='option' >{String.fromCharCode(question.question.answers.indexOf(answer)+65)}</Button>
                    : 
                    <Button className='option active'  >{String.fromCharCode(question.question.answers.indexOf(answer)+65)}</Button>
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
                    {question.question.question}
                </Grid>

                <Grid
                    container
                    className='cont1r qtext'
                >
                    {question.question.ansimg === false ?                         
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

            </Grid>
    )

}
export default Question;