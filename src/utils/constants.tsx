import Slide1Bg from '../../public/assets/images/home-section-slider-slide1-bg.png';
import Slide2Bg from '../../public/assets/images/home-section-slider-slide2-bg.png';
import Slide3Bg from '../../public/assets/images/home-section-slider-slide3-bg.png';
import { ORDER, SlideProps } from './types';
import MindIcon from '../../public/assets/icons/mind.svg';
import RecycleIcon from '../../public/assets/icons/recycle.svg';
import ThumbsUpIcon from '../../public/assets/icons/thumbsup.svg';
import Break from '../../public/Assets/Images/break.jpg';

export const HEADER_CONTACT_SECTION_TEXT =
  "DON'T HAVE AN ACCOUNT? CALL THE WABASH PARTS TEAM AT (888) 727-8702 TO CREATE ONE";
export const CATEGORIES = 'Categories';
export const SLIDER_DATA: SlideProps[] = [
  {
    headText: 'WABASH GENUINE PARTS',
    subText: 'The only place to get real.',
    buttonLabel: 'FIND PARTS',
    onClick: () => {},
    bgImage: Slide1Bg,
  },
  {
    headText: 'NATIONWIDE AVAILABILITY',
    subText: 'We are standing by and ready to ship',
    buttonLabel: 'FIND A PART',
    onClick: () => {},
    bgImage: Slide2Bg,
  },
  {
    headText: 'WAIT LESS. RUN LONGER',
    subText: 'Quick turn-turn delivery to maxamize uptime',
    buttonLabel: 'FIND A PART',
    onClick: () => {},
    bgImage: Slide3Bg,
  },
];

export const SIGN_IN = 'SIGN IN';
export const HEADER_SEARCH_PLACEHOLDER = 'Search part name or keywords';

export const UPDATE_HEADER = 'SAVE DOLLARS. STAY UP-TO-DATE!';
export const UPDATE_BODY =
  'Sign up for our special promotions and product announcements.';

export const UPDATE_PLACHOLDER = 'Enter email';
export const BUTTON_LABEL = 'SUBMIT';
export const SORT_OPTIONS = [
  'Product Name A-Z',
  'Product Name Z-A',
  'Manfacturer A-Z',
  'Manfacturer Z-A',
  'Part Number A-Z',
  'Part Number Z-A',
];

export const MOCK_SERVER_URL = 'http://localhost:5000';

export const TAB_OPTIONS = ['PARTS', 'CATEGORIES', 'SUPPORT', 'ABOUT'];

export const CORE_VALE_CARDS_DATA = [
  {
    icon: MindIcon,
    headText: 'PEACE OF MIND',
    subText: 'On Time, Every Time',
  },
  {
    icon: RecycleIcon,
    headText: 'EFFICIENT OPERATIONS',
    subText: 'Quickest turn times in the industry',
  },
  {
    icon: ThumbsUpIcon,
    headText: 'BETTER RESULTS',
    subText: 'Wabash or Wabash-certified parts that optimize performance.',
  },
];
export const FEATURED_PRODUCTS = 'FEATURED PRODUCTS';
export const START_QUOTE = '“';
export const HOME_BANNER_HEAD_TEXT =
  "Wabash's priority is you. Count on us for inventory availability, technical professionalism, and rapid responsiveness for maxium uptime and operational efficiency ";
export const END_QUOTE = '”';
export const BANNER_QUOTE_AUTHOR = '- Your Wabash Parts Team';
export const SIGNIN_SECTION_TEXT =
  "Don't have an account? Call the Wabash Parts team at (888) 727-8702 to create one";
export const PRODUCT_CARDS_DATA = [
  {
    id: 1,
    productName: '125 ALUM FRAME SUPREME',
    productNumber: 'SUP0033001145NA',
    product: 'SUPREME',
    icon: Break,
  },
  {
    id: 2,
    productName: 'AIR SPRING',
    productNumber: 'FC109978',
    product: 'CONTITECH MEXICANA',
    icon: Break,
  },
  {
    id: 4,
    productName: 'BRAKE DRUM CENTRIFUSE',
    productNumber: '89996B',
    product: 'MOTOR WHEEL',
    icon: Break,
  },
  {
    id: 5,
    productName: 'CAMTAINER BOLT 5/16-18X1 GREY',
    productNumber: '1010361',
    product: 'NEW LIFE PACKAGING',
    icon: Break,
  },
  {
    id: 6,
    productName: 'CONTINENTAL IDLER AND TENSION',
    productNumber: 'CE50107',
    product: 'CONTINENTAL ELITE',
    icon: Break,
  },
  {
    id: 7,
    productName: 'CROSSMEMBER 4"X102"(CC WHITE)',
    productNumber: '1157031',
    product: 'METAL FABRICATION TECH',
    icon: Break,
  },
  {
    id: 8,
    productName: 'CAMTAINER BOLT 5/16-18X1 GREY',
    productNumber: '1010361',
    product: 'NEW LIFE PACKAGING',
    icon: Break,
  },
  {
    id: 9,
    productName: 'CONTINENTAL IDLER AND TENSION',
    productNumber: 'CE50107',
    product: 'CONTINENTAL ELITE',
    icon: Break,
  },
  {
    id: 10,
    productName: 'CROSSMEMBER 4"X102"(CC WHITE)',
    productNumber: '1157031',
    product: 'METAL FABRICATION TECH',
    icon: Break,
  },
];
export const ACCORDION_LABELS = ['Categories', 'Manufacturer'];
export const FILTER_BY = 'FILTER BY';
export const SWITCH_LABELS = ['Stock', 'Promotions'];
export const CLEAR_ALL = 'Clear all';
export const CATEGORIES_LIST = [
  {
    id: 7,
    category: 'Susp Ride Control',
    selected: false,
    subCategories: [
      { id: 101, category: 'Trailer Suspensions', selected: true },
      { id: 102, category: 'Leaf Springs & U-Bolts', selected: false },
      { id: 103, category: 'Shock Absorbers', selected: false },
      { id: 104, category: 'Truck Suspensions', selected: false },
      { id: 105, category: 'Air Springs', selected: false },
    ],
  },
  {
    id: 8,
    category: 'Safety Prods',
    selected: false,
    subCategories: [
      { id: 106, category: 'Misc Safety Products', selected: false },
      { id: 107, category: 'Mudflaps Brkts Parts', selected: false },
      { id: 108, category: 'Fastners-Screws', selected: false },
      { id: 109, category: 'Mirrors', selected: false },
      { id: 110, category: 'Liftgate', selected: false },
      { id: 111, category: 'Fastners-Screws', selected: false },
    ],
  },
  {
    id: 3,
    category: 'Electrical',
    selected: false,
    subCategories: [
      { id: 112, category: 'Electrical Products', selected: false },
      { id: 113, category: 'Misc Hardware', selected: false },
      { id: 114, category: 'Stop & Turn Lights' },
      { id: 115, category: 'Lighting', selected: false },
      { id: 116, category: 'Safety Lights & Alarms', selected: false },
      { id: 117, category: 'Reflective Tape', selected: false },
      { id: 118, category: 'Reflectors', selected: false },
    ],
  },
  {
    id: 4,
    category: 'Axle Components',
    selected: false,
    subCategories: [
      { id: 119, category: 'Axl Comp Tubes', selected: false },
      { id: 120, category: 'Slack Adjusters', selected: false },
    ],
  },
  {
    id: 5,
    category: 'Wheel Parts',
    selected: false,
    subCategories: [
      { id: 121, category: 'Wheel Attach Parts', selected: false },
      { id: 122, category: 'Hubs & Drum Assemblies', selected: false },
      { id: 123, category: 'Drums', selected: false },
      { id: 124, category: 'Oil Seals/Hub Gaskets', selected: false },
      { id: 125, category: 'Bearings', selected: false },
      { id: 126, category: 'Disc Whls', selected: false },
      { id: 127, category: 'Hubdometers', selected: false },
    ],
  },
  {
    id: 6,
    category: 'Miscellaneous',
    selected: false,
    subCategories: [
      { id: 128, category: 'Temporary Nonstocks', selected: false },
      { id: 129, category: 'Damaged Part', selected: false },
      { id: 130, category: 'Catalogs', selected: false },
    ],
  },
];
export const MANUFACTURERS_LIST = [
  { name: '3m Electrical Prod div', selected: false },
  { name: 'Aaa supply', selected: false },
  { name: 'Accuride', selected: false },
  { name: 'Advanced Distrib Svcs', selected: false },
  { name: 'Advanced Plastic Corp', selected: false },
  { name: 'Alcoa Fastening Sys', selected: false },
  { name: 'Alfa Tools', selected: false },
  { name: 'Alkon Corporation', selected: false },
  { name: 'Almag Aluminum', selected: false },
  { name: 'Alro Steel Corp', selected: false },
  { name: 'Aluminum Lines', selected: false },
  { name: 'Active Brass Foundry', selected: false },
];
export const PARTS_HERO_SECTION_DATA = {
  caption: 'EXCEPTIONALLY ENGINEERED PARTS',
  heading: 'PERFOMACE AND DURABILITY',
  description:
    'Products that are engineered to deliver exceptional perfomance and durability,ensuring smooth and efficient transportation every time',
  showButton: true,
  defaultImage:
    'https://parts.onewabash.com/media/wysiwyg/wabash__birds-eye__static-double-heading-slide-main.png',
  fallBackImage:
    'https://parts.onewabash.com/assets/slide_mobile2-8553c4a2.png',
};
export const ALL_PARTS = 'ALL PARTS';
export const MORE_DETAILS = 'to view more details';
export const CONTACT_SIGNIN =
  "Don't have an account? Call the Wabash Parts team at (888) 727-8702 to create one";
export const SIGNIN_TXT = 'Sign in';
export const NO_DETAILS = "Can't find Anything";
export const CATEGORIES_HERO_SECTION_DATA = {
  heading: 'HIGHER QUALITY GREATER SAVINGS',
  description: 'Your ONE-Stop Destination for Reliable and High Quality Parts',
  showButton: false,
  defaultImage:
    'https://parts.onewabash.com/media/wysiwyg/wabash_static-double-heading-slide-main.png',
  fallBackImage:
    'https://parts.onewabash.com/assets/slide_mobile2-8553c4a2.png',
};
export const CATEGORIES_HEAD = 'CATEGORIES';
export const BACK = 'Back';
export const ORDERS_TABLE_HEADERs = [
  'ORDER NO.',
  'CONFIRMATION NO.',
  'ORDER DATE',
  'PO',
  'TOTAL',
  'FREIGHT AMT',
  'STATUS',
  '',
];
export const MANAGE_ORDERS = 'MANAGE ORDERS';
export const CONTACT_1 = "CAN'T FIND WHAT YOU'RE LOOKING FOR?";
export const CONTACT_2 = 'Contact the Wabash Parts Team at (888) 727-8702.';
export const ORDERS_TABS = ['ORDERS', 'INVOICES'];
export const INVOICE_TABLE_HEADS = [
  'INVOICE NO.',
  'INVOICE DATE',
  'PO',
  'SHIP TO',
  'SHIP FROM',
  'FREIGHT AMT',
  'TOTAL',
];
export const HOME_TABS = [
  'PARTS',
  'CATEGORIES',
  'SUPPORT',
  'ABOUT',
  'ORDER MANAGEMENT',
];
export const ORDER_DETAILS_HEADS = [
  'PART',
  'PART NUMBER',
  'QTY',
  'UNIT PRICE',
  'TOTAL',
];
export const MODIFY_TEXT = 'need to modify, return, or cancel?';
export const CALL_US = 'Call us at 1-888-727-8702 or email';
export const SUPPORT = 'for support';
export const CONTACT_MAIl = 'parts.support@onewebash.com';
export const PAYMENT_CARD_DATA = [
  { label: 'savings', value: 0 },
  { label: 'shipping', value: 0 },
  { label: 'tax', value: 0 },
];
export const REQUEST_BUTTON = 'REQUEST A QUOTE';
export const CONTINUE_BUTTON = 'CONTINUE';
