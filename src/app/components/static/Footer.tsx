import * as React from 'react';
import { poppins } from '../../utilities/fonts';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <div className={poppins.className}>
      This is footer!
    </div>
  );
}
