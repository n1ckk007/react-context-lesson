import {createContext} from 'react'
import SHOP_DATA from './shop.data'

// create new context, that stores this shop data and this will be our initial value of our context
const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;