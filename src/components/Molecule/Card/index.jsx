import React from "react";
import {CardGroup, Card} from "react-bootstrap";
import logo1 from '../../../Assets/Card/1.jpg';
import logo2 from '../../../Assets/Card/2.jpg';
import logo3 from '../../../Assets/Card/3.jpg';
import './index.css'

function CardItem(){
    return(

<CardGroup>
  <Card className="card">
    <Card.Img variant="top" src={logo1} />
    <Card.Body>
      <Card.Title>Ciri-ciri Kucing Demam dan Apa yang Sebaiknya Dilakukan Segera Oleh Pemilik</Card.Title>
      <Card.Text>
      Demam pada kucing seringkali mengisyaratkan adanya masalah kesehatan yang sebenarnya membutuhkan perawatan segera.
     Sebagai pemilik anabul yang baik, kamu sebaiknya mengetahui ciri-ciri kucing demam dan tindakan apa yang sebaiknya diberikan.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={logo2} />
    <Card.Body>
      <Card.Title>Cobalah Pelihara Anjing, Ini 5 Manfaatnya untuk Kesehatan dan Kesejahteraan Hidup!</Card.Title>
      <Card.Text>
      Kebanyakan orang hanya tahu pelihara seekor kucing membawa banyak manfaat kesehatan. 
      Rupanya, pelihara anjing juga bermanfaat bagi kesejahteraan tubuh dan penampilan.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={logo3} />
    <Card.Body>
      <Card.Title>5 Rekomendasi Hewan Peliharaan, Mana yang Kamu Suka?</Card.Title>
      <Card.Text>
      Memiliki hewan peliharaan di rumah dapat memberikan beberapa manfaat. 
      Baik itu dari hasil yang diberikan oleh hewan tersebut maupun kesenangan batin yang 
      didapat oleh pemiliknya. Tidak heran jika memelihara hewan menjadi hobi bagi banyak orang.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

    );
}

export default CardItem;