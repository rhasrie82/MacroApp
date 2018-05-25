import React, {Component} from 'react';
import TodoList from './ToDo/ui/TodoList';
import StateProvider from './wrappers/StateProvider';
import KeyStrokeHandler from './wrappers/KeyStrokeHandler';

import "./ToDo/assets/style/index.css";

class Shopping extends Component {
    render() {
        return (
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoList/>
                </KeyStrokeHandler>
            </StateProvider>
        );
    }
}

export default Shopping;