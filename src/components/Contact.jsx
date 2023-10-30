const Contact = () => {
  return (
    <section id='contact' className='pt-8 pb-8 bg-slate-200'>
      <div className='flex justify-center m-6'>
        <h2 className='text-4xl mb-8 text-center text-custom-dark-blue border-b-4 border-custom-yellow'>
          Contact Me
        </h2>
      </div>
      <div className='py-6 flex flex-col justify-center sm:py-12'>
        <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
          <div className='absolute inset-0 bg-gradient-to-r from-custom-blue to-custom-dark-blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
          <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
            <div className='max-w-md mx-auto'>
              <div>
                <h1 className='text-2xl font-semibold text-custom-title'>
                  I&apos;d love to hear from you!
                </h1>
              </div>
              {/* The Form */}
              <form name='contact' method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact' />
                <div className='divide-y divide-gray-200'>
                  <div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
                    <div className='flex space-x-4'>
                      <div className='relative w-1/2'>
                        <input
                          autoComplete='off'
                          id='name'
                          name='name'
                          type='text'
                          className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-custom-yellow'
                          placeholder='Full Name'
                        />
                        <label
                          htmlFor='name'
                          className='absolute left-0 -top-3.5 text-custom-dark-blue text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                          Full Name
                        </label>
                      </div>
                      <div className='relative w-1/2'>
                        <input
                          autoComplete='off'
                          id='email'
                          name='email'
                          type='email'
                          className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-custom-yellow'
                          placeholder='Email Address'
                        />
                        <label
                          htmlFor='email'
                          className='absolute left-0 -top-3.5 text-custom-dark-blue text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                          Email Address
                        </label>
                      </div>
                    </div>

                    <div className='flex space-x-4'>
                      <div className='relative w-1/2'>
                        <input
                          autoComplete='off'
                          id='subject'
                          name='subject'
                          type='text'
                          className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-custom-yellow'
                          placeholder='Subject'
                        />
                        <label
                          htmlFor='subject'
                          className='absolute left-0 -top-3.5 text-custom-dark-blue text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                          Subject
                        </label>
                      </div>
                      <div className='relative w-1/2'>
                        <input
                          autoComplete='off'
                          id='phone'
                          name='phone'
                          type='text'
                          className='peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-custom-yellow'
                          placeholder='Phone Number'
                        />
                        <label
                          htmlFor='phone'
                          className='absolute left-0 -top-3.5 text-custom-dark-blue text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                          Phone Number
                        </label>
                      </div>
                    </div>

                    <div className='relative'>
                      <textarea
                        id='message'
                        name='message'
                        className='w-full h-24 border rounded text-gray-900 focus:outline-none focus:border-custom-yellow'
                        placeholder='Your Message'></textarea>
                    </div>

                    <div className='relative mt-4'>
                      <button
                        type='submit'
                        className='bg-custom-blue text-white rounded-md px-4 py-2 w-full'>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
