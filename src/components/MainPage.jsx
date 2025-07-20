import React, { useState } from 'react'

const MainPage = () => {
    const [amount, setAmount] = useState('');
    const [tip, setTip] = useState(''); // ( tip / 100 ) * amount
    const [totalAmount, setTotalAmount] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();

        const amt = parseFloat(amount);
        const t = parseFloat(tip);
        setTotalAmount( ((t / 100) * amt + amt).toFixed(2) );
    }

    const resetHandler = () => {
        setAmount('');
        setTip('');
        setTotalAmount(0.00);
    }

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <section
                className='border border-borderColor h-[95vh] w-[92vw] rounded-lg
                    flex flex-col items-center space-y-4 py-12 px-4'>
                <h1 className='text-5xl font-bold'>TIP CALCULATOR</h1>
                <p className='text-center'>
                    Enter the bill amount and TIP % to calculate the total !
                </p>
                {/* FORM HERE */}
                <form onSubmit={ submitHandler } className='w-full flex flex-col items-center space-y-8 mt-8'>
                    <div className='relative w-full'>
                        <span
                            className='absolute top-1/2 left-6 transform -translate-y-1/2'>$</span>
                        <input value={ amount } onChange={ (e)=>setAmount( e.target.value ) }
                        required id='amount' type="number" className='w-full border border-borderColor
                        pr-4 pl-15 py-4 outline-none' />
                    </div>
                    <div className='relative w-full'>
                        <span
                                className='absolute top-1/2 left-6 transform -translate-y-1/2'>%</span>
                        <input value={ tip } onChange={ (e)=>setTip(e.target.value) }
                            required id='tip' type="number" className='w-full border border-borderColor
                            pr-4 pl-15 py-4 outline-none' />
                    </div>
                    <div className='w-full'>
                        <button
                            type='submit' className='bg-themeBlue outline-none w-full px-4 py-4 mt-4 rounded-lg font-semibold'>
                            Calculate Tip
                        </button>
                        <button onClick={ resetHandler }
                            type='reset' className='border border-borderColor outline-none w-full px-4 py-4 mt-4 rounded-lg font-semibold'>
                            Reset
                        </button>
                    </div>
                </form>
                <div className='flex flex-col items-start w-full mt-8'>
                    <p className='text-2xl'>Total bill : { amount }</p>
                    <p className='text-2xl'>Tip amount : { tip }</p>
                    <p className='text-start w-full mt-8 text-3xl font-semibold'>Final bill : 
                        <span className='text-[2.5rem] font-bold'> ${ totalAmount }</span>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default MainPage
