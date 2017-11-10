import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProps, getPropInfo } from '../actions';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

import './Grid.css';

//-----Modal Style-----
const modalStyle = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        background: '#dddddd',
        padding: '20px'
    }
};

//-----React Component-----
class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        }
    }
    
    //------Modal methods-----
    closeModal = () => {
        this.setState({ showModal: false });
    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    handleOpenProperty = (event, id) => {
        event.preventDefault();
        this.props.getPropInfo(id)
        .then(res => {
            this.openModal();
        });
    } 
    //-------------------------

    componentDidMount() {
        this.props.getProps()
    }

    //-----Component Render method-----
    render() {
        return(
            <div>
                {/* -----Table Component----- */}
                <table className="mainTable">
                    <tbody>
                        {/* -----First Row of Table----- */}
                        <tr style={{ backgroundColor: '#808e8d' }}>
                            <th>PropID</th>
                            <th>OwnerName</th>
                            <th>DBAName</th>
                            <th>LegalDescription</th>
                            <th>SitusStreet</th>
                        </tr>
                    </tbody>
                    {this.props.properties.results.map(result => {
                            return (
                                <tbody key={result.PropID}>
                                    {/* -----Table of Property Data from Redux Store----- */}
                                    <tr>
                                        <th><a href="#link" onClick={(event) => this.handleOpenProperty(event, (result.PropID))}>{result.PropID}</a></th>
                                        <th> {result.OwnerName} </th>
                                        <th> {result.DBAName} </th>
                                        <th> {result.LegalDescription} </th>
                                        <th> {result.SitusStreet} </th>                            
                                    </tr>
                                </tbody>
                            );
                    })}
                </table>

                {/* -----Modal Component----- */}
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    style={ modalStyle }
                    contentLabel="Modal">
                        {this.props.selectedProperty.results.map(result => {
                           return (
                               <table className="modalTable">
                                    <tbody key={result.PropID}>
                                        {/* -----Table of Property Information from Redux Store----- */}
                                        <tr>
                                            <th> PropId </th>
                                            <td> {result.PropID} </td>
                                        </tr>
                                        <tr>
                                            <th> PropZoningCd </th>
                                            <td> {result.PropZoningCd} </td>
                                        </tr>
                                        <tr>
                                            <th> PropNbhdNm </th>
                                            <td> {result.PropNbhdNm} </td>
                                        </tr>
                                        <tr>
                                            <th> TotalMarketVal </th>
                                            <td> {result.TotalMarketVal} </td>                           
                                        </tr>
                                    </tbody>
                                </table>
                            ); 
                        })}
                        <Button 
                            bsStyle='primary' 
                            onClick={this.closeModal}
                            style={{ marginTop: 15 }}>
                                CLOSE
                        </Button>
                </Modal>
            </div>
        );
    }
}

//-----Redux Functions-----
const mapStateToProps = (state) => {
    return {
        properties: state.properties,
        selectedProperty: state.selectedProperty
    }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ getProps, getPropInfo }, dispatch); 
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
