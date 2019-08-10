import React, { Component } from 'react';
import {Slider, Slide, Caption, Row, Col, Card, CardTitle, SideNav, Button, SideNavItem, Pagination} from "react-materialize";

class App extends Component{
  render(){
    return(
      <div>
        <SideNav
          trigger={<Button icon="menu"/>}
          options={{closeOnClick: true}} >
            <SideNavItem userView
              user={{background:'https://materializecss.com/images/office.jpg',
              image:'https://materializecss.com/images/yuna.jpg',
              name:'Satria Darmawan',
              email:'test@gmail.com'}}/>
            <SideNavItem href="/" icon="perm_identity">Profil Saya</SideNavItem>
            <SideNavItem href="/" icon="help">Hubungi Kami</SideNavItem>
            <SideNavItem divider/>
            <SideNavItem subheader>Product</SideNavItem>
            <SideNavItem href="/">Kesehatan</SideNavItem>
            <SideNavItem href="/">Komputer & Aksesoris</SideNavItem>
            <SideNavItem href="/">Gaming</SideNavItem>
            <SideNavItem href="/">Kamera</SideNavItem>
            <SideNavItem href="/">Olahraga</SideNavItem>
            <SideNavItem href="/">Fashion Pria</SideNavItem>
            <SideNavItem href="/">Fashion Wanita</SideNavItem>
        </SideNav>
        <br/>

        <Slider>
          <Slide image={<img alt="gambar-slide" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
            <Caption>
              <h3>Pantai</h3>
              <h5 className="light white-text text-lighten-3">
                Dapatkan Kesempatan Jalan - Jalan Ke Pantai Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>

          <Slide image={<img alt="gambar-slide" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
            <Caption placement="left">
              <h3>Hongkong</h3>
              <h5 className="light white-text text-lighten-3">
                Dapatkan Kesempatan Jalan - Jalan Ke Hongkong Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>

          <Slide image={<img alt="gambar-slide" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"/>}>
            <Caption placement="right">
              <h3>Paris</h3>
              <h5 className="light white-text text-lighten-3">
                Dapatkan Kesempatan Jalan - Jalan Ke Paris Dengan Membeli Sebuah Product
              </h5>
            </Caption>
          </Slide>
        </Slider>

        <Row>
          <p>Hot List</p>
          <Col m={3}>
            <Card className="small" header={<CardTitle image=" https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
              Audio
              </CardTitle>}>
              Audio Technica - Mulai Dari <span style={{backgroundColor:"red"}}>RP 910rb</span>
            </Card>
          </Col>

          <Col m={3}>
            <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
              Handphone
              </CardTitle>}>
              Handphone Samsung - Mulai Dari <span style={{backgroundColor:"red"}}>RP 200rb</span>
            </Card>
          </Col>

          <Col m={3}>
            <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
              Squishy
              </CardTitle>}>
              Squishy - Mulai Dari <span style={{backgroundColor:"red"}}>RP 5,5rb</span>
            </Card>
          </Col>

          <Col m={3}>
            <Card className="small" header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
              Koleksi The Avenger
              </CardTitle>}>
              Koleksi The Avenger - Mulai Dari <span style={{backgroundColor:"red"}}>RP 10rb</span>
            </Card>
          </Col>

        </Row>
        <Pagination items={10} activePage={2} maxButtons={8} />
      </div>
    );
  }
}

export default App;
