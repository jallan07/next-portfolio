import { Progress } from "flowbite-react";

const skills = [
    {
        label: 'javascript',
        progress: 84
    },
    {
        label: 'react',
        progress: 77
    },
    {
        label: 'typescript',
        progress: 72
    },
    {
        label: 'graphql',
        progress: 85
    },
    {
        label: 'sql',
        progress: 65
    },
    {
        label: "star wars",
        progress: 90
    },
    {
        label: "apex legends",
        progress: 86
    },
]

export default function Skills() {
    return (<div className="text-sm font-light text-zinc-800 dark:text-zinc-100">
        {skills.map(sk => (<Progress
            key={sk.label}
            progress={sk.progress}
            textLabel={sk.label}
            textLabelPosition="outside"
            size="sm"
            labelText
            className='my-3'
        />))}

    </div>)
}