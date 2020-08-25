import React, { Component } from 'react';
import {Button} from 'reactstrap';
import {Grid,Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import './Blogs.css' ;



class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles:[
                {
                    name:'TELGU',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:false
                },{
                    name:'ENGLISH',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:true
                },{
                    name:'HINDI',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                    diff:true
                },{
                    name:'MATHEMATICS',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },{
                    name:'SCIENCE',
                    vid:12,
                    exams:3,
                    sub:3,
                    progress:68,
                    color1:'rgb(40, 178, 241)',
                    color2:'rgb(110, 194, 233)',
                },
            ]
        };
    }



    render(){

        const chapters =this.state.articles.map((article) => {
            return (
                <Grid item xs={12} sm={6} md={4} lg={4} >
                <Card style={{margin:'20px',textAlign:'left',borderRadius:'5px'}}>
                    <CardActionArea>
                        <img
                        src={require("../imgs/Blog.PNG")}
                        title="Contemplative Reptile"
                        width="100%"
                        />
                        <CardContent style={{paddingTop:'5px'}}>
                            <Grid container>
                                <Grid item xs={12} className="info">
                                    Tags will be shown here
                                </Grid>
                                <Grid item xs={12} className="blogdesc">
                                    Title Of blog will come here and above is the feature image...
                                </Grid>
                                <Grid item xs={12} className="read">
                                    5 minute read
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            );
        });

        


        
    return(
        <div className="blogbg">
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
                        <Link to="/dashboard"><Button className='backsub' >
                        <i class="fa fa-chevron-left fa-lg" ></i>
                        </Button>
                        </Link>
                    </Grid>

                    <Grid item style={{textAlign:'end'}}>
                        <div>
                        
                        <div className="welcome">{this.state.articles.length} articles </div>
                           
                           <div className="subjectname blog"  >BLOGS</div>
                        </div>
                    </Grid>
                </Grid>


                <Grid container spacing={5} className="cont1" >  
                    <Grid container style={{marginTop:'1rem',textAlign:'center'}} >
                    {chapters} 
                    </Grid>
                </Grid>       
                  

            </Container>
        </div>
    );
    }
}



export default Blogs;