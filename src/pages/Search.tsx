import Layout from "@/components/Layout"
import { useParams } from "react-router"
function Search() {
  const pageName = useParams()
  
  return (
    <div className="football w-full h-fit">
      <Layout name={pageName.search}/>
    </div>
  )
}

export default Search