// This file is the playground used for development purposes (npm run playground)
// not part of the library
import React from 'react';
import DefDateTime from '../DefDateTime';

// import moment from 'moment';
// import 'moment/locale/tzm-latn';
// moment.locale('tzm-latn');

import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

class App extends React.Component {
    state = {
        date: new Date()
    };

    onChangeDateTime(date) {
        console.log('date = ' + date);
        //季视图赋值选项
        let datetimeFormat = 'YYYYQQ';
        if (datetimeFormat.indexOf('QQ')) {
            let replaceWith$ = datetimeFormat.replace('QQ', '$Q');
            // console.log('季周期' + date.format(replaceWith$).replace(/\$/g, 'Q'));
        } else {
            // console.log('季周期' + date.format(datetimeFormat));
        }
    }

    isValidDate(currentDate) {
        //季视图赋值选项
        let datetimeFormat = 'YYYYMMDD';
        let currentQuarter;
        if (datetimeFormat.indexOf('QQ')) {
            let replaceWith$ = datetimeFormat.replace('QQ', '$Q');
            currentQuarter = currentDate.format(replaceWith$).replace(/\$/g, 'Q');
        } else {
            currentQuarter = currentDate.format(datetimeFormat);
        }
        return '19201204' <= currentQuarter;
    }

    render() {
        return (
            <div>
                <div style={{display: 'block'}}>
                    <DefDateTime closeOnSelect={true} dateFormat={'YYYY-MM-DD'} timeFormat={false} onChange={this.onChangeDateTime} isValidDate={this.isValidDate}/>
                </div>
                <br/>
                <input type={'text'} value={'nilex'} readOnly={true}/>
                <div style={{display: 'inline-block'}}>
                    <DefDateTime inputProps={{name: 'solid', autoComplete: 'off', readOnly: true}} closeOnSelect={true} dateFormat={'YYYY-MM-DD'} timeFormat={false} onChange={this.onChangeDateTime} isValidDate={this.isValidDate}/>
                </div>
                {/*<DefDateTime closeOnSelect={true} dateFormat={'YYYY-QQ'} timeFormat={false} value={new Date(2000, 0, 15, 2, 2, 2, 2)}/>*/}
                {/*<DefDateTime dateFormat={'YYYY-QQ'}  closeOnSelect={true}/>*/}
            </div>
        );
    }
}

export default App;
