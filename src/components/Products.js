// import products from '../data';
import { products, price } from '../data';
import { RiArrowUpDownLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Zoom } from 'react-reveal';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const nonFeatured = products.filter((product) => product.featured === false);

const Products = function () {
  const [sortTerm, setSortTerm] = useState('price');
  const [data, setData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(0);
  const [isSorted, setIsSorted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleCheckbox = (event) => {
    if (event) {
      const filteredCategory = nonFeatured.filter((item) => {
        return item.category === event;
      });
      console.log(filteredCategory);
      setProductList([...filteredCategory]);
    }
  };

  const handlePrice = (event) => {
    if (event === 'Lower than $20') {
      const lessTwenty = nonFeatured.filter((item) => item.price < 20);

      setProductList([...lessTwenty]);
    } else if (event === '$20 - $100') {
    } else if (event === '$100 - $200') {
    } else if (event === 'More than $200') {
    }
  };

  return (
    <section className='relative'>
      <div className='flex items-center justify-between mb-14'>
        <div>
          <h3 className='font-[700] leading-[19.58px] lg:leading-[32.64px] text-[18px] lg:text-[30px]  capitalize'>
            photography /{' '}
            <span className='text-[#9B9B9B] font-[400]'>premium photos</span>
          </h3>
        </div>
        <AiOutlineMenuUnfold
          className='w-7 h-10 lg:hidden'
          onClick={() => setIsOpen(true)}
        />

        <div className='hidden  lg:flex gap-x-2 items-center'>
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
        <div className='hidden lg:block'>
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
          <div className='border-[#E4E4E4] border-b-4  w-[9rem] lg:w-[268px] mt-10'></div>
          <div>
            <h4 className='font-[700] leading-[23.94px] text-[22px] mb-10 mt-10'>
              Price range
            </h4>
            {price.map((item) => {
              return (
                <div
                  key={item.id}
                  className='flex items-center gap-x-4  font-[400] leading-[23.94px] text-[22px] mb-5'
                >
                  {' '}
                  <input
                    type='checkbox'
                    name={item.range}
                    value={item.range}
                    className='w-[23px] h-[23px]'
                    onChange={(e) => handlePrice(e.target.value)}
                  />
                  <label htmlFor={item.range}>{item.range}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4'>
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
                    className='w-full lg:w-[281.72px] h-[390.67px] mb-2'
                  />
                  <button className='uppercase bg-black font-medium text-white text-[23px] leading-[25.02px] tracking-[0.07em] block absolute bottom-0 py-1 w-full lg:w-[281.72px]'>
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
      {isOpen && (
        <Zoom>
          <div
            className='bg-white z-40 p-2 absolute top-[3rem] w-full
    '
          >
            <div className='flex items-center justify-between'>
              <h4 className='font-[700] leading-[23.94px] text-[22px] mb-5 mt-5'>
                Filter
              </h4>
              <GrClose className='w-7 h-10' onClick={() => setIsOpen(false)} />
            </div>

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
            {/* <div className='border-[#E4E4E4] border-b-4 w-[268px] mt-10'></div> */}
            <div>
              <h4 className='font-[700] leading-[23.94px] text-[22px] mb-10 mt-10'>
                Price range
              </h4>
              {price.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='flex items-center gap-x-4  font-[400] leading-[23.94px] text-[22px] mb-5'
                  >
                    {' '}
                    <input
                      type='checkbox'
                      name={item.range}
                      value={item.range}
                      className='w-[23px] h-[23px]'
                      onChange={(e) => handlePrice(e.target.value)}
                    />
                    <label htmlFor={item.range}>{item.range}</label>
                  </div>
                );
              })}
            </div>
            {/* <div className='border-[#E4E4E4] border-b-4 w-[268px] mt-10'></div> */}
            <div className='flex justify-between items-center '>
              <button className='border border-black uppercase py-2 px-7'>
                clear
              </button>
              <button className='uppercase text-white bg-black py-2 px-7'>
                save
              </button>
            </div>
          </div>
        </Zoom>
      )}
    </section>
  );
};

export default Products;
