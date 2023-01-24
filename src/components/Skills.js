import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import mikrotik from "../assets/skills/mikrotik.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="linux" experience="1 years" img={linux} />
                <SkillCard name="bash" experience="1 years" img={bash} />
                <SkillCard name="python" experience="1 years" img={python} />
                <SkillCard name="javascript" experience="1 years" img={javascript} />
                <SkillCard name="react" experience="1 years" img={reactIcon} />
                <SkillCard name="tailwind" experience="1 years" img={tailwind} />
                <SkillCard name="kvm" experience="1 years" img={kvm} />
                <SkillCard name="mikrotik" experience="1 years" img={mikrotik} />
                <SkillCard name="kubernetes" experience="1 years" img={kubernetes} />
                <SkillCard name="ansible" experience="1 years" img={ansible} />
                <SkillCard name="windows" experience="1 years" img={windows} />
                <SkillCard name="react" experience="1 years" img={react} />
                <SkillCard name="cisco" experience="1 years" img={cisco} />
                <SkillCard name="docker" experience="1 years" img={docker} />
                <SkillCard name="git" experience="1 years" img={git} />
                <SkillCard name="express" experience="1 years" img={express} />
                <SkillCard name="gitlab" experience="1 years" img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}