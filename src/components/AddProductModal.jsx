import {Fragment, useContext, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {
    ExclamationTriangleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {ModalContext} from "../App";
import logo from "../assets/logo.png";
import Input from "./Input";
import axios from "axios";

export default function AddProductModal() {
    const {
        openAddProduct: open,
        setOpenAddProduct: setOpen,
        setSuccessAlertText
    } = useContext(ModalContext);
    const [alert, setAlert] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState(1);
    const [brandId, setBrandId] = useState(1);
    const [price, setPrice] = useState(1);
    const [image, setImage] = useState();
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://q9mthy-3000.csb.app/api/brand').then(res => {
            setBrands(res.data.brands);
        }).catch(err => {console.log(err.message);});
        
        axios.get('https://q9mthy-3000.csb.app/api/category').then(res => {
            console.log(res.data.categories);
            setCategories(res.data.categories);
        }).catch(err => {console.log(err.message);});
    }, [])

    useEffect(() => {
        console.log(image);
    }, [image])

    function handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('img', image);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('categoryId', categoryId);
        formData.append('brandId', brandId);

        axios
            .post("https://q9mthy-3000.csb.app/api/product", formData)
            .then((res) => {
                setSuccessAlertText("Вы добавили товар!");
                setOpen(false);
            })
            .catch((e) => console.log(e));
    }

    function handleModalChange() {
        setOpen(false);
        setOpenRegister(true);
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={logo} alt="Camping Paradise" className="mb-12"/>
                                    <form
                                        action="#"
                                        className="flex flex-col gap-7"
                                        onSubmit={handleFormSubmit}
                                    >
                                        {alert ? (
                                            <div className="bg-red-500 text-white p-3 rounded-xl">
                                                {alert}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                        <Input
                                            id="addProductName"
                                            label="Название товара"
                                            name="product_name"
                                            type="text"
                                            value={name}
                                            setValue={(e) => setName(e.target.value)}
                                            required={true}
                                        />
                                        <div className="flex flex-col gap-1 relative">
                                            <label htmlFor="addProductDescription">Описание товара</label>
                                            <textarea
                                                id="addProductDescription"
                                                name="product_description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required={true}
                                                className="w-[448px] h-48 resize-y border-4 border-blue-950 border-solid rounded-3xl pl-3 pt-3 text-xl"
                                            >
                                                {description}
                                            </textarea>
                                        </div>
                                        <Input
                                            id="addProductPrice"
                                            label="Цена товара"
                                            name="product_price"
                                            type="number"
                                            value={price}
                                            setValue={(e) => setPrice(e.target.value)}
                                            required={true}
                                        />
                                        <Input
                                            id="addProductImage"
                                            label="Фото товара"
                                            name="product_image"
                                            type="file"
                                            setValue={(e) => {
                                                setImage(e.target.files[0]);
                                                console.log(e.target.files[0]);
                                            }}
                                            required={true}
                                        />
                                        <div className="flex flex-col gap-1 relative">
                                            <label htmlFor="brand_select" className="pl-6 text-xl font-[UbuntuMedium] text-opacity-80">Выберите бренд</label>
                                            <select value={brandId || 1} onChange={(e) => setBrandId(e.target.value)} name="brand" id="brand_select" className="w-[448px] h-16 border-4 border-blue-950 border-solid rounded-3xl pl-3 text-xl">
                                                {brands.map((brand) => 
                                                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1 relative">
                                            <label htmlFor="category_select" className="pl-6 text-xl font-[UbuntuMedium] text-opacity-80">Выберите категорию</label>
                                            <select value={categoryId || 1} onChange={(e) => setCategoryId(e.target.value)} name="category" id="category_select" className="w-[448px] h-16 border-4 border-blue-950 border-solid rounded-3xl pl-3 text-xl">
                                                {categories.map((category) => 
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                )}
                                            </select>
                                        </div>
                                        <input
                                            className="bg-blue-950 text-white rounded-3xl text-3xl h-16 shadow-xl cursor-pointer px-4"
                                            type="submit"
                                            value="Добавить товар"
                                        />
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
