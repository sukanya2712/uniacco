import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tagcard({item}) {
  return (
    <Card style={{
        width:100,
        height:40,
        borderRadius:20,
        border:'1px solid rgba(0,0,0,0.3)',
    }}>
      
      <Button variant="light" style={{borderRadius:20}}>{item?.line1}</Button> 
      
    </Card>
  );
}

export default Tagcard;