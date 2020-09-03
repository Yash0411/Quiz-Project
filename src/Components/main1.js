import React, { Component } from 'react';
import { Container} from 'reactstrap';
import Login from './login';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';
import AllSubjects from './allsubjects';
import Subject from './subjectdetail';
import SubTopic from './subtopicdetails';
import AllQuiz from './allquiz';
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




class Main1 extends Component {

    componentDidMount(){
        document.title = "Quiz App"
      }


    render(){
    return(
        <Container>

            <Switch>
              <Route path='/login' component={Login} />
              <Route exact path='/allquizes' component={AllQuiz}/>
              <Route exact path='/:subjectdetail/assesment/:subtopic/test' component={Test}/>
              <Route exact path='/:subjectdetail/assesment/test/submitted' component={TestSubmitted}/>
              <Route exact path='/:subjectdetail/assesment/:subtopic/checktest' component={CheckTest}/>
              <Route exact path='/:subjectdetail/assesment/test/leaderboard' component={Leaderboard}/>
              <Route exact path='/assignments' component={Assignments}/>
              <Route exact path='/assignments/assignmentdetails/:subject' component={AssignmentsDetail}/>
              <Redirect to="/login" />
          </Switch>
            
               
        </Container>
    );
    }
}

export default Main1;