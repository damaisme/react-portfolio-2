
export default function HonorCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"  className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4">
            {/* <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img> */}
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light md:text-lg">Issued by {props.issued}</p>
                <p className="font-light text-gray-400">{props.desc}</p>
            </div>
        </div>
    )
}
