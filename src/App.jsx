import Navbar from "./Components/Navbar"
import CustomerReviews from "./sections/CustomerReviews"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import Services from "./sections/Services"
import SpecialOffers from "./sections/SpecialOffers"
import Subscribe from "./sections/Subscribe"
import Superquality from "./sections/Superquality"


const App = () => {
  return (
<>
    <main className='relative'>
    <Navbar />
    </main>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <Superquality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffers />
    </section>
    <section className=' bg-pale-blue padding'>
     <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className=' bg-black padding-x padding-t pb-8'>
     <Footer />
    </section>

</>
  )
}

export default App
