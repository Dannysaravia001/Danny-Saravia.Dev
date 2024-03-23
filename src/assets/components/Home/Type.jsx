import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'A Web Developer',
                    'Self Motivated',
                    'An Avid learner',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
            }}
        />
    );
}

