import { memo } from 'react'
import { usePageSeo } from './hooks/usePageSeo'
import { FileDown } from 'lucide-react'
import AnimatedBox from './components/AnimatedBox'
import Spline from '@splinetool/react-spline';

const CV = () => {
    usePageSeo({
        title: 'Wilhelm Rolstad | CV',
        description: 'CV for Wilhelm Rolstad: education at NTNU and work experience including Storebrand and military service.',
        canonicalPath: '/Cv',
    })


    return(
        <>
            <div className="flex flex-col mx-auto rounded p-2 m-2 max-w-7xl overflow-hidden">
                <AnimatedBox className="overflow-hidden p-10 h-115 text-[var(--text-color]">
                {({ isVisible }) => (
                    <div className="flex">
                        <p className={`w-[50%] transform transition duration-2000 ${isVisible ? 'translate-x-0' : '-translate-x-[100px]'}`}>
                            Studiespesialisering Stabekk VGS
                        </p>
                        <div className={`w-[50%] h-140 rounded-lg transform transition duration-2000 ${isVisible ? 'translate-x-0' : 'translate-x-[1000px]'}`}>
                            <Spline scene="https://prod.spline.design/XfdUGJw97P4prxPG/scene.splinecode" />
                        </div>
                    </div>
                )}
                </AnimatedBox>

                <AnimatedBox className="overflow-hidden p-10 h-115 text-[var(--text-color]">
                {({ isVisible }) => (
                    <div className="flex">
                        <div className={`w-[50%] transform transition duration-2000 ${isVisible ? 'translate-x-0' : '-translate-x-[100px]'}`}>
                            <h1>Førstegangstjeneste</h1>
                            <p>Vaktsoldat HMKG</p>
                            <p> AUG 2022 - JUN 2023</p>
                        </div>
                        <div className={`w-[50%] h-140 rounded-lg transform transition duration-2000 ${isVisible ? 'translate-x-0' : 'translate-x-[1000px]'}`}>
                            <Spline scene="https://prod.spline.design/XfdUGJw97P4prxPG/scene.splinecode" />
                        </div>
                    </div>
                )}
                </AnimatedBox>

                 <AnimatedBox className="overflow-hidden p-10 h-115 text-[var(--text-color]">
                {({ isVisible }) => (
                    <div className="flex">
                        <div className={`flex flex-col w-[50%] transform transition duration-2000 ${isVisible ? 'translate-x-0' : '-translate-x-[100px]'}`}>
                            <p>Bachelor i Informatikk NTNU</p>
                            <p>Studiespesialisering Stabekk VGS</p>
                            <p> AUG 2024 -</p>
                        </div>
                        <div className={`w-[50%] h-140 rounded-lg transform transition duration-2000 ${isVisible ? 'translate-x-0' : 'translate-x-[1000px]'}`}>
                            <Spline scene="https://prod.spline.design/XfdUGJw97P4prxPG/scene.splinecode" />
                        </div>
                    </div>
                )}
                </AnimatedBox>

                <AnimatedBox className="overflow-hidden p-10 h-115 text-[var(--text-color]">
                {({ isVisible }) => (
                    <div className="flex">
                        <div className={`flex flex-col w-[50%] transform transition duration-2000 ${isVisible ? 'translate-x-0' : '-translate-x-[100px]'}`}>
                            <h1 className="text-3xl">Skaderådgiver Storebrand Forsikring</h1>
                            <p>Sesongbasert Vikariat</p>
                            <p> JUN 2025 -</p>
                        </div>
                        <div className={`w-[50%] h-140 rounded-lg transform transition duration-2000 ${isVisible ? 'translate-x-0' : 'translate-x-[1000px]'}`}>
                            <Spline scene="https://prod.spline.design/XfdUGJw97P4prxPG/scene.splinecode" />
                        </div>
                    </div>
                )}
                </AnimatedBox>

                <div className="cursor-pointer flex flex-row items-center gap-1 hover:scale-105 active:scale-95 transition duration-200 mx-auto">
                    <p>Download CV </p><FileDown strokeWidth={1.2}/>
                </div>
            </div>
        </>
    )
}

export default memo(CV)
