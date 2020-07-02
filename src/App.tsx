import React from 'react';
import './App.scss';
import { GitHubCardApp } from './components/github-card/GitHubCardApp';
import { Game } from './components/game/Game';
// import {Layout, Breadcrumb, Divider} from 'antd';
import { Layout, Divider } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/nav-bar/NavBar';
import { ComponentList } from './components/component-list/ComponentList';
import { StarMatch } from './components/star-match/StarMatch';
import { Counter } from './components/counter/Counter';
import { GenericForm } from './components/generic-form/GenericForm';

const { Header, Content, Footer } = Layout;

export function App() {
	return (
		<Router>
			<div className='App' id='base-app'>
				<Layout className='layout'>
					<Header>
						<div className='logo' />
						<NavBar />
					</Header>
					<Content style={{ padding: '0 50px' }}>
						{/*<Breadcrumb style={{margin: '16px 0'}}>*/}
						{/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
						{/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
						{/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
						{/*</Breadcrumb>*/}
						<div className='site-layout-content'>
							<Routes />
						</div>
					</Content>
					<Divider />
					<Footer style={{ textAlign: 'center' }}>
						React Application ©2020 Created by Alex Turner
					</Footer>
				</Layout>
			</div>
		</Router>
	);
}

function Routes() {
	return (
		<Switch>
			<Route path={'/'} exact component={Home} />
			<Route path={'/home'} exact component={Home} />
			<Route path={'/games'} component={Game} />
			<Route path={'/github'} component={GitHubCardApp} />
			<Route path={'/git'} component={GitHubCardApp} />
			<Route path={'/components'} component={ComponentList} />
			<Route path={'/starMatch'} component={StarMatch} />
			<Route path={'/genericForm'} component={GenericForm} />
			<Route path={'/navBar'} component={NavBar} />
			<Route path={'/counter'} component={Counter} />
		</Switch>
	);
}

function Home() {
	return (
		<div>
			<h1 style={{ paddingTop: '10px' }}>
				Collection of Simple React Apps
			</h1>
			<Divider />
			<GitHubCardApp />
			<Divider />
			<Game />
		</div>
	);
}
