import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* مثلا نوبار یا سایدبار
      <header>My Navbar Here</header> */}

      {/* اینجا صفحه‌های داخلی نمایش داده میشود */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import SideMenu from "./SideMenu";

// function Layout() {
//   return (
//     <>
//       <div className="md:h-16">
//         <Header />
//       </div>
//       <div className="grid grid-cols-12 bg-gray-100 items-baseline">
//         <div className="col-span-2 h-screen sticky top-0 hidden lg:flex">
//           <SideMenu />
//         </div>
//         <Outlet />
//       </div>
//     </>
//   );
// }

// export default Layout;
