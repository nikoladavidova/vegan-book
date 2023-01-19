import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import info from "@/pages/info";
import{Card} from "@/pages/components/card";
export default function App({ Component, pageProps }: AppProps) {
  return(
      <div>

    <h1 className="text-5xl text-center m-12">
      Moje recepty
    </h1>

    <>
      {info.map(({name, timeEstimationInMinutes,difficulty,isVegan, imageUrl, id,ingredients,description})=>
          <Card name={name}
                timeEstimationInMinutes ={timeEstimationInMinutes}difficulty ={difficulty}
                isVegan ={isVegan} imageUrl ={imageUrl} id ={id} ingredients={ingredients} description={description}
          />)}
    </>



    <Component {...pageProps} />
  </div>)


}
