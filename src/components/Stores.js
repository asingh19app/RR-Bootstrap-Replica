import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import stews from './stews.jpg'
import wals from './wals.png'
import ss from './ss.png'
import cos from './cos.jpg'
import aldi from './aldi.jpg'
import sr from './sr.png'

export default function Stores() {
  return (
<>
<h2>Browse Stores in NYC</h2>
<br/>
<CardGroup>
      <Card>
        <Card.Img variant="top" src= {stews} width = {400} height ={400} />
        <Card.Body>
          <Card.Title>Stew Leonards</Card.Title>
          <Card.Text>
          From its humble beginnings as a small dairy store founded in 1969 with seven employees, Stew Leonard's has grown to become not only the World's Largest Dairy Store, but one of the most renowned grocery stores, with annual sales of almost $500 million and more than 2,500 Team Members.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deliever by 11pm</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src= {wals}  width = {400} height ={400} />
        <Card.Body>
          <Card.Title>Walgreens</Card.Title>
          <Card.Text>
          Walgreens Boots Alliance (Nasdaq: WBA) is an integrated healthcare, pharmacy and retail leader serving millions of customers and patients every day.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deliever by 11pm</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src= {ss}  width = {400} height ={400}/>
        <Card.Body>
          <Card.Title>Stop&Shop</Card.Title>
          <Card.Text>
          What Is a One-Stop Shop? A one-stop shop is a firm that offers a multitude of products or services to its customers, all under one roof, so to speak.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deliever by 11pm</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    
<CardGroup>
      <Card>
        <Card.Img variant="top" src= {cos}  width = {400} height ={400} />
        <Card.Body>
          <Card.Title>Costco</Card.Title>
          <Card.Text>
          "Costco Wholesale" name, that carry quality, brand-name merchandise at substantially lower prices than are typically found at conventional wholesale or retail sources.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deliever by 11pm</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src= {aldi}  width = {400} height ={400} />
        <Card.Body>
          <Card.Title>Aldi</Card.Title>
          <Card.Text>
          ALDI is a grocery store company that first opened its doors in Germany in 1961. The Albrecht family founded the grocery store with aims to simplify the grocery store experience and offer far lower prices than competitors.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deliever by 11pm</small>
        </Card.Footer>
      </Card>
      
      <Card>
        <Card.Img variant="top" src= {sr}  width = {400} height ={400} />
        <Card.Body>
          <Card.Title>ShopRite</Card.Title>
          <Card.Text>
          Shoprite Holdings Ltd (Shoprite) is a retailer of food and non-food products. The company sells various products such as clothing, food items, fruit and vegetables, cosmetics, household appliances, liquor, general merchandise, and home entertainment systems.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Deliever by 11pm</small>
        </Card.Footer>
      </Card>
    </CardGroup>
</>

  )
}
