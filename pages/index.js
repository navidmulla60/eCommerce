import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../Lib/client';
const Home = ({products,bannerData })=> {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div className='products-heading'>
        <h2>Best selling product</h2>
        <p>Headphones of many variations</p>
      </div>
      <div className='products-container'>
        {products.length}
        {products?.map((product) => <Product key={product._d} product={product} />)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0] } />
   </>
  )
}
export const getServerSideProps = async () => {
  console.log("inside: ");
  const query = '*[_type=="product"]';
  const products=await client.fetch(query)
  const bannerquery = '*[_type=="banner"]';
  const bannerData = await client.fetch(bannerquery)
  console.log("data numbers: " ,products)
  return {
    
    props:{products,bannerData}
  }
}
export default Home
