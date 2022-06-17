import products from '../data';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const nonFeatured = products.filter((product) => product.featured === false);

const Products = function () {
  const [sortTerm, setSortTerm] = useState('price');
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);
  const [isSorted, setIsSorted] = useState(true);
  let cartArr = [];

  const pagination = function (productItems) {
    const productsPerPage = 6;
    const pages = Math.ceil(productItems.length / productsPerPage);

    const newProducts = Array.from({ length: pages }, (_, index) => {
      const start = index * productsPerPage;
      return productItems.slice(start, start + productsPerPage);
    });

    setData(newProducts);
    setProductList(newProducts[page]);
  };
  console.log(data);
  useEffect(() => {
    pagination(nonFeatured);
  }, [page]);

  const sort = () => {
    if (sortTerm === 'price') {
      if (isSorted) {
        const sortPriceDecending = productList.sort(
          (a, b) => b.price - a.price
        );

        setProductList([...sortPriceDecending]);
        setIsSorted(!isSorted);
      } else if (!isSorted) {
        const sortPriceAccending = productList.sort(
          (a, b) => a.price - b.price
        );

        setProductList([...sortPriceAccending]);
        setIsSorted(!isSorted);
      }
    } else if (sortTerm === 'alphabetically') {
      if (isSorted) {
        const alphaAccending = productList.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setProductList([...alphaAccending]);
        setIsSorted(!isSorted);
      } else if (!isSorted) {
        const alphaDescending = productList.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        setProductList([...alphaDescending]);
        setIsSorted(!isSorted);
      }
    }
  };

  const changePage = (num) => {
    setPage(num);
  };

  const nextPage = (num) => {
    let newPage = num + 1;
    setPage(newPage);
  };

  const prevPage = (num) => {
    let newPage = num - 1;
    setPage(newPage);
  };

  const handleCheckbox = (event) => {};

  return (
    <section>
      <div className='flex items-center justify-between mb-14'>
        <div>
          <h3 className='font-[700] leading-[32.64px] text-[30px] capitalize'>
            photography /{' '}
            <span className='text-[#9B9B9B] font-[400]'>premium photos</span>
          </h3>
        </div>
        <div className='flex gap-x-2 items-center'>
          <span onClick={sort}>
            <RiArrowUpDownLine />
          </span>
          <p className='font-[400] leading-[23.94px] text-[22px] text-[#9B9B9B] capitalize'>
            sort by
          </p>
          <select
            name='
                  '
            id=''
            className='font-[400] leading-[23.94px] text-[22px] text-[#000] w-[5rem] capitalize'
            onChange={(e) => setSortTerm(e.target.value)}
          >
            <option value='price'>price</option>
            <option value='alphabetically'>alphabetically</option>
          </select>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <h4 className='font-[700] leading-[23.94px] text-[22px] capitalize mb-10'>
            category
          </h4>

          {nonFeatured.map((item) => {
            cartArr.push(item.category);
          })}
          <div>
            {[...new Set(cartArr)].map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex items-center gap-x-4 capitalize font-[400] leading-[23.94px] text-[22px] mb-5'
                >
                  {' '}
                  <input
                    type='checkbox'
                    name={item}
                    value={item}
                    className='w-[23px] h-[23px]'
                    onChange={(e) => {
                      handleCheckbox(e.target.value);
                    }}
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className='grid grid-cols-3 gap-x-4'>
          {productList.map((item) => {
            const {
              image: { src, alt },
              category,
              bestseller,
              name,
              price,
              id,
            } = item;

            return (
              <div key={id} className='mb-7'>
                <div className='relative image-container'>
                  <img
                    src={src}
                    alt={alt}
                    className='w-[281.72px] h-[390.67px] mb-2'
                  />
                  <button className='uppercase bg-black font-medium text-white text-[23px] leading-[25.02px] tracking-[0.07em] block absolute bottom-0 py-1 w-[281.72px]'>
                    add to cart
                  </button>
                  {bestseller && (
                    <span className='absolute top-0 bg-white py-1 px-2 capitalize font-normal text-[20px] leading-[21.76px]'>
                      best seller
                    </span>
                  )}
                </div>

                <p className='font-[700] leading-[23.94px] text-[22px] capitalize text-[#656565]'>
                  {category}
                </p>
                <p className='font-[700] leading-[36.99px] text-[34px] capitalize text-[#000] mb-1'>
                  {name}
                </p>
                <span className='font-[400] leading-[31.55px] text-[29px] capitalize text-[#656565]'>
                  ${price}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className='justify-center flex gap-x-3 items-center pb-10 pt-20 '>
        {page !== 0 ? (
          <MdOutlineKeyboardArrowLeft
            className=' text-[29px] cursor-pointer'
            onClick={() => prevPage(page)}
          />
        ) : null}

        {data.map((item, index) => {
          return (
            <button
              className={` font-[400] leading-[31.55px] text-[29px] text-[#B4B4B4] ${
                index === page ? 'pagin' : null
              }`}
              key={index}
              onClick={() => {
                changePage(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}

        {page !== 3 ? (
          <MdOutlineKeyboardArrowRight
            className=' text-[29px] cursor-pointer'
            onClick={() => nextPage(page)}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Products;

// font-[400] leading-[31.55px] text-[29px]
