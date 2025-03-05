
import '../App.css';

const links = [
  {
    href: "https://www.wikiwand.com/en/Mandsaur",
    title: "Mandsaur in Wikiwand"
  },
  {
    href: "https://archaeology.mp.gov.in/contents.aspx?page=district-archaeological-museum-mandsaur&number=FXGMlN7erx96vLdBAbN93w==",
    title: "Museums in Mandsaur"
  },
  {
    href: "https://mandsaur.nic.in/en/tourism/tourist-places/",
    title: "Mandsaur Tours"
  }
];

export default function Links(){
  return(
    <div className="overflow-x-hidden w-screen flex flex-col items-center justify-center h-screen text-2xl md:px-10 md:text-2xl text-[#01c48a] ">
      <ul className="list-none flex flex-col items-center justify-center text-center">
        {
          links.map(({href, title}, index) => {
            return(
              <li key={index} className="my-2">
                <a
                  className="text-[#01c48a] text-xl md:text-2xl relative text-shadow transition-shadow duration-500 hover:text-[#019a6a]"
                  href={href}
                  target='_blank'
                >
                  {title}
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
