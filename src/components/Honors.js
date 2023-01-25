import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Top 10 SELEKNAS ASEAN Skills Competition ITNSA 2022" issued="KEMENAKER RI" desc="Linux Server, Windows Server, Linux Routing, Cisco Troubleshooting, Cisco Network Analysis, Network and System Programmabillity, Containerized Service." />
                <HonorCard name="3rd Place Winner of IT Network System Administration - LKS Jawa Tengah" issued="KEMENDIKBUD RI" desc="Linux Server, Windows Server, Cisco Configuration, Cisco Troubleshooting, Network and System Programmabillity, Containerized Service." />
                <HonorCard name="1st Place Winner of IT Network System Administration - LKS Kab. Tegal" issued="KEMENDIKBUD RI" desc="Linux Server, Cisco Configuration." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
