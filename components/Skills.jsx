import{RiReactjsFill,RiNextjsFill,RiHtml5Fill,RiCss3Fill,RiJavaFill,RiPhpFill,RiTailwindCssFill, RiNodejsFill} from 'react-icons/ri';
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
const skills = [
    {
        icon: <RiReactjsFill/>,
        name: "React.js"
    },
    {
        icon: <RiNextjsFill/>,
        name: "Next.js"
    },
     {
        icon: <RiNodejsFill/>,
        name: "Node.js"
    },
    {
        icon: <RiHtml5Fill/>,
        name: "HTML 5"
    },
    {
        icon: <RiCss3Fill/>,
        name: "CSS 3"
    },
    {
        icon: <RiJavaFill/>,
        name: "JAVA"
    },
    {
        icon: <RiPhpFill/>,
        name: "PHP"
    },
    {
        icon: <RiTailwindCssFill/>,
        name: "Tailwind CSS"
    },
   
   
]

const Skills = () => {
  return (
    <div>
        <h2 className='h2 mb-8'>
            My <span className='text-accent' >Skills</span>
        </h2>
        <div className='flex flex-wrap gap-6 max-w-sm xl:max-w-none'>
            {skills.map((item, index)=>{
                return <TooltipProvider key={index}>
                    <Tooltip>
                        <TooltipTrigger className='w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group'>
                            <div className='text-3xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className='text-lg'>{item.name}</div>
                        </TooltipContent>
                       
                    </Tooltip>
                    
                </TooltipProvider>
            })}
        </div>
       
     
    </div>
  );
};

export default Skills
