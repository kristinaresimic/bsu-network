import NextHead from "next/head";
import React from "react";
import handleViewport from "react-in-viewport";
import AdventagesComp from "../components/Adventages";
import BSUComp from "../components/BSU";
import Footer from "../components/Footer";
import JoinBSUComp from "../components/JoinBSU";
import LandingPageComp from "../components/LandingPage";
import NodesComp from "../components/Nodes";
import NoteComp from "../components/Note";
import OverviewComp from "../components/Overview";
import RememberComp from "../components/Remember";
import StatisticsComp from "../components/Statistics";
import favicon from "../img/bsu/logo-bsu.svg";
import "../styles/styles.scss";

const LandingPage = handleViewport(LandingPageComp);
const Nodes = handleViewport(NodesComp);
const Remember = handleViewport(RememberComp);
const JoinBSU = handleViewport(JoinBSUComp);
const Adventages = handleViewport(AdventagesComp);
const Note = handleViewport(NoteComp);
const Overview = handleViewport(OverviewComp);
const Statistics = handleViewport(StatisticsComp);
const BSU = handleViewport(BSUComp);

const index = () => {
  return (
    <div className=''>
      <NextHead>
        <meta charSet='UTF-8' />
        <title>BSU Network</title>
        <link rel='shortcut icon' href={favicon} />
      </NextHead>
      <LandingPage onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <Nodes onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <Remember onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <JoinBSU onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <Adventages onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <Note onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      {/* <Overview onEnterViewport={() => {}} onLeaveViewport={() => {}} /> */}
      <Statistics onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <BSU onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <Footer />
    </div>
  );
};

export default index;
