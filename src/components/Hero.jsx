import aboutImg from "../assets/Myphoto.jpeg"
import './Hero.css';
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap lg:mr-20">
             <div  className="w-full lg:w-1/2">
            <img className=" home__img ml-auto mr-auto w-auto h-96 pb-10 rounded-2xl" src={aboutImg} alt="Profile_Picture"/>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                <h1 className="pb-16 text-5xl font-thin tracking-tighter  lg:text-7xl ">
                    Subham Singh</h1>
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-green-500 
                bg-clip-text text-4xl tracking-tight  text-transparent ">
                Web Developer
                </span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tight"> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Ut praesentium iusto enim corporis architecto tempore, quo assumenda aspernatur hic! 
                     Nihil hic perspiciatis vel ratione tempore corrupti laboriosam esse provident officiis.
                </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero
