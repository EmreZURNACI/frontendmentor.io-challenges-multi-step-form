import React from 'react'
import { Formik } from 'formik'
import FormContainer from './FormContainer'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import ButtonContainer from './ButtonContainer'
function PersonelInfoForm() {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery({
        query: '(min-width: 376px) and (max-width: 1920px)'
    });
    return (
        <FormContainer>
            <div className='mb-6'>
                <h2 className='text-4xl font-Ubuntu-Bold text-MarineBlue mb-2'>Personel info</h2>
                <p className='text-CoolGray font-Ubuntu-Regular'>Please provide your name,email address,and phone number.</p>
            </div>
            <Formik
                initialValues={{ email: "", name: "", tel: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'This field is required';
                    }
                    if (!values.name) {
                        errors.name = 'This field is required';
                    }
                    if (!values.tel) {
                        errors.tel = 'This field is required';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    if (values.email && values.name && values.tel) {
                        navigate("/selectPlan")
                    }
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className={"mb-4  " + (isDesktop && "w-[calc(75%)]")}>
                            <div className='flex justify-between'>
                                <label htmlFor="name" className=' text-MarineBlue'>Name</label>
                                <span className='text-strawberryRed'>{errors.name && touched.name && errors.name}</span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                id='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder='e.g. Stephen King'
                                className={!(errors.name && touched.name && errors.name) ?
                                    ("outline-0 border border-lightGray border-PurplishBlueFocus w-full py-3 px-5 rounded-lg cursor-pointer text-MarineBlue") :
                                    ("outline-0 border border-strawberryRed border-PurplishBlueFocus w-full py-3 px-5 rounded-lg cursor-pointer text-MarineBlue")}
                            />

                        </div>
                        <div className={"mb-4  " + (isDesktop && "w-[calc(75%)]")}>
                            <div className='flex justify-between'>
                                <label htmlFor="email" className=' text-MarineBlue'>Email Address</label>
                                <span className='text-strawberryRed'>{errors.email && touched.email && errors.email}</span>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder='e.g. stepking@lorem.com'
                                className={!(errors.email && touched.email && errors.email) ?
                                    ("outline-0 border border-lightGray border-PurplishBlueFocus w-full py-3 px-5 rounded-lg cursor-pointer text-MarineBlue") :
                                    ("outline-0 border border-strawberryRed border-PurplishBlueFocus w-full py-3 px-5 rounded-lg cursor-pointer text-MarineBlue")}
                            />

                        </div>
                        <div className={"mb-8  " + (isDesktop && "w-[calc(75%)]")}>
                            <div className='flex justify-between'>
                                <label htmlFor="tel" className=' text-MarineBlue'>Phone Number</label>
                                <span className='text-strawberryRed'>{errors.tel && touched.tel && errors.tel}</span>
                            </div>
                            <input
                                type="tel"
                                name="tel"
                                id='tel'
                                pattern="[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.tel}
                                placeholder='e.g. +1 234 567 890'
                                className={!(errors.tel && touched.tel && errors.tel) ?
                                    ("outline-0 border border-lightGray border-PurplishBlueFocus w-full py-3 px-5 rounded-lg cursor-pointer text-MarineBlue") :
                                    ("outline-0 border border-strawberryRed border-PurplishBlueFocus w-full py-3 px-5 rounded-lg cursor-pointer  text-MarineBlue")}
                            />

                        </div>
                        <ButtonContainer>
                            <button type="submit"
                                className='py-3 px-6 bg-MarineBlue font-medium text-md text-white rounded-md'
                                disabled={isSubmitting}
                            >
                                Next Step
                            </button>
                        </ButtonContainer>
                    </form>
                )}
            </Formik>

        </FormContainer>
    )
}

export default PersonelInfoForm