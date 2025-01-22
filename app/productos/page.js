import { db  } from "../../firebase/firebaseconfig";
import{collection, doc, getDocs} from "firebase/firestore";
import { ItemList } from "./Itemlist";
import { Suspense } from "react";
import Loader from "../componnents/common/loader";
const  ItemListContainer = async () => {
const productosRef = collection(db, "productos");
const productosRequest = await getDocs(productosRef);
const products =productosRequest.docs.map((doc) => ({...doc.data(), id: doc.id}));

    return (
      <Suspense fallback={<Loader />}>
     <ItemList products={products} />
     </Suspense >
    )
  };

  
  export default ItemListContainer;