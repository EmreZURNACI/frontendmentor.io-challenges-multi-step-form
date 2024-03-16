import React from 'react'
import FormContainer from './FormContainer'
import ButtonContainer from './ButtonContainer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
function SummaryForm() {
    const navigate = useNavigate();
    const selectedType = useSelector((state) => state.SelectionTypeReducer.selectedPlan)
    const type = useSelector((state) => state.SelectionTypeReducer.type)
    const addOns = useSelector((state) => state.SelectionTypeReducer.addOns)
    const mode = type === false ? 1 : 10;
    const totalPrice = () => {
        var _totalPrice = 0;
        _totalPrice = planPrice();
        Array.from(addOns).forEach((item) => {
            if (item === "Online service") {
                _totalPrice += 1 * mode;
            }
            else {
                _totalPrice += 2 * mode;

            }
        })
        return _totalPrice;
    }
    const planPrice = () => {
        var _price = 0;
        switch (selectedType) {
            case "Arcade":
                _price = 9 * mode; break;
            case "Advanced":
                _price = 12 * mode; break;
            case "Pro":
                _price = 15 * mode; break;
            default: break;
        }
        return _price;
    }
    const isDesktop = useMediaQuery({
        query: '(min-width: 376px) and (max-width: 1920px)'
    });
    return (
        <FormContainer>
            <div className={"mb-6 " + (isDesktop && "w-[calc(75%)]")}>
                <h2 className='text-4xl font-Ubuntu-Bold text-MarineBlue mb-2'>Finishing up</h2>
                <p className='text-CoolGray font-Ubuntu-SemiBold'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className={"mb-6 " + (isDesktop && "w-[calc(72%)]")}>
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <p className='font-Ubuntu-Bold text-MarineBlue'>{selectedType}({type === false ? "Monthly" : "Yearly"})</p>
                        <p className='font-Ubuntu-SemiBold text-CoolGray underline-offset-2 underline cursor-pointer text-PurplishBlueHover'
                            onClick={() => navigate("/selectPlan")}>Change</p>
                    </div>
                    <div>
                        <p className='font-Ubuntu-Bold text-MarineBlue text-lg'>{planPrice()}/{type === false ? "mo" : "yr"}</p>
                    </div>
                </div>
                <ul className='mb-6'>
                    {
                        Array.from(addOns).map((ons, key) => (
                            <li className='flex justify-between items-center mb-4' key={key}>
                                <p className='font-Ubuntu-SemiBold text-CoolGray'>{ons}</p>
                                <p className='font-Ubuntu-SemiBold text-MarineBlue text-base'>+{(ons === "Online service" ? 1 : 2) * (type === false ? 1 : 10)}${type === false ? "/mo" : "/yr"}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex justify-between items-center'>
                    <p className='font-Ubuntu-SemiBold text-CoolGray'>Total(per {type === false ? "Month" : "Year"})</p>
                    <p className='font-Ubuntu-Bold text-PurplishBlue text-xl'>${totalPrice()}{type === false ? "/mo" : "/yr"}</p>
                </div>

            </div>
            <ButtonContainer>
                <button type="button" className='py-3 px-6 bg-transparent font-medium text-md text-MarineBlue rounded-md' onClick={() => navigate("/addOns")}>
                    Go Back
                </button>
                <button type="submit" className='py-3 px-6 bg-PurplishBlue font-medium text-md text-white rounded-md' onClick={() => navigate("/thanks")}>
                    Confirm
                </button>
            </ButtonContainer>
        </FormContainer>
    )
}

export default SummaryForm