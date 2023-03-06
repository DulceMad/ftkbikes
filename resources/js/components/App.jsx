import * as React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Bikes from "./Bikes";
import NavBar from "./NavBar";
import  Home  from "./Home";
import Login from "./Login";
import NavBar2 from "./NavBar2";
import Supplier from "./Supplier";
import Product from "./Product";
import Category from "./Category";
import Detail from "./Detail";
import Users from "./Users";
import Sales from "./Sales";
import Registration from "./Registration";
import InsertProduct from "./InsertProduct";
import UpdateProduct from "./UpdateProduct";
import InsertCategory from "./InsertCategory";
import UpdateCategory from "./UpdateCategory";
import UpdateSupplier from "./UpdateSupplier";
import InsertSupplier from "./InsertSupplier";
import RegisterAdmin from "./RegisterAdmin";

export default function App(){
    return(
        <div className="App" >
            <BrowserRouter>
                <Routes>
                    <Route path="/Proyecto/public/" element={<NavBar/>}>
                        <Route index element={<Home/>}/>
                        <Route path="bikes" element={<Bikes/>} />
                        <Route path="home" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="registration" element={<Registration/>}/>
                    </Route>
                    
                    <Route path="/Proyecto/public/" element={<NavBar2/>}>
                        <Route path="navbar2" element={<NavBar2/>}/>
                        <Route path="Supplier" element={<Supplier/>}/>
                        <Route path="product" element={<Product/>}/>
                        <Route path="category" element={<Category/>}/>
                        <Route path="detail" element={<Detail/>}/>
                        <Route path="users" element={<Users/>}/>
                        <Route path="sales" element={<Sales/>}/>
                        <Route path="insertproduct" element={<InsertProduct/>}/>
                        <Route path="updateproduct/:id" element={<UpdateProduct/>}/>
                        <Route path="insertcategory" element={<InsertCategory/>}/>
                        <Route path="updatecategory/:id" element={<UpdateCategory/>}/>
                        <Route path="insertsupplier" element={<InsertSupplier/>}/>
                        <Route path="updatesupplier/:id" element={<UpdateSupplier/>}/>
                        <Route path="registeradmin" element={<RegisterAdmin/>}/>
                    </Route>
                </Routes>   
            </BrowserRouter>
        </div>
    )
}