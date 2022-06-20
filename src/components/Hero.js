import { products, price } from '../data';

const Hero = function () {
  const featuredProduct = products.filter(
    (product) => product.featured === true
  );

  const {
    name,
    image,
    category,
    details: {
      description: desc,
      recommendations,
      dimensions: { width, height },
      size,
    },
  } = featuredProduct[0];

  return (
    <section className='mt-7'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-[32px] font-bold leading-[34.82px]'>{name}</h3>
        <button className='hidden lg:block uppercase bg-black font-medium text-white text-[23px] leading-[25px] tracking-[0.07em] py-3 px-7'>
          add to cart
        </button>
      </div>
      <div className='relative mb-7'>
        <img
          src={image.src}
          alt={image.alt}
          className='w-full h-[239px] lg:h-[553px]'
        />
        <p className='bg-white text-black font-bold text-[20px] leading-[21.76px]  py-3 px-6 absolute bottom-[0rem]'>
          Photo of the day
        </p>
      </div>
      <button className=' lg:hidden uppercase w-full bg-black font-medium text-white text-[23px] leading-[25px] tracking-[0.07em] py-4 px-4 mb-7'>
        add to cart
      </button>
      <div className=' lg:flex  justify-between'>
        <div className='lg:w-1/2'>
          <h3 className='font-bold text-[22px] leading-[23.94px] mb-3'>
            About the {name}
          </h3>
          <h2 className='font-bold text-[22px] leading-[23.94px] text-[#656565] mb-3 capitalize'>
            {category}
          </h2>
          <p className='font-normal text-[18px] leading-[27px] text-[#656565]'>
            {desc}
          </p>
        </div>
        <div className='lg:w-1/2 lg:justify-self-end '>
          <h3 className='lg:text-end mt-7 mb-7 font-bold text-[22px] leading-[23.94px] lg:mb-3'>
            People also buy
          </h3>
          <div className='grid grid-cols-3 lg:flex gap-x-3 lg:gap-x-7 lg:justify-end '>
            {recommendations.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className='w-[97.57px] h-[122.58px] lg:w-[117px] lg:h-[147px] mb-10  '
                />
              );
            })}
          </div>
          <div className='lg:text-end'>
            <h3 className='font-bold text-[22px] leading-[23.94px] mb-3'>
              Details
            </h3>
            <p className='font-normal text-[16px] leading-[17.41px] text-[#656565] mb-3'>
              Size: {height} x {width}
              <span className='ml-1'> pixel</span>
            </p>
            <span className='font-normal block text-[16px] leading-[17.41px] text-[#656565]'>
              Size: {size / 1000} mb
            </span>
          </div>
        </div>
      </div>
      <div className='border-[#E4E4E4] border-b-4 w-full mt-14 mb-14 '></div>
    </section>
  );
};
export default Hero;
