import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.nom}
                </td>
                <td>
                    {this.props.obj.prenom}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.adresse}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
            </tr>
        );
    }
}

export default DataTable;