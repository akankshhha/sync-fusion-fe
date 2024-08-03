import * as React from 'react';
import '../utilities/customClasses.css'

export interface IAppProps {
}

export default function App(props: IAppProps) {
    return (
        <div className="container-basic-style responsive-width">
            <h1>This is a about page!</h1>
        </div>
    );
}
