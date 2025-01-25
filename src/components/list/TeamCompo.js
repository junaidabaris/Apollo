
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sequence from './Sequence';

const TeamCompo = () => {
    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            margin: '20px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
        },
        tableHeader: {
            backgroundColor: '#f8f8f8',
            textAlign: 'left',
            fontWeight: 'bold',
            padding: '10px',
        },
        tableRow: {
            borderBottom: '1px solid #ddd',
        },
        tableCell: {
            padding: '10px',
        },
        button: {
            backgroundColor: '#ddd',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        noListSection: {
            textAlign: 'center',
            marginTop: '40px',
            color: '#666',
        },
        createListButton: {
            backgroundColor: '#ffd900',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
        },
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);
    return (
        <div style={styles.container}>
            {modalShow && <Sequence
                show={modalShow}
                onHide={() => setModalShow(false)}
            />}
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>NAME</th>
                        <th style={styles.tableHeader}>MODIFIED</th>
                        <th style={styles.tableHeader}>By</th>
                        <th style={styles.tableHeader}>RECORD</th>
                        <th style={styles.tableHeader}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={styles.tableRow}>
                        <td style={styles.tableCell}>Sales list</td>
                        <td style={styles.tableCell}>2 hrs ago</td>
                        <td style={styles.tableCell}>Tim Z.</td>
                        <td style={styles.tableCell}>12k</td>
                        <td style={styles.tableCell}>
                            <button style={styles.button} onClick={() => setModalShow(true)}>Add to Sequence</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div style={styles.noListSection}>
                <p >No lists created</p>
                <p>
                    Better organize contacts and accounts in your target market. Once you create a list, they will appear on this
                    page. Learn more about Lists, <a href="#learn-more">click here</a>.
                </p>
                <button onClick={handleShow} style={styles.createListButton}>Create list</button>
            </div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Name</h6>
                    <input type="text" className='form-control' placeholder="List name" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TeamCompo;
