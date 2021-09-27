import React from "react";
import Particles from "react-particles-js"
import particlesConfig from "./config/particle-config";
import  "./config/particlecss.scss"

export default function ParticlesBackground()
{
return(

<Particles className="particless" params={particlesConfig} > </Particles>

);

}