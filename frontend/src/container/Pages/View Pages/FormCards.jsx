import React from 'react'
import FormCard from '../../../components/utils/FormCard'
import Institution from '../../assests/institution.jpeg'
import Teaching from '../../assests/teaching.jpeg'
import NonTeaching from '../../assests/non-teaching.jpeg'
import Research from '../../assests/research.jpeg'
import Sports from '../../assests/sports.jpeg'

const FormCards = () => {
    return (
        <div className='p-5 w-full h-screen '>

            {/* Headers  */}
            <div className='flex flex-col'>
                <div className='text-xl font-Poppins font-semibold'>
                    <h2> Forms</h2>
                </div>
                <div className='my-1'>
                    <p className='text-md font-Poppins'>
                        Forms are shown as per eligibility criteria of Institutions
                    </p>
                </div>
            </div>

            {/* Cards  */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[5rem]  pb-[5rem] mt-[5rem] place-items-center'>

                <div className=''>
                    <FormCard
                        image={Institution}
                        title="Outstanding Institution"
                        info="Celebrating excellence, impact, and remarkable achievements of outstanding institutions."
                        link="/forms/outstanding-institution"
                    />
                </div>
                <div>
                    <FormCard
                        image={Sports}
                        title="Sports"
                        info="Award form for sports: Honoring excellence in athletic achievements worldwide"
                        link="/forms/sports"
                    />
                </div>
                <div>
                    <FormCard
                        image={Research}
                        title="Excellence in Research"
                        info="Honoring excellence in research through prestigious and impactful awards."
                        link="/forms/research"
                    />
                </div>
                <div>
                    <FormCard
                        image={Teaching}
                        title="Teaching"
                        info="Recognizing teaching excellence with prestigious awards to inspiring educators"
                        link="/forms/teaching"
                    />
                </div>
                <div>
                    <FormCard
                        image={NonTeaching}
                        title="Non Teaching"
                        info="Commending administrative and staff excellence, driving institutional success and growth."
                        link="/forms/non-teaching"
                    />
                </div>
            </div>

        </div>
    )
}

export default FormCards
