import { Link } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai'

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-red-900 font-extrabold m-2 mb-4 text-5xl text-center  ">Property Listing application</h1>
      <div className="flex flex-col w-full">
   
     
      </div>
      
      <h1 className="text-3xl font-bold m-4 text-indigo-800">
       About App
      </h1>
      <div>
      
        <li className="m-4 text-slate-700">
          Comprehensive Listings: We offer an extensive database of real estate
          listings, featuring a wide range of properties, from luxurious estates
          to affordable starter homes. Whether you&apos;re a first-time buyer or
          a seasoned investor, you&apos;ll find options that suit your needs.
        </li>
        <li className="m-4 text-slate-700">
          User-Friendly Interface: Our website is designed with your convenience
          in mind. You can easily search for properties, set up alerts, and
          browse through high-quality images and detailed property descriptions.
        </li>
        <li className="m-4 text-slate-700">
          Expert Guidance: Our team of real estate experts is available to
          answer your questions, provide market insights, and assist you
          throughout your property search, purchase, or sale.
        </li>
        <li className="m-4 text-slate-700">
          Local Insights: We understand that location matters. That&apos;s why
          we provide detailed information about neighborhoods, schools,
          amenities, and local market trends to help you make informed
          decisions.
        </li>
        <li className="m-4 text-slate-700">
          Trust and Integrity: Trust is the foundation of every real estate
          transaction. We prioritize honesty, transparency, and ethical
          practices in all our interactions.
        </li>
      </div>
     





      
      <h1 className="text-3xl font-bold text-indigo-800">Contact For More.....</h1>
      <div class="font-sans text-base text-gray-900 ">
  <div class="text-base text-gray-900">
    <div class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div class="mx-2 pt-12 text-center md:mx-auto ">
        <div class="text-lg sm:text-xl xl:text-xl">   
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
    <form class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8">
      <div class="mb-4"><label class="text mb-2 block font-medium" for="email">Your e-mail:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="email" type="email" required="" /></div>
      <div class="mb-4"><label class="text mb-2 block font-medium" for="subject">Subject:</label><input class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="subject" type="subject" required="" /></div>
      <div class="mb-4"><label class="text mb-2 block font-medium" for="message">Message:</label><textarea class="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring" id="message" required=""></textarea></div>
      <div class="flex items-center">
        <div class="flex-1"></div>
        <button class="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700" type="submit">Send message</button>
      </div>
    </form>
    <div class="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
      <div class="">
        <p class="mb-1 font-medium border-b  pb-7">Contacters</p>
        <p class="mb-1">Yash Patil</p>
        <p class="mb-1">
        Email:
        <a href="#" class="font-semibold underline">yashpatil1711@gmail.com</a>
      </p>
      <p class="mb-1">
      Phone:
      <a href="#" class="font-semibold underline">+91 9552184742</a>
    </p>

    <p class="mb-1 font-medium border-b  pb-7"></p>
    <p class="mb-1 ">Yash Narvekar</p>
    <p class="mb-1">
    Email:
    <a href="#" class="font-semibold underline">yashpatil1711@gmail.com</a>
  </p>
  <p class="mb-1">
  Phone:
  <a href="#" class="font-semibold underline">+91 9552184742</a>
</p>

<p class="mb-1 font-medium border-b  pb-7"></p>
<p class="mb-1">Rishab Agarwal</p>
<p class="mb-1">
Email:
<a href="#" class="font-semibold underline">yashpatil1711@gmail.com</a>
</p>
<p class="mb-1">
Phone:
<a href="#" class="font-semibold underline">+91 9552184742</a>
</p>







       
  
      </div>
    </div>
  </div>
</div>

      <h1 className="text-3xl font-bold m-4 text-indigo-800">Thank you for choosing us {"😍😍😍😍"}</h1>
      <div className="flex justify-center">
        <Link to={'/'} className="border rounded-3xl text-center bg-indigo-700 text-white p-3 m-4">
          Get Started &gt;
        </Link>
        <Link to={'/profile'} className="flex items-center border rounded-3xl text-center bg-green-700 text-white p-3 m-4">
          Profile &nbsp; <AiOutlineUser />
        </Link>
      </div>
    </div>
  );
}
