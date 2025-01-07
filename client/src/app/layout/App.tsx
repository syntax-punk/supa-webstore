import Catalog from "@/features/catalog/Catalog"
import Header from "@/features/nav/MainNavBar"

function App() {

  return (
    <>
      <Header />
      <div className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
        <Catalog />
      </div>
    </>
  )
}

export default App
