import * as React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

render((
    <div>
        <h1>Playframework, React JS, TS and webpack</h1>
        <Greeter name="Ninja" />
    </div>), document.getElementById("app"));
