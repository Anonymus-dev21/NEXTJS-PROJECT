import Loader from "@/app/componnents/common/loader";
import { db } from "../../../firebase/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { Suspense } from "react";
import Detail from "./Detail";

export default async function ItemDetailPage({ params }) {
    if(!params) return <h2>Cargando...</h2>;
   const { id } = params; 

  if(!id) return <h2>Producto no encontrado</h2>;
  try{
    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    if(!docSnap.exists()) return <h2>Producto no encontrado</h2>;
    const product = docSnap.data();

    return (
      <>
      <Suspense fallback={<Loader />}>
        <Detail productDetail={product} />
        </Suspense>
      </>
    )
  } catch (error) {
    console.log(error);
  }
  
}