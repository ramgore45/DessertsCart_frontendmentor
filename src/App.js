import '@fontsource/red-hat-text';
import { Deserts } from './components/dessertPage/Deserts';
import { Carts } from './components/cartPage/Carts';
import { useContext } from 'react';
import { ProductContext } from './components/useContext/Productcontext';
import { ConfirmationModal } from './components/confirmationModal/ConfirmationModal';

function App() {

  const{ showConfirm } = useContext(ProductContext)
  console.log(showConfirm)

  return (
    <div className='relative'>
      <div className="absolute z-10 w-screen py-10 p-7 sm:p-20 bg-rose-50 flex justify-between flex-col sm:flex-row">
        <div className='w-full sm:w-[55%] lg:w-[65%]'>
          <Deserts/>
        </div>
        <div className='w-full sm:w-[43%] lg:w-[35%]'>
          <Carts/>
        </div>
      </div>
      {
        showConfirm &&
        (
            <div className='fixed w-full h-screen flex justify-center items-center z-30 bg-black bg-opacity-50'>
              <ConfirmationModal/>
            </div>
        )
      }
    </div>
  );
}

export default App;
