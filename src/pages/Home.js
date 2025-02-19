import React, { useState } from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';



const Home = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const disableButton = () => {
        setButtonDisabled(true);
        
    };

    const enableButton = () => {
        setButtonDisabled(false);
        
    };
    
    return (
        <>
         <section id="home">

         <div className="container" style={isButtonDisabled ?
                    styles.disabledButton : styles.enabledButton} >                   

                    <div> 
                       <h1>weclome to bala shopping site!...</h1>
                      
                    </div>
                </div>
        <div className="container">
           
            <button
                onClick={disableButton}
                style={isButtonDisabled ?
                    styles.disabledButton : styles.enabledButton}
                disabled={isButtonDisabled}
            >
                Choose product
            </button>
            <button
                onClick={enableButton}
                style={!isButtonDisabled ?
                    styles.disabledButton : styles.enabledButton}
                disabled={!isButtonDisabled}
            >
                Go to home...
            </button>
        </div>
      
              
                      
                <div className="container" style={!isButtonDisabled ?
                    styles.disabledButton : styles.enabledButton} >                   

                    <div className="home_content">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
                </section >       
        </>
    );
};

export default Home;
const styles = {
    // container: {
    //     textAlign: 'center',
    //     margin: 'auto',
    //     padding: '20px',
    //     width: 400,
    // },
    
    heading: {
        fontSize: '34px',
        marginBottom: '10px',
        color: "green",
        borderBottom: "3px solid green",
        paddingBottom: 20,
        borderRadius: "8px",
    },
    disabledButton: {
        // backgroundColor: 'gray',
        // color: 'white',
        // cursor: 'not-allowed',
         margin: 10,
        padding: 15,
        borderRadius: "8px",
        // border: "none",
        boxShadow: "0px 0px 10px 0px grey",
        display: "none"
    },
    enabledButton: {
        // backgroundColor: 'red',
        // color: 'black',
        // cursor: 'pointer',
        margin: 10,
        padding: 15,
        borderRadius: "8px",
        // border: "none",
        boxShadow: "0px 0px 10px 0px grey",
        display: "block",
        
    },
};