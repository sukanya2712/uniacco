import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';




function Last({item}) {
  return (
    <Card style={{ width:200 , height:250, border:'1px solid rgba(0,0,0,0.05)',borderRadius:14,}}>
      <Card.Img variant="top" src={item?.image} style={{borderRadius:15,}}/>
    
      <Card.Body>
        <Card.Title style={{fontSize:12,marginTop:-7,}}>
            {item.rate}
        </Card.Title>
        <Card.Text style={{fontWeight:'bold',fontSize:'10',marginTop:-7}}>
          {item.line2}
        </Card.Text>
        <Card.Text style={{fontWeight:'bold',fontSize:'10',marginTop:-21}}>
          {item.line3}
        </Card.Text>
        <Card.Text style={{fontWeight:'bold',fontSize:'10',marginTop:-18,color:'gray'}}>
         {item.line4}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Last;