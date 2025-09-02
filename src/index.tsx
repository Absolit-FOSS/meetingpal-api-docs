import { render } from 'preact';
import React from 'preact/compat';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import './style.css';

const App: React.FC = () => {
    return (
        <div>
            <SwaggerUI url="swagger.json" />
        </div>
    );
};

export default App;

if (typeof window !== 'undefined') {
    render(<App />, document.getElementById('app'));
}
