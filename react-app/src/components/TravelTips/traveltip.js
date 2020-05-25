import React, { Component } from 'react';
import { MapTo } from '@adobe/cq-react-editable-components';
import Legoland from "../../assets/images/Legoland.jpg";
import Jylland from "../../assets/images/Jylland.jpg";
require('./traveltip.scss');


const EditConfig = {

    emptyLabel: 'Travel-Tip',

    isEmpty: function () {
        return !this.props || !this.props.cqModel || this.props.cqModel.isEmpty;
    }
};
class TravelTip extends Component {


    render() {
        return (
            <div className="traveltip-container">
                <h3>Reisetips til deg</h3>

                <div className="row">
                    <div className="gallery col-6">

                        <div className="card gallery ">
                            <a href="https://www.wideroe.no/wideroe-kortet">
                                <div className="imgContainer overflow-hidden">
                                    <img className="card-img-top img-responsive" src={Legoland} alt="Card1" />

                                </div>
                                <div className="p-4">
                                    <h3 className="gallery-title">24 timer i Bergen</h3>
                                    <p className="gallery-text">Gled deg! Bergen har nok historie, kultur, mat og uteliv til å gi deg et døgn du sent vil glemme ...</p>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="gallery col-6">
                        <a href="https://cars.cartrawler.com/wideroe/?clientId=521155#/searchcars">
                            <div className="card gallery ">
                                <div className="imgContainer overflow-hidden">
                                    <img className="card-img-top img-responsive" src={Jylland} alt="Card2" />

                                </div>
                                <div className="p-4">
                                    <h3 className="gallery-title">Opplev Vestlandet: Koselige ting å gjøre i Bergen</h3>
                                    <p className="gallery-text">Når bergenser og Widerøe-ansatt Jørgen F. Eriksson deler sine tips fra Bergen, får du en perfekt miks av kulturarv, formidabel utsikt og gode matopplevelser!
          </p>
                                </div>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapTo('my-react-app/components/content/TravelTip')(TravelTip, EditConfig);