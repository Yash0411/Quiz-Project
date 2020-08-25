import React, { Component } from 'react';
import { Container} from 'reactstrap';
import Login from './login';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';
import AllSubjects from './allsubjects';
import Subject from './subjectdetail';
import SubTopic from './subtopicdetails';
import AssmentTest from './AssesmentTest';
import Test from './testpage';
import TestSubmitted from './testsubmitted';
import CheckTest from './CheckTest';
import Leaderboard from './LeaderBoard';
import Lessons from './Lessons';
import LiveStream from './LiveStream';
import Blogs from './Blogs'
import AnalyticsBoard from './AnalyticsBoad';
import Assignments from './Assignments';
import AssignmentsDetail from './AssignmentsDetail';




class Main extends Component {

    componentDidMount(){
        document.title = "Quiz App"
      }


    render(){
    return(
        <Container>

            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/allsubjects' component={AllSubjects}/>
              <Route exact path='/subjectdetail' component={Subject}/>
              <Route exact path='/Live Streaming' component={LiveStream}/>
              <Route exact path='/BlogPosts' component={Blogs}/>
              <Route exact path='/analytics' component={AnalyticsBoard}/>
              <Route exact path='/subjectdetail/subtopic' component={SubTopic}/>
              <Route exact path='/subjectdetail/lessons' component={Lessons}/>
              <Route exact path='/subjectdetail/assesment' component={AssmentTest}/>
              <Route exact path='/subjectdetail/assesment/test' component={Test}/>
              <Route exact path='/subjectdetail/assesment/test/submitted' component={TestSubmitted}/>
              <Route exact path='/subjectdetail/assesment/checktest' component={CheckTest}/>
              <Route exact path='/subjectdetail/assesment/leaderboard' component={Leaderboard}/>
              <Route exact path='/assignments' component={Assignments}/>
              <Route exact path='/assignments/assignmentdetails' component={AssignmentsDetail}/>
              <Redirect to="/login" />
          </Switch>
            
               
        </Container>
    );
    }
}

export default Main;