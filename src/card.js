import React from 'react';
import './card.css'

function Card(props){
    
    let cardBack = "https://kronozio.blob.core.windows.net/images/card/e7219026a2ad4abea923acd3a370a2ef_front.jpg";
    let cardFront = "https://www.playingcardsonly.co.uk/library/products/large/Punk_Playing_Cards_Front.jpg";
               // {king: "https://images-na.ssl-images-amazon.com/images/I/71vkCHcFksL._SX425_.jpg"};
                //{ace: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWatdMJOLzK4mzDqCattJ4duuENo8MXiVTXIyL_9c6ZhWOIv6y&s"};
    
    return(
        <img 
        onClick = {props.onClick}
        src={(props.xIsFace ? cardBack : cardFront)} />
        )
}
export default Card;