import Typewriter from 'typewriter-effect';

export default function Type() {
    return (
        <Typewriter 
            options={{
                strings: [
                    'About Me ...',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                typeSpeed: 200// Adjust this value to make it type more slowly
            }}
        />
    );
}