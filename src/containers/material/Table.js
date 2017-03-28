import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
    tableFooter: {
        margin: '10px auto 5px',
    },
};

const tableData = [
    {
        name: 'John Smith',
        code: 'ЭБ.ЕБПС.01',
        value: 1,
        status: 'Черновик',
        selected: true,
    },
    {
        name: 'Randal White',
        status: 'Черновик',
        value: 1,
        code: 'ЭБ.ЕБПС.02',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Черновик',
        value: 1,
        code: 'ЭБ.ЕБПС.03',
        selected: true,
    },
    {
        name: 'Steve Brown',
        status: 'Черновик',
        value: 1,
        code: 'ЭБ.ЕБПС.04',
    },
    {
        name: 'Joyce Whitten',
        status: 'Черновик',
        value: 1,
        code: 'ЭБ.ЕБПС.05',
    },
    {
        name: 'Samuel Roberts',
        status: 'Черновик',
        value: 1,
        code: 'ЭБ.ЕБПС.06',
    },
    {
        name: 'Adam Moore',
        status: 'Черновик',
        value: 1,
        code: 'ЭБ.ЕБПС.07',
    },
];

export default class TableExampleComplex extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: true,
            height: '300px',
        };
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <div>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}
                    >
                        <TableRow>
                            <TableHeaderColumn colSpan="4" /*tooltip="Требования"*/ style={{textAlign: 'center', fontSize: '2.1em'}}>
                                Требования
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="Номер">№</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Код требования">Код требования</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Оператор">Оператор</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Статус">Статус</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                    >
                        {tableData.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn>{index+1}</TableRowColumn>
                                <TableRowColumn>{row.code}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter style={styles.tableFooter}>
                        <TableRow>
                            <TableHeaderColumn colSpan="4" style={{textAlign: 'center', fontSize: '1.7em'}}>
                                Total: {tableData.reduce((previousValue, currentValue, index, array) => {
                                return previousValue + currentValue.value;
                            }, 0)}
                            </TableHeaderColumn>
                        </TableRow>
                    </TableFooter>
                </Table>

                <div style={styles.propContainer}>
                    <h3>Table Properties</h3>
                    <TextField
                        floatingLabelText="Table Body Height"
                        defaultValue={this.state.height}
                        onChange={this.handleChange}
                    />
                    <Toggle
                        name="fixedHeader"
                        label="Fixed Header"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.fixedHeader}
                    />
                    <Toggle
                        name="fixedFooter"
                        label="Fixed Footer"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.fixedFooter}
                    />
                    <Toggle
                        name="selectable"
                        label="Selectable"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.selectable}
                    />
                    <Toggle
                        name="multiSelectable"
                        label="Multi-Selectable"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.multiSelectable}
                    />
                    <Toggle
                        name="enableSelectAll"
                        label="Enable Select All"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.enableSelectAll}
                    />
                    <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
                    <Toggle
                        name="deselectOnClickaway"
                        label="Deselect On Clickaway"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.deselectOnClickaway}
                    />
                    <Toggle
                        name="stripedRows"
                        label="Stripe Rows"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.stripedRows}
                    />
                    <Toggle
                        name="showRowHover"
                        label="Show Row Hover"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.showRowHover}
                    />
                    <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
                    <Toggle
                        name="showCheckboxes"
                        label="Show Checkboxes"
                        onToggle={this.handleToggle}
                        defaultToggled={this.state.showCheckboxes}
                    />
                </div>
            </div>
        );
    }
}