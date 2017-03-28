import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Tabs from './material/Tabs'
import RefreshIndicator from 'material-ui/RefreshIndicator';
import LinearProgress from 'material-ui/LinearProgress';

//menu
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//checkbox
import Checkbox from 'material-ui/Checkbox';

const items = [];
for (let i = 0; i < 100; i++ ) {
    items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

class Root extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {value: 10};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {

        const style = {
            marginRight: 20,
            container: {
                position: 'relative',
            },
            refresh: {
                display: 'inline-block',
                position: 'relative',
                marginRight: '10px',
            },
            progress: {
                margin: '10px auto 5px',
            },
            checkbox: {
                display: 'inline-block',
                width: '150px',
                marginBottom: 16,
                marginLeft: 20,
            },
        };

        return (
            <Provider store={this.props.store}>
                <div>
                    <div>Greetings!</div>
                    <RaisedButton label="Обновить"  style={style}/>
                    <FlatButton label="Сохранить"  primary={true} style={style}/>
                    <FloatingActionButton mini={true} secondary={true} style={style} >
                        <ContentAdd />
                    </FloatingActionButton>
                    <TextField

                        floatingLabelText="Плавающий заголовок поля"
                    />
                    <RefreshIndicator
                        size={50}
                        left={20}
                        top={0}
                        status="loading"
                        style={style.refresh}
                    />
                    <Checkbox
                        label="Выбор"
                        style={style.checkbox}
                    />
                    <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
                        {items}
                    </DropDownMenu>
                    <LinearProgress
                        style={style.progress}
                        mode="indeterminate" />
                    <Tabs/>
                </div>
            </Provider>
        )
    }
}

export default Root