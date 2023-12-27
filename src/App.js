import './App.css';
import Country from './components/Country';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import Search from './components/Search';

function App() {
    const isLogin = true;
    const isSearch = true;

    const arrayMenu = [
      "Home",
      "Products",
      "News",
      "Introduce",
      "Contact"
    ];

    // if(isLogin === true){
    //   return (
    //     <>
    //     Login
    //     </>
    //   );
    // }else{
    //   return (
    //     <>
    //       Not login
    //     </>
    //   );
    // }

    return(
      <>
        {isLogin ? (<>TRUE</>) : (<>FASLE </>)}
        {isSearch && <Search/>}
        {<Menu menu={arrayMenu}/>}
        <div>
          {<ProductList />}
        </div>
        <div>
          {<Country />}
        </div>
      </>

    )
}

export default App;
