import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ServerURL } from '../constants/ServerURL';
import { Pagination, Snackbar } from '@mui/material';

function Task1() {
  const [request, setRequest] = useState('[{ "1": "value1" },{ "5": "value5" },{ "10": "value10" },{ "55": "value55" },{ "155": "value155" },{ "250": "value250" },{ "355": "value355" }]');
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [alert, setAlert] = useState("");
  const [pages, setPages] = useState(1);
  const [filter, setFilter] = useState("");

  const send = () => {
    fetch(ServerURL + '/TestProject', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: request,
    })
      .then(response => response.json())
      .then(responseJson => {
        setAlert(JSON.stringify(responseJson));
        setActivePage(1);
        getAll(1, filter);
      })
      .catch(error => {
        setAlert(JSON.stringify(error))
        console.error(error);
      });
  }

  const getAll = (page, filter) => {
    fetch(ServerURL + `/TestProject?page=${page}&filter=${filter}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        console.log("loaded", responseJson);
        setAlert(`Successfully loaded ${responseJson.data.length} records from DB.`);
        setData(responseJson.data);
        setPages(responseJson.pages);
      })
      .catch(error => {
        console.error(error);
        setAlert(`ERROR: ${error}`);
      });
  }

  useEffect(() => {
    getAll(activePage, filter);
  }, [activePage, filter]);


  return (
    <div className='task'>
      <h2>Task 1</h2>
      <div className='container'>
        <div className='first'>
          <h4>JSON Data to send</h4>
          <Form.Control as="textarea" rows={12} value={request} onChange={(e) => setRequest(e.target.value)} /><br />
          <Button onClick={send} variant="primary">Send DATA</Button>
        </div>
        <div className='second'>
          <h4>Data from DB</h4>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Filter by Value:
            </Form.Label>
            <Col sm="8">
              <Form.Control value={filter} onChange={(e) => { setFilter(e.target.value) }} />
            </Col>
            <Col sm="2">
              <Button onClick={() => { getAll(activePage, filter) }}>Load</Button>
            </Col>
          </Form.Group>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Code</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map(x => <tr key={x.id}><td>{x.id}</td><td>{x.code}</td><td>{x.value}</td></tr>)}
            </tbody>
          </Table>
          <Pagination count={pages} page={activePage} onChange={(e, value) => { setActivePage(value) }} />
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={alert?.length > 0}
        message={alert}
        autoHideDuration={6000}
        onClose={() => setAlert("")}
      />
    </div>
  )
}

export default Task1;