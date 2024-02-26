import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import NavBg from './../assets/catalog_nav-bg.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

export default function Catalog() {

    const [products, setProducts] = useState([])
    const [allProucts, setAllProducts] = useState([])
    const [brandChecked, setBrandChecked] = useState(false)
    const [loading, setLoading] = useState(true)


    const productsList = products.map((product) => {
        return (
            <ProductCard image={"/" + product.img}
                         title={product.name}
                         price={product.price}
                         id={product.id}
                         key={product.id} />
        )
    })  

    let category = ""


    const handleFilter = function(e) {

        if(e.target.tagName == "BUTTON") {
            category = e.target.dataset.category
            if(category == 1) {
                setProducts(allProucts);
                return
            }
            
        }

        if(!brandChecked) {
            axios.get("https://q9mthy-3000.csb.app/api/product", 
            { params: { 
                brandId: e.target.value ?? "",
                categoryId: category ?? ""

            }, })
            
            .then(res => {
            setProducts(res.data.products.rows)
        })} else {
            setProducts(allProucts)
        }
    }

        

    useEffect(() => {
        axios.get('https://q9mthy-3000.csb.app/api/catalog').then(res => {
            setProducts(res.data.products)
            setAllProducts(res.data.products)
            setLoading(false)
        })
    }, [])

    return (
        <section className="cataloge mt-48 flex flex-col !g-0">
            <h1 className="page__title font-[UbuntuMedium] text-5xl text-center">КАТАЛОГ ТОВАРОВ</h1>
            <div className="w-full mt-24">
                <h2 className="font-[UbuntuMedium] text-3xl text-start ml-24">Туристическое снаряжение</h2>
            </div>
            <div className="flex justify-start gap-24 w-full mt-12">
                <div className={(loading ? "mr-72 " : " ") + "side-nav"}>
                    <div className='relative'>
                        <span className="text-2xl font-[UbuntuMedium] absolute top-2 left-7">Категории:</span>
                        <img src={NavBg} alt="" />
                    </div>
                    <ul className="text-xl font-normal ml-7 mt-4 flex flex-col gap-4" onClick={(e) => handleFilter(e)}>
                        <li>
                            <button type="button" data-category="1">
                                ВСЁ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="2">
                                ПАЛАТКИ И ТЕНТЫ
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                РЮКЗАКИ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="4">
                                СПАЛЬНЫЕ МЕШКИ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="5">
                                МАТРАСЫ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="12" >
                                ФОНАРИКИ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="7">
                                ОДЕЖДА
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                ОБУВЬ
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                ТУРИСТИЧЕСКИЕ КОВРИКИ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="10">
                                ПОСУДА
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                ГОРЕЛКИ И ЛАМПЫ
                            </button>
                        </li>
                        <li>
                            <button type="button" data-category="12" >
                                НОЖИ И ИНСТРУМЕНТЫ
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                ПАЛКИ ДЛЯ ХОДЬБЫ
                            </button>
                        </li>
                    </ul>
                    <form action="" className='flex flex-col ml-7 mt-7'>
                        <label htmlFor="price-range" className='font-[UbuntuMedium] text-2xl'>Цена</label>
                        <input type='range' id='price-range' className='mt-7' min={50} max={299990}/>
                        <fieldset className='mt-6 flex flex-col gap-3' onChange={(e) => handleFilter(e)}>
                            <legend className='font-semibold text-2xl mb-6'>Бренд</legend>
                            <label className='text-xl'>
                                <input type='radio' className='mr-2' value={2} name="brand" />
                                Coast
                            </label>
                            <label className='text-xl'>
                                <input type='radio' className='mr-2' value={3} name="brand" />
                                GAUT
                            </label>
                            <label className='text-xl'>
                                <input type='radio' className='mr-2' value={4} name="brand" />
                                Intex
                            </label>
                            <label className='text-xl'>
                                <input type='radio' className='mr-2' value={5} name="brand" />
                                BASK Bonzer
                            </label>
                            <label className='text-xl'>
                                <input type='radio' className='mr-2' value={6} name="brand" />
                                SARGE
                            </label>
                            <button type='button' className='self-start show-more text-xl'>Посмотреть все</button>
                        </fieldset>
                    </form>
                </div>
                {loading ? <Loading /> : <section className="products grid grid-cols-3 gap-x-10">
                {
                    productsList
                }
                </section>}
            </div>
        </section>
    )
}