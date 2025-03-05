
import img from "../assets/background.jpg";
import mdsInMP from "../assets/mandsaur_in_mp.png";
import background from "../assets/background2.jpg";

function Header() {
  return (
    <header
      className="w-screen h-screen bg-cover bg-no-repeat flex justify-center items-center lg:text-4xl"
      style={{
        backgroundImage: `url(${background})`,
      }}
     >
       <h1 className="text-gray-50 text-3xl sm:text-4xl lg:text-5xl">
        Welcome <em>to</em> <span className="text-red-500">Mandsaur!</span>
      </h1>
    </header>
  );
}

function Section({ title, imageSrc, altText, description }) {
  return (
    <div className="w-screen mx-auto h-screen gap-[50px] flex flex-col items-center justify-center text-center lg:flex-row lg:justify-center lg:items-center">
               {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          className="max-w-[400px] h-auto object-cover rounded-2xl m-[8px] lg:w-[500px] lg:h-[300px]"
          src={imageSrc}
          alt={altText}
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start w-[400px] p-4 lg:flex-wrap lg:w-[300px] lg:w-[400px]">
        <h1 className="text-3xl text-[#d7b112]">{title}</h1>
        <p className="text-lg sm:text-xl text-[#fbf38e] max-w-4xl">{description}</p>
      </div>
    </div>
  );
}


function Map() {
  return (
    <div className="w-screen p-0  mx-auto px-4 m-0  h-full flex flex-col items-center text-center ">
      <h1 className="text-3xl text-[#d7b112]">Map:</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2us!4v1708586315798!5m2!1sen!2us"
        className="w-full h-64 sm:h-80 md:h-96 max-w-[600px] border-none gap-6 px-5 py-10 rounded-md"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center "> 
      <Header />
      <Section className='w-full h-full'
        title="General Info"
        imageSrc={img}
        altText="Pashupatinath temple"
        description="Mandsaur is a popular tourist destination known for the temple of Lord Pashupatinath. 
        It is identified with the city of Dashpur, attested in various ancient texts. 
        The name Dashpur was given by merchants visiting the fortress of King Udayana and his ten sons."
      />
      <Section
        title="Geography"
        imageSrc={mdsInMP}
        altText="Mandsaur in Madhya Pradesh"
        description="Mandsaur has an area of 9,791 km² and lies on the border of Mewar and Malwa, resulting in a blend of both cultures. 
        It is bounded by Neemuch, Chittorgarh, Kota, and Ratlam districts and is part of the Ujjain Division."
      />
      <Map />
    </div>
  );
}