// This file is the playground used for development purposes (npm run playground)
// not part of the library
import React from 'react';
import DefDateTime from '../DefDateTime';

// import moment from 'moment';
// import 'moment/locale/tzm-latn';
// moment.locale('tzm-latn');

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends React.Component { 
    state = {
        date: new Date()
    };

    render() {
        return (
            <div>
                <DefDateTime closeOnSelect={true} dateFormat={'YYYY-MM'} timeFormat={false} />
            </div>
        );
    }
}

export default App;
