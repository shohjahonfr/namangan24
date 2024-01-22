import { Link } from "react-router-dom"
import error from '../img/error.jpg'

const Xatolar = () => {
  return(
    <div>
      <div className="py-8 text-center">
        <h2 className="text-center text-3xl font-semibold">Bunday sahifa topilmadi</h2>
        <div className="flex justify-center">
        <img className="w-[300px] h-[300px] my-8" src={error} alt="" />
        </div>
       <Link className="p-3 border-2 bg-slate-300 hover:border-blue-900 hover:text-blue-500 duration-300 rounded-lg" to="/">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  )
}

export default Xatolar