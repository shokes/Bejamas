import products from '../data';

const Hero = function () {
  const featuredProduct = products.filter(
    (product) => product.featured === true
  );
  console.log(featuredProduct);

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
  console.log(size);
  return (
    <section className='mt-7'>
      <div className='flex items-center justify-between mb-5'>
        <h3 className='text-[32px] font-bold leading-[34.82px]'>{name}</h3>
        <button className='uppercase bg-black font-medium text-white text-[23px] leading-[25px] tracking-[0.07em] py-2 px-4'>
          add to cart
        </button>
      </div>
      <div className='relative mb-7'>
        <img src={image.src} alt={image.alt} className='w-full h-[553px]' />
        <p className='bg-white text-black font-bold text-[20px] leading-[21.76px]  py-3 px-6 absolute bottom-[0rem]'>
          Photo of the day
        </p>
      </div>
      <div className=' flex  justify-between'>
        <div className='w-1/2'>
          <h3 className='font-bold text-[22px] leading-[23.94px] mb-3'>
            About the {name}
          </h3>
          <h2 className='font-bold text-[22px] leading-[23.94px] text-[#656565] mb-3'>
            {category}
          </h2>
          <p className='font-normal text-[18px] leading-[27px] text-[#656565]'>
            {desc}
          </p>
        </div>
        <div className='w-1/2 justify-self-end '>
          <h3 className='text-end font-bold text-[22px] leading-[23.94px] mb-3'>
            People also buy
          </h3>
          <div className='flex gap-5 justify-end'>
            {recommendations.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className='w-[117px] h-[147px] mb-10  '
                />
              );
            })}
          </div>
          <div className='text-end'>
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
    </section>
  );
};
export default Hero;
