import React from 'react';
import { CardComponent } from '../ItemCartComponent/ItemCartComponent';
import styles from './ItemList.css';


export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2 className="item-list-container__title">{greeting}</h2>
            <div className="item-list-container__content">
                    <CardComponent
                        id="1"
                        category="Drinkware"
                        imgSrc="https://img.freepik.com/foto-gratis/arreglo-elementos-esenciales-yoga-verde_23-2149442714.jpg?w=1060&t=st=1678400737~exp=1678401337~hmac=21e604a25c37c19807f3a4ee6e19b4be1b5789dc2ce6418813ba431c5fd24c7d"
                        title="Card Title 1"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="2"
                        category="YogaSet"
                        imgSrc="https://img.freepik.com/foto-gratis/vista-superior-articulos-esenciales-yoga_23-2149458925.jpg?w=1060&t=st=1678402319~exp=1678402919~hmac=b65663f3954f5169f941c373c6b3849ce85bbd81e4eb227cbe9f0de2131c458d"
                        title="Card Title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="3"
                        category="YogaSet"
                        imgSrc="https://img.freepik.com/foto-gratis/bodegon-accesorios-fitness-gimnasio-perfectamente-ordenados_52683-100698.jpg?w=1060&t=st=1678402626~exp=1678403226~hmac=48a4b14a481441f74c6a9cc97ef4aa66e22ee9eaf4aaf8780b7a14e45205450f"
                        title="Card Title 3"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="4"
                        category="Bolster"
                        imgSrc="https://img.freepik.com/foto-gratis/equipo-yoga-mesa_23-2148741915.jpg?w=1060&t=st=1678402675~exp=1678403275~hmac=b71815be8a09fee1c0e404a7618d7d9d89ce646cd9b482515f7509d4e40b643a"
                        title="Card Title 4"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="5"
                        category="Drinkware"
                        imgSrc="https://img.freepik.com/foto-gratis/disposicion-elementos-deportivos-estilo-minimalista_23-2149006304.jpg?w=900&t=st=1678404669~exp=1678405269~hmac=07894e89307a2fa404955e0e27af590b40e5c9935b97815f3310391cb0a70aad"
                        title="Card Title 5"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="6"
                        category="Drinkware"
                        imgSrc="https://img.freepik.com/foto-gratis/botella-alto-angulo-mancuernas_23-2149872130.jpg?w=1060&t=st=1678404703~exp=1678405303~hmac=4426f27efa7c39748efaa8e1989fa31918a5e6c0e0fff60d69b2c454f9cdf7e8"
                        title="Card Title 6"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="7"
                        category="Bolster"
                        imgSrc="https://img.freepik.com/foto-gratis/vista-superior-arreglo-equipo-deportivo_23-2149872094.jpg?w=1060&t=st=1678404727~exp=1678405327~hmac=690be99831c1e9bd1da90be49312a2dde0f58e9cdbc80677704314d4f7feca79"
                        title="Card Title 7"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="8"
                        category="Shirts"
                        imgSrc="https://img.freepik.com/foto-gratis/mujer-embarazada-revisando-su-telefono-despues-hacer-ejercicio_23-2148752220.jpg?w=900&t=st=1678404778~exp=1678405378~hmac=3c448a324a0aaf287705512b816e60a3d8d0433e70a1f3348eabf4ec65835ede"
                        title="Card Title 8"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="9"
                        category="Shirts"
                        imgSrc="https://img.freepik.com/foto-gratis/pretty-woman-practicando-yoga-playa_23-2148739079.jpg?w=900&t=st=1678404823~exp=1678405423~hmac=f85935ac84e0fd7c26c724949fbb428e3ce42ed9e3b8d85bee3c56adbd91407f"
                        title="Card Title 9"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="10"
                        category="Shirts"
                        imgSrc="https://img.freepik.com/foto-gratis/mujer-joven-practicando-yoga-casa_1303-20241.jpg?w=1060&t=st=1678404842~exp=1678405442~hmac=910e5faadfef9ce303c2a7a1cb3df4561c7333bb27aba47edef9e987b3bfd268"
                        title="Card Title 10"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="11"
                        category="Books"
                        imgSrc="https://img.freepik.com/psd-gratis/maqueta-paginas-revista-psd-lectura-verano_53876-129054.jpg?w=1060&t=st=1678404972~exp=1678405572~hmac=8d5111a7191bbeb107df67eebf1d74594f73131d348ea8b35018e86a77565357"
                        title="Card Title 11"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="12"
                        category="Books"
                        imgSrc="https://img.freepik.com/psd-gratis/mock-up-libro-abierto-dos-cubiertas_1390-104.jpg?w=900&t=st=1678405032~exp=1678405632~hmac=f4062a095988e94204d249066b11cfe4df6b24fa89ea167ad597ffadaf833afa"
                        title="Card Title 12"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="13"
                        category="YogaBlock"
                        imgSrc="https://img.freepik.com/foto-gratis/mujer-sosteniendo-su-peso-manos_23-2148644161.jpg?w=1060&t=st=1678405093~exp=1678405693~hmac=5949a2c5f5da79f1fc5ee2a14c1eddb770b88a7d87980bbb1ce5ddf02851b801"
                        title="Card Title 13"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
                    <CardComponent
                        id="14"
                        category="YogaBlock"
                        imgSrc="https://img.freepik.com/foto-gratis/mujer-atractiva-joven-actitud-paschimottanasana-bloque-gre_1163-4121.jpg?w=1060&t=st=1678405151~exp=1678405751~hmac=fc6def7ead2c0c79685773749f7466f49701eea2c5ca8b1a0a73cf27b5cec2f2"
                        title="Card Title 14"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        buttonText="Add to Cart"
                    />
            </div>
        </div>
    );
};

export default ItemListContainer;
