import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import About from "./components/about/About";
import News from "./components/news/News";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import HomePage from "./components/HomePage";
import BT01 from "./btsession49/BT01";
import BT02 from "./btsession49/BT02";
import BT03 from "./btsession49/BT03";
import BT04 from "./btsession49/BT04";
import BT05 from "./btsession49/BT05";
import BT06 from "./btsession49/BT06.tsx/BT06";
import Contact from "./btsession49/BT06.tsx/Contact";
import HomeBt06 from "./btsession49/BT06.tsx/HomeBt06";
import BT07 from "./btsession49/BT07/BT07";
import HomeBt07 from "./btsession49/BT07/HomeBt07";
import ProductBt07 from "./btsession49/BT07/ProductBt07";
import DetailBt07 from "./btsession49/BT07/DetailBt07";
import BT08 from "./btsession49/BT08/BT08";
import AdminBt08 from "./btsession49/BT08/AdminBt08";
import AccountBt08 from "./btsession49/BT08/AccountBt08";
import ProductBt08 from "./btsession49/BT08/ProductBt08";
import ComponentAdmin from "./btsession49/BT08/ComponentAdmin";
import ComponentAccount from "./btsession49/BT08/ComponentAccount";
import ComponentProduct from "./btsession49/BT08/ComponentProduct";
import listProduct from "./components/pages/listProduct";

export default function App() {
  return (
    <div>
      {/* <Routes>
            <Route path='' element={<Home></Home>}>
                <Route index element={<HomePage/>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/news' element={<News></News>}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes> */}

      {/* Bài Tập */}
      <Routes>
        {/* <Route path="" element={<BT01></BT01>}></Route> */}
        {/* <Route path="/contact" element={<BT02></BT02>}></Route> */}
        {/* <Route path="/login" element={<BT03></BT03>}></Route> */}
        {/* <Route path="/register" element={<BT04></BT04>}></Route> */}
        {/* <Route path="*" element={<BT05></BT05>}></Route> */}
        {/* <Route path="" element={<BT06></BT06>}>
          <Route path="/home" element={<HomeBt06></HomeBt06>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route> */}
        {/* <Route path="" element={<BT07></BT07>}>
          <Route path="/home" element={<HomeBt07></HomeBt07>}></Route>
          <Route path="/product" element={<ProductBt07></ProductBt07>}></Route>
          <Route path="/detail" element={<DetailBt07></DetailBt07>}></Route>
        </Route> */}
        {/* <Route path="" element={<BT08></BT08>}>
          <Route path="/admin" element={<AdminBt08></AdminBt08>}>
            <Route
              path="/admin/admin1"
              element={<ComponentAdmin></ComponentAdmin>}
            ></Route>
          </Route>
          <Route path="/account" element={<AccountBt08></AccountBt08>}>
            <Route
              path="/account/componentAccount"
              element={<ComponentAccount></ComponentAccount>}
            ></Route>
          </Route>
          <Route path="/product" element={<ProductBt08></ProductBt08>}>
            <Route
              path="/product/componentProduct"
              element={<ComponentProduct></ComponentProduct>}
            ></Route>
          </Route>
        </Route> */}

        <Route path="/product-detail"></Route>
      </Routes>
    </div>
  );
}
