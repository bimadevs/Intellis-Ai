import Card from "./ui/card";
import { InputLoader } from "./ui/input-loader";
import { Hero } from "./ui/hero";
import { Code } from "./ui/code";
import { TextHover } from "./ui/text-hover";
import { ShowText } from "./ui/show-text";

export default function Free() {
    return(
        <div>
            <Hero />
            <ShowText />
            <Card />
            <Code />
            <InputLoader />
            <TextHover />
            
            
        </div>
    )
}