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
import Test1 from './Test1';




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
              <Route exact path='/allquizes/0' component={Test1}/>
              <Route exact path='/allquizes/1' component={Test}/>
              <Route exact path='/allquizes/0/submitted' component={TestSubmitted}/>
              <Route exact path='/allquizes/1/leaderboard' component={Leaderboard}/>
              <Redirect to="/login" />
          </Switch>
            
               
        </Container>
    );
    }
}

export default Main1;