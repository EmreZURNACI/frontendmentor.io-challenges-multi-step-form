import React, { useRef } from 'react'
import FormContainer from './FormContainer'
import ButtonContainer from './ButtonContainer'
import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedPlan, setType } from '../Features/SelectionType'
import { useMediaQuery } from 'react-responsive'
function SelectPlanForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isChecked = useSelector((state) => state.SelectionTypeReducer.type)
  const arcadeRef = useRef();
  const advancedRef = useRef();
  const proRef = useRef();
  const setPlan = (ref) => {
    document.querySelectorAll("li").forEach((element) => {
      if (element.classList.contains("border-PurplishBlue")) {
        element.classList.remove("border-PurplishBlue")
      }
      ref.current.classList.add("border-PurplishBlue")
    })
  }
  const isDesktop = useMediaQuery({
    query: '(min-width: 376px) and (max-width: 1920px)'
  });
  return (
    <FormContainer>
      <div className={isDesktop ? "mb-6 w-[calc(72%)]" : ""}>
        <h2 className='text-4xl font-Ubuntu-Bold text-MarineBlue mb-2'>Select your plan</h2>
        <p className='text-CoolGray font-Ubuntu-Regular'>You have the option of monthly and yearly billing.</p>
      </div>
      <div className={isDesktop ? "mb-6 w-[calc(72%)]" : "mt-8"}>
        <ul className={"flex justify-between items-center gap-x-2  " + (isDesktop === false && "flex-col gap-y-4")}>
          <li className={"w-full border border-lightGray border-PurplishBlueHover cursor-pointer rounded-xl  "
            + (isChecked === false && isDesktop === true ? "p-8" : "p-4")}
            onClick={() => { setPlan(arcadeRef); dispatch(setSelectedPlan("Arcade")); }} ref={arcadeRef} >
            <div className={"flex  " + (isDesktop ? "flex-col" : "flex-row gap-x-4")}>
              <div className={"flex  " + (isChecked === false ? "justify-center" : "justify-start")}>
                <img src={Arcade} alt="Arcade Icon" className={isDesktop && "mb-8"} />
              </div>
              <div>
                {
                  isChecked === false ?
                    <>
                      <p className='font-Ubuntu-Bold text-MarineBlue'>Arcade</p>
                      <p className='text-CoolGray font-Ubuntu-Regular'>$9/mo</p>
                    </>
                    :
                    <>
                      <p className='font-Ubuntu-Bold text-MarineBlue'>Arcade</p>
                      <p className='text-CoolGray font-Ubuntu-Regular'>$90/yr</p>
                      <p className='text-MarineBlue  font-Ubuntu-Semibold'>2 months free</p>
                    </>
                }
              </div>
            </div>
          </li>
          <li className={"w-full border border-lightGray border-PurplishBlueHover cursor-pointer rounded-xl  "
            + (isChecked === false && isDesktop === true ? "p-8" : "p-4")}
            onClick={() => { setPlan(advancedRef); dispatch(setSelectedPlan("Advanced")); }} ref={advancedRef} >
            <div className={"flex  " + (isDesktop ? "flex-col" : "flex-row gap-x-4")}>
              <div className={"flex  " + (isChecked === false ? "justify-center" : "justify-start")}>
                <img src={Advanced} alt="Advanced Pro" className={isDesktop && "mb-8"} />
              </div>
              <div>
                {
                  isChecked === false ?
                    <>
                      <p className='font-Ubuntu-Bold text-MarineBlue'>Advanced</p>
                      <p className='text-CoolGray font-Ubuntu-Regular'>$12/mo</p>
                    </>
                    :
                    <>
                      <p className='font-Ubuntu-Bold text-MarineBlue'>Advanced</p>
                      <p className='text-CoolGray font-Ubuntu-Regular'>$120/yr</p>
                      <p className='text-MarineBlue  font-Ubuntu-Semibold'>2 months free</p>
                    </>
                }

              </div>
            </div>
          </li>
          <li className={"w-full border border-lightGray border-PurplishBlueHover cursor-pointer rounded-xl  "
            + (isChecked === false && isDesktop === true ? "p-8" : "p-4")}
            onClick={() => { setPlan(proRef); dispatch(setSelectedPlan("Pro")); }} ref={proRef} >
            <div className={"flex  " + (isDesktop ? "flex-col" : "flex-row gap-x-4")}>
              <div className={"flex  " + (isChecked === false ? "justify-center" : "justify-start")}>
                <img src={Pro} alt="Pro Icon" className={isDesktop && "mb-8"} />
              </div>
              <div>

                {
                  isChecked === false ?
                    <>
                      <p className='font-Ubuntu-Bold text-MarineBlue'>Pro</p>
                      <p className='text-CoolGray font-Ubuntu-Regular'>$15/mo</p>
                    </>
                    :
                    <>
                      <p className='font-Ubuntu-Bold text-MarineBlue'>Pro</p>
                      <p className='text-CoolGray font-Ubuntu-Regular'>$150/yr</p>
                      <p className='text-MarineBlue  font-Ubuntu-Semibold'>2 months free</p>
                    </>
                }
              </div>


            </div>
          </li>
        </ul >
        <div className='flex items-center justify-center my-8'>
          <div className='flex items-center'>
            <div className='px-4'>
              <p className={"text-md font-Ubuntu-Bold   " + (isChecked === false ? "text-MarineBlue" : "text-CoolGray")}>Monthly</p>
            </div>
            <div className="checkbox-wrapper-22 flex items-center">
              <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" defaultChecked={isChecked} onChange={() => dispatch(setType())} />
                <div className="slider round"></div>
              </label>
            </div>
            <div className='px-4'>
              <p className={"text-md font-Ubuntu-Bold   " + (isChecked === true ? "text-MarineBlue" : "text-CoolGray")}>Yearly</p>
            </div>
          </div>
        </div>
      </div >
      <ButtonContainer>
        <button type="button" className='py-3 px-6 bg-transparent font-bold text-md text-MarineBlue rounded-md' onClick={() => navigate("/")}>
          Go Back
        </button>
        <button type="submit" className='py-3 px-6 bg-MarineBlue font-bold text-md text-white rounded-md' onClick={() => navigate("/addOns")}>
          Next Step
        </button>
      </ButtonContainer>
    </FormContainer >
  )
}

export default SelectPlanForm