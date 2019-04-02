import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../pages/Home';
import Generators from '../pages/Generators';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';
import { Colors } from '../Constants';

interface AppState {
    toggle: boolean;
}

class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toggle: true
        };
    }
    public render() {
        return (
            <div
                id="AppWrapper"
                style={{
                    minHeight: '100vh',
                    backgroundImage: `linear-gradient(to bottom right, white, ${
                        Colors.blue
                    }25)`
                }}
            >
                <HashRouter>
                    <div>
                        <NavBar />
                        <div>
                            <Switch>
                                <Route exact={true} path="/" component={Home} />
                                <Route path="/dnd" component={Generators} />
                                <Route path="/blog" component={Blog} />
                                <Route path="/projects" component={Projects} />
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default App;
