export default function CertCard(props){
    return (
        <a href={props.img}>
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="hover:bg-dark w-full h-full bg-dark-200 rounded-md py-4 px-4">
            <img src={props.img} className="w-full h-56 mx-auto object-cover" alt={props.name}></img>
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light md:text-lg">Issued by {props.issued}</p>
                <p className="font-light text-gray-400">{props.desc}</p>

                <p className="font-light text-gray-400">{props.date}</p>
            </div>
        </div>
        </a>
    )
}
