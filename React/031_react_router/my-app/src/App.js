import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index() {
  return <h2>Index</h2>
}

function Products() {
  const {id} = useParams();
  return <h2>{id}번 째 product 페이지입니다.</h2>
}

function ProductsNotice() {
  const {id} = useParams();
  return <h2>{id}번 째 product notice 페이지입니다.</h2>
}

function Cart () {
  return <h2>cart</h2>
}

function Users () {
  return <h2>users</h2>
}

function UsersCoupon () {
  return <h2>usersCoupon 페이지입니다.</h2>
}
function UsersQuestion () {
  return <h2>usersQuestion 페이지입니다.</h2>
}
function UsersNotice () {
  return <h2>usersNotice 페이지입니다.</h2>
}

function A () {
  return <h2>a</h2>
}
function B () {
  return <h2>b</h2>
}
function C () {
  return <h2>c</h2>
}
function C1 () {
  return <h2>1</h2>
}
function C2 () {
  return <h2>2</h2>
}
function Cd () {
  return <h2>d</h2>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products/:id" element={<Products />}/>
        <Route path="/products/:id/*" element={<Outlet />}>
          <Route path="notice" element={<ProductsNotice />}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/users/*" element={<Outlet />}>
          <Route path="coupon" element={<UsersCoupon/>} />
          <Route path="question" element={<UsersQuestion/>} />
          <Route path="notice" element={<UsersNotice/>} />
        </Route>
        <Route path="/a" element={<A />}/>
        <Route path="/b" element={<B />}/>
        <Route path="/c" element={<C />}/>
        <Route path="/c/*" element={<Outlet />}>
          <Route path="1" element={<C1 />}/>
          <Route path="2" element={<C2 />}/>
          <Route path="d" element={<Cd />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;