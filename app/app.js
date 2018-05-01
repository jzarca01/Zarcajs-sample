/** @jsx Zarca.createElement */
import Zarca from 'zarcajs'


const carsArray = [{
        name: "Saab",
        url: "https://fr.wikipedia.org/wiki/Saab_Automobile"
    },
    {
        name: "Volvo",
        url: "https://fr.wikipedia.org/wiki/Volvo"
    },
    {
        name: "BMW",
        url: "https://fr.wikipedia.org/wiki/Bayerische_Motoren_Werke"
    }
];

const carsList = <ul>{carsArray.map(createCarElement)}</ul>;

function createCarElement (carElement) {
    return ( 
        <li>
            <div>
                <b>{carElement.name} :</b> 
                <a href={carElement.url}>Link</a>
            </div>
        </li>
    );
}

const samplePage = <div>
        <h1>List of car brands : </h1>
        {carsList}
    </div>

Zarca.render(samplePage, document.getElementById('root'));