import {formateDate} from '../../utils/formatDate.js';

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Dr. John Doe
          </span>
        </h3>
        <p className='text__para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam ipsum quibusdam quod unde. Dolore aperiam alias, nobis deleniti id labore officia libero odit, fugit, soluta tempore consequuntur modi porro?
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] text-irisBlueColor leading-6 font-semibold'>
              {formateDate("02-08-2000")} - {formateDate("02-08-2000")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PHD in Surgeon
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              University of Central Florida
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-[15px] text-irisBlueColor leading-6 font-semibold'>
                {formateDate("12-04-2010")} - {formateDate("02-08-2000")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                PHD in Surgeon
              </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              University of Central Florida
            </p>
          </li>
        </ul>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-[15px] text-yellowColor leading-6 font-semibold'>
              {formateDate("12-04-2010")} - {formateDate("02-08-2000")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr. Sugeon
            </p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              ABC Hospital, XYZ City
            </p>
          </li>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-[15px] text-yellowColor leading-6 font-semibold'>
              {formateDate("12-04-2010")} - {formateDate("02-08-2000")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr. Sugeon
            </p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>
              ABC Hospital, XYZ City
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout