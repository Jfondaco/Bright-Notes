import React, { Component } from 'react';
import BookData from '../utils/BookData'
import {Button, Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'


class BookCards extends React.Component {

state = {
    cards: []
}
    
componentDidMount(){
    console.log("mount working")
    this.createCards()
}

createCards = () => {
    console.log("getting books")
    BookData.getBooks().then( res=> {
        let book = res.data;
        console.log('book res.data', book)
        let cardsArr = []
        for (var i=0; i<book.length; i++){
            cardsArr.push(book[i])
        }
        this.setState({cards:cardsArr})
        console.log(this.state.cards)
    })
}

deleteCards = async (alert) => {
    await BookData.deleteBooks(alert)
    this.createCards()
    
}

    render(){
        let pageHeader = React.createRef();
        return(
            <div
            style={{
            backgroundImage: "url(" + require("assets/img/library.png") + ")"
            }}
            className="page-header"
            data-parallax={true}
            ref={pageHeader}
        >
            <div className="filter" />
            
            <div className="motto text-center" id = 'libraryDiv'>
                <ul>{this.state.cards.map(res =>
                    <div key={res.id}>
                        <Card style={{width: '20rem'}}>
                            <CardImg top src={res.picture} alt={res.title}/>
                            <CardBody>
                                <CardTitle>{res.title}</CardTitle>
                                <CardText>{res.description}</CardText>
                                <Button href='google.com' color="primary">Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </div>
                    )}
                </ul>
            </div>
        </div>
        )

    }




}

export default BookCards;