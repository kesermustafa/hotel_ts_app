export const sortOptions = [
  { label: 'Please Select', value: '' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating: Low to High', value: 'rating-asc' },
  { label: 'Rating: High to Low', value: 'rating-desc' },
];

export const initialValues = {
  name: '',
  location: '',
  address: '',
  description: '',
  amenities: '',
  rating: '',
  price_per_night: '',
  availability: false,
};

export const inputs = [
  {
    label: 'Title',
    name: 'name',
    placeholder: 'Exp: Seaside Villa',
  },
  {
    label: 'Location',
    name: 'location',
    placeholder: 'Exp: Ankara',
  },
  {
    label: 'Address',
    name: 'address',
    placeholder: 'Exp: Capital Street',
  },
  {
    label: 'Description',
    name: 'description',
    placeholder: 'Exp: Villa with sea view',
  },
  {
    label: 'Amenities',
    name: 'amenities',
    placeholder: 'Exp: Free Wifi, Gym',
  },
  {
    label: 'Rating',
    name: 'rating',
    placeholder: 'Exp: 4.5',
    type: 'number',
  },
  {
    label: 'Price Per Night',
    name: 'price_per_night',
    placeholder: 'Exp: 100$',
    type: 'number',
  },
  {
    label: 'Availability (Are there any rooms available?)',
    name: 'availability',
    placeholder: '',
    type: 'checkbox',
  },
];
