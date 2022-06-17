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

  {
    id: 6,
    name: 'woman',
    category: 'people',
    price: 160,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/3987107/pexels-photo-3987107.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'woman',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 7,
    name: 'Dog',
    category: 'pets',
    price: 150,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Dog',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 8,
    name: 'building',
    category: 'landmarks',
    price: 190,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'building',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 9,
    name: 'pizza',
    category: 'food',
    price: 134,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'pizza',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 10,
    name: 'spaghetti',
    category: 'food',
    price: 101,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'spaghetti',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 11,
    name: 'burger',
    category: 'food',
    price: 145,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'burger',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 12,
    name: 'paris',
    category: 'cities',
    price: 101,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'paris',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 13,
    name: 'new york',
    category: 'cities',
    price: 131,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'new york',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 14,
    name: 'london',
    category: 'cities',
    price: 156,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'london',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 15,
    name: 'storm',
    category: 'nature',
    price: 149,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'storm',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 16,
    name: 'forest',
    category: 'nature',
    price: 189,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'green',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 17,
    name: 'trees',
    category: 'nature',
    price: 121,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'trees',
    },
    bestseller: false,
    featured: false,
    details: null,
  },

  {
    id: 18,
    name: 'sea man',
    category: 'premium',
    price: 109,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'see man',
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: 19,
    name: 'chef',
    category: 'lifestyle',
    price: 119,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'chef',
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: 20,
    name: 'bag boy',
    category: 'premium',
    price: 109,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'bag boy',
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: 21,
    name: 'coding man',
    category: 'premium',
    price: 100,
    currency: 'USD',
    dimmentions: {
      width: 1020,
      height: 1020,
    },
    image: {
      src: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'coding man',
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
];

export default products;
