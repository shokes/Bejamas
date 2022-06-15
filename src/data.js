const products = [
  {
    id: 1,
    name: 'Red Bench',
    category: 'people',
    price: 3.89,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/1516036/pexels-photo-1516036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Red Bench',
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    id: 2,
    name: 'Egg Balloon',
    category: 'food',
    price: 93.89,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/10804857/pexels-photo-10804857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Egg Balloon',
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: 3,
    name: 'Man',
    category: 'people',
    price: 100,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Man',
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: 4,
    name: 'Architecture',
    category: 'landmarks',
    price: 101,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Architecture',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 5,
    name: 'Samurai King Restling',
    category: 'landmarks',
    price: 101,
    currency: 'USD',
    image: {
      src: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Samurai King Restling',
    },
    category: 'pets',
    bestseller: false,
    featured: true,
    details: {
      dimensions: {
        width: 1020,
        height: 1020,
      },
      size: 15000,
      description:
        'So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely. So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely. So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely. So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely',
      recommendations: [
        {
          src: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'car',
        },
        {
          src: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'car',
        },
        {
          src: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          alt: 'car',
        },
      ],
    },
  },
];

export default products;
