import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container,Button,Form,Col,Row} from 'react-bootstrap'


function App() {
  return (
    <div className="App">

    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div id='fourma'>

      <Form >

        <h2 > Fill in this form to contact us </h2>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Frist Name</Form.Label>
        <Form.Control type="first-name" placeholder="First Name" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="last-name" placeholder="Last Name" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Confirm email" />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Retype Password</Form.Label>
        <Form.Control type="password" placeholder="Retype Password" />
      </Form.Group>

      
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button className="btn" variant="primary" type="submit">
        Submit
      </Button>

    </Form>

    </div>
  
    </div>
  );
}

export default App;
