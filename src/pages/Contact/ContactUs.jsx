import { Helmet } from 'react-helmet';

const ContactUs = () => {
  return (
    <section className='py-16'>
      <Helmet>
        <title>Taste Treasure | Contact</title>
      </Helmet>
      <div className="min-h-screen  flex justify-center items-center">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg  overflow-hidden">
        
        {/* Left Section: Contact Information */}
        <div className="bg-purple-800 text-white p-8 lg:w-1/3 flex h-1/2 flex-col items-end mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📞</span>
                <span>+0123 4567 8910</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">✉️</span>
                <span>hello@flowbase.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">📍</span>
                <span>102 Street 2714 Don</span>
              </div>
            </div>
          </div>
         
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-2/4">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Contact Us</h2>
          <p className="text-gray-500 mb-6">Any question or remarks? Just write us a message!</p>
          
          <form className="space-y-4">
            <div className="flex gap-10">
              {/* First Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-base">First Name</span>
                </label>
                <input type="text" placeholder="First Name" className="input  w-full text-sm border-b border-b-black rounded-none" />
              </div>
              {/* Last Name */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-base">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" className="input w-full border-b border-b-black rounded-none text-sm" />
              </div>
            </div>
            
            {/* Email and Phone */}
            <div className="flex gap-10">
              {/* Email */}
              <div className="form-control w-full">
                <label className="label">
                  <span>Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input border-b border-b-black rounded-none w-full text-sm" />
              </div>
              {/* Phone */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="">Phone</span>
                </label>
                <input type="tel" placeholder="+880" className="input text-sm border-b border-b-black rounded-none mb-5 w-full" />
              </div>
            </div>

            {/* Website Type */}
            <div className="form-control">
              <label className="label">
                <span className=" mb-2 font-extrabold">Do you have any complement on us?</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="websiteType" className="radio radio-primary" />
                  <span className='text-sm'>Posite</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="websiteType" className="radio radio-primary" defaultChecked />
                  <span className='text-sm'>Nagitive</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="websiteType" className="radio radio-primary" />
                  <span className='text-sm'>Behaviour</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="websiteType" className="radio radio-primary" />
                  <span className='text-sm'>Delivery Issues</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Write your message..."></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary w-full text-white">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;