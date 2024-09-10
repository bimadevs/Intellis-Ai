import Card from "./ui/card";
import { InputLoader } from "../components/ui/input-loader";
import { Hero } from "./ui/hero";
import { Code } from "./ui/code";

export default function Free() {
    return(
        <div>
            <Hero />
            <Code />
            <InputLoader />
            {/* <Card /> */}
        </div>
    )
}