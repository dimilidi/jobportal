import * as React from "react";

type Props = {
  
}

const PostAd = (props: Props) => {

  return (
    <div>
      <form
       onSubmit={(e: React.SyntheticEvent) => {
         e.preventDefault();
       }}
      className='mt-[5rem] flex flex-col items-center justify-center gap-7 md:mt-[5rem] lg:mt-[15rem]'>
        <div className='z-10 flex flex-col items-center justify-center gap-7 py-4 px-4 shadow-lg bg-white rounded-xl w-[350px] md:w-[500px] lg:w-[800px]'>
    
    <div className="flex flex-col items-start gap-6 md:flex-col lg:flex-row md:gap-10 lg:gap-20">
    {/* TITLE - Ceate your Ad */}
          <div className="flex flex-col items-start lg:items-center">
            <h1 className='text-4xl font-medium text-textBlack md:text-5xl lg:text-5xl'><span className="italic font-medium text-darkGreen">Create </span>your Ad</h1>
            </div>

    {/* RADIO (offering- searching) */}
          <div className="flex flex-row items-center gap-2">
            <input type="radio"
                    value="offering"
                    name="case"
                    className="accent-darkGreen"/>
            <label className="form-label">offering</label>

            <input type="radio"
                    value="searching"
                    name="case"
                    className="accent-darkGreen"/>
            <label className="form-label">searching</label>
          </div>
      </div>


          <div className="flex flex-col items-center justify-center">
    {/* TITLE - CITY */}
          <div className="flex flex-col lg:flex-row gap-0 md:gap-2 lg:gap-2">
            <div>
              <label htmlFor="title" className="form-label hidden mb-0 px-2 text-gray font-semibold lg:inline-block">Title</label>
                <input type="text"
                        name="title"
                        className="form-control w-full block px-3 pt-1 mb-1 text-gray border-2 rounded-lg border-lightGray border-opacity-50 placeholder:text-sm
                        focus:outline-lightGray lg:placeholder-transparent md:w-[25rem] lg:w-[25rem]" placeholder="Title"/>
            </div>
            <div>
              <label htmlFor="city" className="form-label hidden mb-0 px-2 text-gray font-semibold lg:inline-block">City</label>
                <input type="text"
                        name="city"
                        className="form-control w-full block px-3 pt-1 text-gray rounded-lg border-2 border-lightGray border-opacity-50  placeholder:text-sm focus:outline-lightGray lg:w-[17rem] lg:placeholder-transparent" placeholder="City"/>
            </div>
          </div>

    {/* TEXTAREA */}
          <textarea className="w-[17.5rem] h-[170px] mt-3 mb-3 px-3 py-3 rounded-xl resize-none  caret-gray border-2 border-lightGray border-opacity-50 focus:outline-lightGray placeholder:text-sm placeholder:text-lightGray md:w-[25rem] lg:w-full lg:px-6 lg:py-6 lg:mb-0 lg:rounded-3xl lg:placeholder:text-base" placeholder="description.."></textarea>


    {/* CHECKBOX (offering- searching) */}
            <div className="pb-8 flex flex-col-reverse justify-center gap-2 lg:flex-row lg:gap-2 lg:mt-6">
              <div className="flex flex-row justify-center gap-3">
                <p className="text-lightGray">How to reach you:</p>
                <div className="flex flex-row gap-2">
                <input type="checkbox"
                        value="email"
                        name="contact"
                        checked={true}
                        className="accent-darkGreen form-checkbox"/>
                <label>Email</label>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox"
                        value="phone"
                        name="contact"
                        className="accent-darkGreen form-checkbox"/>
                <label>Phone</label>
              </div>
            </div>

    {/* WAGE */}
              <div className="flex flex-row justify-center gap-2 lg:flex-row lg:justify-end lg:gap-2">
                <label className="text-lightGray">Approx. wage per hour:</label>
                <input type="number"
                        name="wage"
                        className="w-1/4 text-sm text-gray rounded-lg border-2 border-lightGray border-opacity-50 focus:outline-none placeholder:text-right placeholder:font-bold placeholder:opacity-50 placeholder:mr-2" placeholder="$"/>
              </div>
            </div>
            </div>
        </div>

    {/* Browser Ads button */}
          <div>
            <input type="submit"
                    value="Post Ad" 
              className='form-submit h-[40px] w-[250px] rounded-full bg-lightGreen text-background'/>
          </div>

    {/* ELEMENTE (kreis-linie) */}
        <div>
          <div className='w-[48%] absolute top-[10.5rem] left-0 z-30 border-b-[3px] border-lightGreen lg:w-[100%] lg:top-[32rem] md:inline-block lg:z-0'></div>
          <div className='w-[100%] hidden absolute top-[32rem] left-0 border-b-[3px] border-lightGreen md:hidden lg:inline-block'></div>
          <div className='w-24 h-48 hidden absolute top-[26rem] left-0 rounded-tr-full rounded-br-full bg-lightGreen md:hidden lg:inline-block'></div>
        </div>
      </form>
    </div>
  )
}

export default PostAd