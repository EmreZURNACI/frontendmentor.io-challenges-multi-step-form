import React from 'react'
import FormContainer from './FormContainer'
import ButtonContainer from './ButtonContainer'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setAddOns } from '../Features/SelectionType'
import { useMediaQuery } from 'react-responsive';
function AddOnsForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isChecked = useSelector((state) => state.SelectionTypeReducer.type)
    const isDesktop = useMediaQuery({
        query: '(min-width: 376px) and (max-width: 1920px)'
    });
    return (
        <FormContainer>
            <div className={"mb-6 " + (isDesktop ? "w-[calc(75%)]" : "")}>
                <h2 className='text-4xl font-Ubuntu-Bold text-MarineBlue mb-2'>Pick add-ons</h2>
                <p className='text-CoolGray font-Ubuntu-Regular'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className={"mb-8 " + (isDesktop ? "w-[calc(75%)]" : "")}>
                <ul className='flex flex-col gap-y-4'>
                    <li className='border border-solid borderWhite'>
                        <label htmlFor="online_service" className='cursor-pointer'>
                            <div className='flex items-center justify-between py-5 px-3 border border-PurplishBlueHover rounded-xl'>
                                <div className='flex items-center gap-x-4'>
                                    <input type="checkbox" name='online_service' id='online_service' className='accent-PurplishBlue h-5 w-5 ps-4' />
                                    <div>
                                        <p className='font-Ubuntu-Bold text-MarineBlue'>Online service</p>
                                        <p className='text-CoolGray font-Ubuntu-Regular'>Access to multiplayer games</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-PurplishBlue font-Ubuntu-Regular'>{isChecked === false ? "+1$/mo" : "+10$/yr"}</p>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className='border border-solid borderWhite'>
                        <label htmlFor="larger_storage" className='cursor-pointer'>
                            <div className='flex items-center justify-between py-5 px-3 border border-PurplishBlueHover rounded-xl'>
                                <div className='flex items-center gap-x-4'>
                                    <input type="checkbox" name='larger_storage' id='larger_storage' className='accent-PurplishBlue h-5 w-5 ps-4' />
                                    <div>
                                        <p className='font-Ubuntu-Bold text-MarineBlue'>Larger storage</p>
                                        <p className='text-CoolGray font-Ubuntu-Regular'>Extra 1TB of cloud save</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-PurplishBlue font-Ubuntu-Regular'>{isChecked === false ? "+2$/mo" : "+20$/yr"}</p>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li className='border border-solid borderWhite'>
                        <label htmlFor="customizable_profile" className='cursor-pointer'>
                            <div className='flex items-center justify-between py-5 px-3 border border-PurplishBlueHover rounded-xl'>
                                <div className='flex items-center gap-x-4'>
                                    <input type="checkbox" name='customizable_profile' id='customizable_profile' className='accent-PurplishBlue h-5 w-5 ps-4' />
                                    <div>
                                        <p className='font-Ubuntu-Bold text-MarineBlue'>Customizable profile</p>
                                        <p className='text-CoolGray font-Ubuntu-Regular'>Custom theme on your profile</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-PurplishBlue font-Ubuntu-Regular'>{isChecked === false ? "+2$/mo" : "+20$/yr"}</p>
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <ButtonContainer>
                <button type="button" className='py-3 px-6 bg-transparent font-bold text-md text-MarineBlue rounded-md' onClick={() => {
                    dispatch(setAddOns());
                    navigate("/selectPlan")
                }}>
                    Go Back
                </button>
                <button type="button" className='py-3 px-6 bg-MarineBlue font-medium text-md text-white rounded-md' onClick={() => {
                    dispatch(setAddOns());
                    navigate("/summary")
                }}>
                    Next Step
                </button>
            </ButtonContainer>
        </FormContainer>
    )
}

export default AddOnsForm