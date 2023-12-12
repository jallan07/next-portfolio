import { Progress } from "flowbite-react";

const skills = [
    {
        label: 'javascript',
        progress: 84
    },
    {
        label: 'react',
        progress: 86
    },
    {
        label: 'html/css',
        progress: 85
    },
    {
        label: 'typescript',
        progress: 80
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
        label: 'aws',
        progress: 68
    },
    {
        label: 'aws',
        progress: 68
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