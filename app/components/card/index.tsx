    "use client"
    import { Secondarybutton } from "../buttons"
    import { HeadingCardDescription, HeadingCardTitle } from "../heading"
    import { useRouter } from 'next/navigation'

    export const Card = ()=>{
        const router = useRouter();

        const data = {
            title:"AI based crop desease Predictor and weather data analytics system for mid to major farms",
            guide:"Mr. Shreyash B",
            depEligiblity:["Civil","Architecture","OENA"],
            skills:["Regression", "Tenorflow" ,"Python","Python", "TensorFlow", "Data Analytics"],
            duration:{
                start:{
                    month:"January",
                    year:"2024"
                },
                end:{
                    month:"March",
                    year:"2024"
                }
            }

        }
        return(
            <div className="flex flex-col  justify-between  w-64 h-80 bg-white shadow-md rounded-lg p-4">
                <div className=" border-b-2 border-gray-300 pb-4">
                    <HeadingCardTitle>{data.title}</HeadingCardTitle>
                    
                </div>
                <div className="flex flex-col gap-1">
                <div className="flex">
                        <p>Under:</p>
                        <p>{data.guide}</p> 
                    </div>
                    
                    <div className="flex">
                        <p>Openfor:</p>
                        <div className="flex gap-2 flex-wrap ">{data.depEligiblity.slice(0,3).map(department => {
                            return(
                                <div className="border rounded-md bg-slate-300">{department}</div>
                            )
                        })}</div>
                    </div>
                    <div className="flex">
                        <p>Skills:</p>
                        <div className="flex gap-2 flex-wrap">
                            {data.skills.slice(0,3).map(skill =>{
                                return(
                                    <div className="border rounded-md bg-slate-300">{skill}</div>
                                )
                            })}
                        </div>
                    
                    </div>
                    <div className="flex">
                        <p>Duration:</p>
                        <p>{data.duration.start.month.slice(0,3)}{data.duration.start.year} - {data.duration.end.month.slice(0,3)}{data.duration.end.year}</p>
                    </div>
                    
                    
                    
                </div>

                <Secondarybutton onClick={()=>{router.push('/researchdetail')}}>Know more</Secondarybutton>

            </div>
        )
    }