import React, { useState } from 'react';
import '../style.css'
import sneaker from '../photo/sneaker.jfif'
import "bootstrap/dist/css/bootstrap.min.css";


const Main = () => {
    const [text, setText] = useState(false)
    const [del, setDel] = useState(false)

    const adam = () => {
        setText(!text)
    }
    const basket = () => {
        setDel(!del)
    }

    return (
        <>
            <div className='rodblock'>
                <img className='sneaker' src={sneaker} alt='#'></img>
                <div className='podblock'>
                    <div className='text'>
                        <b className='nike'>Nike sneaker</b>
                        <p className='dol'><b>$ 120</b></p>
                        
                    </div>
                    <div className='btnn'>
                        <button 
                         onClick={() => adam ()}
                         className='btn btn-outline-pimary but'>Детали</button>
                    </div>
                    {text && <div className='adm1'>

                        <div className='ipsum'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore molestiae cum fugiat!.</div>                        <div>
                            <button 
                            onClick={() => adam()}
                            className='x'>x</button>
                        </div>
                    </div>}
                </div>
                <hr></hr>
                <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.</p>
                <button disabled={del} onClick={ () => basket()} className='btn btn-success dob'>{!del ? "Добавить в корзину" : 'уже в корзине'}
                </button>
                <div className="btnDel">
                {del && <button className='delbtn' onClick={() => basket()} > Удалить из корзины  </button>}
                </div>
            </div>
        </>
    );
};

export default Main;