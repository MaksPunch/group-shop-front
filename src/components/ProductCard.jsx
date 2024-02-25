import Favorite from "../assets/favorite.png"
import CartAdd from "../assets/cart-add.png"

export default function ProductCard({ image, title, price, orders }) {

    const wordDeclension = (number, titles) => {
        number = Math.abs(number);
        if (Number.isInteger(number)) {
            let cases = [2, 0, 1, 1, 1, 2];
            return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
        }
        return titles[1];
    }
    // склонение слов

    return (
        <article className="product-card w-44 md:w-80">
            <div className="product-card__image flex relative items-start justify-center w-full h-44 md:h-80 bg-neutral-300">
                <img src={image} className="align-center smd:w-80" alt="Изображение товара" />
                <button className="product-card__favorite-btn" type="button">
                    <img src={Favorite} className="w-6 md:w-10 absolute right-2.5 top-2.5" alt={"Добавить в избранное"} />
                </button>
            </div>
            <div className="product-card-description px-3 flex flex-col p-3 md:p-5 bg-white text-black">
                <span className="product-card__product-price text-lg font-medium md:text-3xl">
                    {price + " " + wordDeclension(price, ["рубль", "рубля", "рублей"])}
                </span>
                <h3 className="product-card__product-title text-xs font-medium mt-3 md:mt-6 md:text-lg md:leading-none">
                    {title}
                </h3>
                <button className="product-card__cart-button flex items-center gap-1 md:gap-3 border-2 border-black rounded-md py-0.5 px-2 w-fit mt-2 md:mt-3"
                        type="button"
                >
                    <img className="w-4 md:w-8" src={CartAdd} alt={title} />
                    <span className="text-xs md:text-xl">В корзину</span>
                </button>
                {/*<span className="product-card__total-orders text-xs opacity-70 mt-4 text-end md:text-xl font-medium">*/}
                {/*    {orders + " " + wordDeclension(orders, ["заказ", "заказа", "заказов"])}*/}
                {/*</span>*/}
            </div>
        </article>
    )
}