
'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function WorkTimeline() {
    return (
        <Timeline>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>January 2018 - Present</Timeline.Time>
                    <Timeline.Title>Freelance Web Developer</Timeline.Title>
                    <Timeline.Time>Self-employed</Timeline.Time>
                    <Timeline.Body>
                        In-depth experience building client-facing, marketing-driven websites — mostly built using CMS platforms.
                    </Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time>April 2021 - November 2023</Timeline.Time>
                    <Timeline.Title>Full Stack Software Engineer</Timeline.Title>
                    <Timeline.Time>Paymerang</Timeline.Time>
                    <Timeline.Body>
                        Built responsive user interfaces using React (JavaScript/Typescript and Remix
                        framework), while also designing and implementing scalable back-end systems
                        using Hasura (GraphQL & SQL).
                    </Timeline.Body>
                    {/* <Button href="" color="gray">
                        Learn More
                        <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button> */}
                </Timeline.Content>
            </Timeline.Item>
        </Timeline>
    );
}
