import React from 'react';
import cn from 'classnames';

import './custom.css';
import s from './App.modules.scss';

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            YES WE1 DID IT! This is App Components
        </div>
    )
}

export default App;
