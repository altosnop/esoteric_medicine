import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Main from "../../pages/Main"
import AboutMe from "../../pages/AboutMe"
import Areas from "../../pages/Areas"
import MyServices from "../../pages/MyServices";
import MeditationTechniques from "../../pages/MeditationTechniques"
import InstancesOfPractice from "../../pages/InstancesOfPractice"

function MainRoutes() {
  const dispatch = useDispatch();

  return (
    <>
      <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/about-me" render={() => <AboutMe />} />
          <Route exact path="/areas" render={() => <Areas />} />
          <Route exact path="/my-services" render={() => <MyServices />} />
          <Route exact path="/meditation-techniques" render={() => <MeditationTechniques />} />
          <Route exact path="/instances-of-practice" render={() => <InstancesOfPractice />} />
      </Switch>
    </>
  );
}

export default MainRoutes;
