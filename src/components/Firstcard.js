import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Firstcard({item}) {
  return (
    <Card style={{
        width:450,
        height:280,
        border:'1px solid rgba(0,0,0,0.05)',borderRadius:'15px!important',
    }} >
      <Card.Img src={item?.image} alt="Card image" style={{borderRadius:'15px!important',}}  />
      <Card.ImgOverlay>
        <Card.Title style={{color:'whitesmoke' ,fontSize:15 ,}}>collection</Card.Title>
        <Card.Text style={{color:'whitesmoke',fontWeight:'bold',fontSize:30,marginBottom:-10,}}>
          {item.line1}
        </Card.Text>
      
        <Card.Text style={{color:'whitesmoke',fontSize:30,fontWeight:'bold',}}>{item.line2}</Card.Text>
        <Button variant="light" style={{marginTop:90,}}>show all</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Firstcard;