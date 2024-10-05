import aboutImg from "../assets/Miguel.jpg"
const About = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">About
                  <span className="text-neutral-500"> Me</span>
        </h2>
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
            <img className="lg:px-36 pb-1 rounded-4xl md:px-60 pb-1 px-14 pb-10" src={aboutImg} alt="about"/>
            </div>       
        </div>
        <div className="w-full md:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatum dolorum error soluta
                         quibusdam expedita. Quaerat provident sed modi autem voluptatibus nobis necessitatibus maxime at
                          facilis vitae. Harum, perspiciatis quis.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
