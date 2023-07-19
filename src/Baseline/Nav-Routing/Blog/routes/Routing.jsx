import React from 'react'
import { Route, Routes } from "react-router-dom";
import SeoPPC from "../Blogs/SeoPPC/SeoPPC"
import EComm from "../Blogs/EComm/EComm"
import Cms from "../Blogs/Cms/Cms"
import SearchEng from "../Blogs/SearchEng/SearchEng"
import ItBusiness from "../Blogs/ITBusiness/ItBusiness"
import SeoExpert from "../Blogs/SeoExpert/SeoExpert"
import FrontEndWeb from "../Blogs/FrontEndWeb/FrontEndWeb"
import DelopingWeb from "../Blogs/Devloping/DelopingWeb"

function Routing() {
  return (
    <div>

      <Routes>
        <Route path="/seo-vs-ppc" element={<SeoPPC/>}></Route>
        <Route path="/e-commerce-website-development" element={<EComm/>}></Route>
        <Route path="/right-cms-for-your-website" element={<Cms/>}></Route>
        <Route path="/website-for-search-engines" element={<SearchEng/>}></Route>
        <Route path="/it-services-for-your-business" element={<ItBusiness/>}></Route>
        <Route path="/hiring-an-seo-expert" element={<SeoExpert/>}></Route>
        <Route path="/it-services-for-your-business" element={<FrontEndWeb/>}></Route>
        <Route path="/consider-when-developing" element={<DelopingWeb/>}></Route>
      </Routes>

    </div>
  )
}

export default Routing